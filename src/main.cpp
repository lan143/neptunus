#include <Arduino.h>
#include <ArduinoOTA.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <esp_log.h>
#include <esp_task_wdt.h>
#include <discovery.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <PCF8574.h>
#include <Wire.h>
#include <network/network.h>
#include <network/network_api.h>
#include <log/log.h>

#include "defines.h"
#include "config.h"
#include "automation/automation.h"
#include "storage/safe_littlefs_storage.hpp"
#include <counter/pcf8574.h>

#include "meter/handler.h"
#include "meter/persistence.h"
#include "controls/handler.h"
#include "web/handler.h"

EDConfig::DataMgr<Config> configMgr(new Neptunus::SafeStorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDNetwork::NetworkApi networkApi(networkMgr);
EDMQTT::MQTT mqtt;

EDWB::WirenBoard wirenboard(Serial2);

PCF8574 inputDriver(INPUT_I2C_ADDRESS);
PCF8574 relayDriver(RELAYS_I2C_ADDRESS);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

EDConfig::DataMgr<MeterState> homeRingStorageDataMgr(new Neptunus::SafeStorageLittleFS<MeterState>("/meter.bin"));
RingStorage homeRingStorage(&homeRingStorageDataMgr);
RingStoragePersistence homePersistence(&homeRingStorage);
EDCommon::Counter::PCF8574P homeMeter(&inputDriver);

EDConfig::DataMgr<MeterState> yardRingStorageDataMgr(new Neptunus::SafeStorageLittleFS<MeterState>("/yard_meter.bin"));
RingStorage yardRingStorage(&yardRingStorageDataMgr);
RingStoragePersistence yardPersistence(&yardRingStorage);
EDCommon::Counter::PCF8574P yardMeter(&inputDriver);

MeterHandler meterHandler(&homeMeter, &yardMeter);

Automation automation(&discoveryMgr, &mqtt, &relayDriver, &wirenboard, &homeMeter, &yardMeter);

ControlsHandler controlsHandler(&automation, &homeMeter, &yardMeter);

Handler handler(&configMgr, &networkApi, &networkMgr, &healthCheck, &meterHandler, &controlsHandler);

bool inited = false;

// Set from the ArduinoOTA onStart callback (runs in the OTA/network context)
// and acted on by loop(); the automation API must not be used during OTA
// because its relay queues are only drained by automation.update().
static volatile bool s_otaActive = false;
static volatile bool s_otaSafeStateApplied = false;

// Mirrors EDConfig::DataMgr::calculateChecksum (CRC16, poly 0xa001, init 0xffff,
// byte-wise) so the legacy blob can be validated before the normal load.
static uint16_t calculateConfigChecksum(const ConfigLegacyV2* data)
{
    const uint8_t* buf = reinterpret_cast<const uint8_t*>(data);
    uint16_t crc = 0xffff;
    const uint16_t poly = 0xa001;

    for (uint16_t i = 0; i < sizeof(ConfigLegacyV2); i++) {
        crc ^= buf[i];
        for (uint8_t j = 0; j < 8; j++) {
            crc >>= 1;
            if (crc & 0x01) {
                crc ^= poly;
            }
        }
    }

    return crc;
}

// Copies a fixed-size legacy char array into dst, always NUL-terminating and
// never reading more than dstSize - 1 source bytes. A CRC-valid blob can still
// contain a field with no terminator, so strcpy() here could read past the
// struct; strnlen bounds the read to the destination capacity.
static void copyTerminatedString(char* dst, const char* src, size_t dstSize)
{
    size_t n = strnlen(src, dstSize - 1);
    memcpy(dst, src, n);
    dst[n] = '\0';
}

void setup()
{
    randomSeed(micros());

    Serial.begin(SERIAL_SPEED);

    esp_log_level_set("*", ESP_LOG_VERBOSE);

    LOGI("setup", "Neptunus");
    LOGI("setup", "start");

    // Bring up I2C and the relay expander before anything that can fail (FS,
    // network). The PCF8574 powers up writing 0xFF, which leaves the
    // normally-open valves de-energized = physically OPEN, so the very first
    // successful write must be the safe (all valves closed, pumps off) mask.
    LOGI("setup", "init i2c");
    Wire.begin(I2CSDA, I2CSCL);
    Wire.setClock(100000);

    LOGI("setup", "init PCF8574");
    inputDriver.begin();
    if (relayDriver.begin(RELAY_SAFE_BOOT_MASK)) {
        LOGI("setup", "relay driver safe state applied");
    } else {
        // Device may be absent; do not abort boot. Keep going so the rest of
        // the controller still comes up.
        LOGE("setup", "relay driver safe state write failed");
    }

    LOGI("setup", "littlefs begin");
    if (!LittleFS.begin(true)) {
        LOGE("setup", "failed to init littlefs, formatting");
        LittleFS.format();
        if (!LittleFS.begin(true)) {
            LOGE("setup", "failed to init littlefs after format; running with default config, stores will fail");
        }
    }

    configMgr.setDefault([](Config* config) {
        snprintf(config->network.wifiAPSSID, WIFI_SSID_LEN, "Neptunus_%s", EDUtils::getMacAddress().c_str());
        snprintf(config->mqttStateTopic, MQTT_TOPIC_LEN, "neptunus/%s/state", EDUtils::getChipID());
        snprintf(config->mqttCommandTopic, MQTT_TOPIC_LEN, "neptunus/%s/set", EDUtils::getChipID());
        snprintf(config->mqttHADiscoveryPrefix, MQTT_TOPIC_LEN, "homeassistant");
        snprintf(config->mqttTopicPrefix, MQTT_TOPIC_LEN, "neptunus/%s", EDUtils::getChipID());

        strcpy(config->log.host, "192.168.1.2");
        config->log.port = 5555;
        strcpy(config->log.uri, "/_bulk");

        strcpy(config->otaPassword, "somestrongpassword");

        config->modbusSpeed = 9600;
        config->addressQDY30A = 1;
        config->addressWBMAI6 = 2;

        config->rainwaterPitMaxHeight = 1.6f;
        config->rainwaterPitMaxFillLevel = 20.0f;
        // rainwaterPitLevelTopic left empty: feature disabled until configured

        snprintf(config->electricityTopic, MQTT_TOPIC_LEN, "finedog/electricity");
    });

    // One-time migration of the persisted config blob from the legacy v2 layout.
    // The struct grew by electricityTopic, so DataMgr::load() would reject the old
    // blob on size/checksum mismatch and silently reset every setting to defaults.
    // Read the old blob here and carry the common fields forward after the normal
    // load; on any mismatch fall through to the unchanged default flow.
    ConfigLegacyV2 legacy;
    bool haveLegacy = false;
    {
        File legacyFile = LittleFS.open("/config.bin", FILE_READ);
        if (legacyFile) {
            if (legacyFile.size() == sizeof(ConfigLegacyV2) + sizeof(uint16_t)) {
                uint16_t storedChecksum = 0;
                bool readOk =
                    legacyFile.read(reinterpret_cast<uint8_t*>(&legacy), sizeof(ConfigLegacyV2)) == sizeof(ConfigLegacyV2)
                    && legacyFile.read(reinterpret_cast<uint8_t*>(&storedChecksum), sizeof(uint16_t)) == sizeof(uint16_t);

                if (readOk && storedChecksum == calculateConfigChecksum(&legacy) && legacy.version == 2) {
                    haveLegacy = true;
                }
            }
            legacyFile.close();
        }
    }

    LOGI("setup", "load config");
    configMgr.load();

    if (haveLegacy) {
        // Carry legacy user settings into the freshly loaded v3 config. version
        // stays CURRENT_VERSION and electricityTopic keeps the default above.
        Config* config = configMgr.getData();
        config->network = legacy.network;
        config->mqtt = legacy.mqtt;
        config->log = legacy.log;

        copyTerminatedString(config->otaPassword, legacy.otaPassword, sizeof(config->otaPassword));

        config->mqttIsHADiscovery = legacy.mqttIsHADiscovery;
        copyTerminatedString(config->mqttHADiscoveryPrefix, legacy.mqttHADiscoveryPrefix, sizeof(config->mqttHADiscoveryPrefix));
        copyTerminatedString(config->mqttCommandTopic, legacy.mqttCommandTopic, sizeof(config->mqttCommandTopic));
        copyTerminatedString(config->mqttStateTopic, legacy.mqttStateTopic, sizeof(config->mqttStateTopic));
        copyTerminatedString(config->mqttTopicPrefix, legacy.mqttTopicPrefix, sizeof(config->mqttTopicPrefix));

        config->modbusSpeed = legacy.modbusSpeed;
        config->addressQDY30A = legacy.addressQDY30A;
        config->addressWBMAI6 = legacy.addressWBMAI6;

        copyTerminatedString(config->rainwaterPitLevelTopic, legacy.rainwaterPitLevelTopic, sizeof(config->rainwaterPitLevelTopic));
        config->rainwaterPitMaxHeight = legacy.rainwaterPitMaxHeight;
        config->rainwaterPitMaxFillLevel = legacy.rainwaterPitMaxFillLevel;

        if (configMgr.store()) {
            LOGI("setup", "migrated config from legacy v2 layout");
        } else {
            LOGE("setup", "failed to store migrated config");
        }
    }

    networkLogger.init(configMgr.getData()->log, CONTROLLER_NAME, EDUtils::formatString("Neptunus_%s", EDUtils::getMacAddress().c_str()));

    LOGI("setup", "init modbus");
    Serial2.begin(configMgr.getData()->modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    wirenboard.init(200);

    LOGI("setup", "init network");
    networkMgr.init(configMgr.getData()->network, false);

    LOGI("setup", "init OTA");
    ArduinoOTA.setPassword(configMgr.getData()->otaPassword);
    ArduinoOTA.onStart([]() {
        s_otaActive = true;
        LOGW("setup", "OTA started: switching outputs to safe state");
    });
    // On a failed transfer the OTA server returns to idle without a reboot, so
    // clear the flag to resume automation (otherwise pumps would stay disabled
    // until the next reset). A successful update reboots, so onEnd is moot.
    ArduinoOTA.onError([](ota_error_t error) {
        (void) error;
        s_otaActive = false;
        s_otaSafeStateApplied = false;
        LOGE("setup", "OTA failed: resuming automation");
    });
    ArduinoOTA.begin();

    LOGI("setup", "mqtt init");
    mqtt.init(configMgr.getData()->mqtt);
    networkMgr.OnConnect([&](bool isConnected) {
        networkLogger.enable(isConnected);

        if (isConnected) {
            mqtt.connect();
        } else {
            mqtt.disconnect();
        }
    });
    healthCheck.registerService(&mqtt);

    networkApi.onSettingsChanged([&](const EDNetwork::Config& config) -> bool {
        configMgr.getData()->network = config;
        return configMgr.store();
    });

    LOGI("setup", "api handler init");
    handler.init();

    LOGI("setup", "discoveryMgr init");
    discoveryMgr.init(
        configMgr.getData()->mqttHADiscoveryPrefix,
        configMgr.getData()->mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    LOGI("setup", "create HA device");
    device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    LOGI("setup", "init home water meter");
    homeRingStorageDataMgr.setDefault([](MeterState* state) {
        for (int i = 0; i < RING_STORAGE_SIZE; i++) {
            state->values[i] = 0;
        }
    });
    homeRingStorageDataMgr.load();
    homeRingStorage.init();
    homeMeter.init(0, {
        EDCommon::Counter::withMQTT(&mqtt, configMgr.getData()->mqttTopicPrefix, "neptunus", "Water consumption"),
        EDCommon::Counter::withDiscovery(&discoveryMgr, device),
        EDCommon::Counter::withObjectID("water_consumption"),
        EDCommon::Counter::withCost(10),
        EDCommon::Counter::withPersistence(&homePersistence)
    });

    LOGI("setup", "init yard water meter");
    yardRingStorageDataMgr.setDefault([](MeterState* state) {
        for (int i = 0; i < RING_STORAGE_SIZE; i++) {
            state->values[i] = 0;
        }
    });
    yardRingStorageDataMgr.load();
    yardRingStorage.init();
    yardMeter.init(1, {
        EDCommon::Counter::withMQTT(&mqtt, configMgr.getData()->mqttTopicPrefix, "neptunus", "Yard water consumption"),
        EDCommon::Counter::withDiscovery(&discoveryMgr, device),
        EDCommon::Counter::withObjectID("yard_water_consumption"),
        EDCommon::Counter::withCost(1),
        EDCommon::Counter::withPersistence(&yardPersistence)
    });

    LOGI("setup", "automation init");
    automation.init(device, *configMgr.getData());

    // Subscribe the Arduino loop task to the task watchdog, then feed it from
    // the top of loop(). The Arduino core's sdkconfig pre-initializes the TWDT
    // at system startup (5 s timeout, panic on timeout, IDLE0 watched), so a
    // plain esp_task_wdt_init() call is rejected with ESP_ERR_INVALID_STATE
    // and does nothing — the timeout can only be changed by deinit + re-init.
    //
    // The synchronous full-partition erase that esp_ota_begin performs inside
    // ArduinoOTA.handle() runs BEFORE any OTA callback: Update.begin() wipes
    // the whole ~1.85 MB OTA app partition (29 x 64-KB block erases at
    // ~120-400 ms each = ~4-11.6 s) while every subscribed task starves, so
    // the core's fixed 5-s timeout panics mid-upload at 10-13% progress.
    // Re-initialize the TWDT with a 20-s panic timeout: it covers the erase
    // while still catching a genuine loop hang, and the OTA data-transfer
    // phase stays watchdog-protected (a hang there reboots the device, which
    // is desired).
    //
    // IDLE0 is unsubscribed first because a sustained WiFi retransmit storm
    // during the OTA data pull can starve it for longer than any sane timeout,
    // and a starved idle task is not a hung automation — the loop task remains
    // the watched authority.
    TaskHandle_t idle0 = xTaskGetIdleTaskHandleForCPU(0);
    if (idle0 != nullptr) {
        esp_task_wdt_delete(idle0);
    }
    if (esp_task_wdt_deinit() != ESP_OK) {
        LOGE("setup", "failed to deinit watchdog");
    }
    if (esp_task_wdt_init(20, true) != ESP_OK) {
        LOGE("setup", "failed to init watchdog");
    }
    if (esp_task_wdt_add(NULL) != ESP_OK) {
        LOGE("setup", "failed to subscribe loop task to watchdog");
    }

    inited = true;
    LOGI("setup", "complete");
}

void loop()
{
    esp_task_wdt_reset();

    if (!inited) {
        return;
    }

    // OTA must not drive the valves: automation.update() is skipped below, and
    // here we force the outputs to the same safe mask used at boot. Done once
    // per OTA session so we do not fight other writers afterwards.
    if (s_otaActive && !s_otaSafeStateApplied) {
        // All three valves closed (energized LOW) and every pump off (HIGH).
        // During OTA the unit is unattended, so no uncontrolled fill may start;
        // the bypass valve is closed too so neither the pump nor the city line
        // can feed the plumbing.
        relayDriver.write8(RELAY_SAFE_BOOT_MASK);
        s_otaSafeStateApplied = true;
        LOGW("setup", "OTA safe state applied: valves closed, pumps off");
    }

    networkMgr.loop();
    discoveryMgr.loop();
    ArduinoOTA.handle();
    healthCheck.loop();
    networkLogger.update();
    if (!s_otaActive) {
        // Automation may re-open valves; it must not run mid-flash.
        automation.update();
    }
    homeMeter.update();
    yardMeter.update();
}
