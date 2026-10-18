#include <Arduino.h>
#include <ArduinoOTA.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <esp_log.h>
#include <discovery.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <state/state_mgr.h>
#include <PCF8574.h>
#include <Wire.h>
#include <network/network.h>
#include <log/log.h>

#include "defines.h"
#include "config.h"
#include "automation/automation.h"
#include <counter/pcf8574.h>

#include "meter/handler.h"
#include "meter/persistence.h"
#include "state/state.h"
#include "state/producer.h"
#include "web/handler.h"

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDMQTT::MQTT mqtt;

EDWB::WirenBoard wirenboard(Serial2);

PCF8574 inputDriver(INPUT_I2C_ADDRESS);
PCF8574 relayDriver(RELAYS_I2C_ADDRESS);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

StateProducer stateProducer(&mqtt);
EDUtils::StateMgr<State> stateMgr(&stateProducer);

EDConfig::DataMgr<MeterState> homeRingStorageDataMgr(new EDConfig::StorageLittleFS<MeterState>("/meter.bin"));
RingStorage homeRingStorage(&homeRingStorageDataMgr);
RingStoragePersistence homePersistence(&homeRingStorage);
EDCommon::Counter::PCF8574P homeMeter(&inputDriver);

EDConfig::DataMgr<MeterState> yardRingStorageDataMgr(new EDConfig::StorageLittleFS<MeterState>("/yard_meter.bin"));
RingStorage yardRingStorage(&yardRingStorageDataMgr);
RingStoragePersistence yardPersistence(&yardRingStorage);
EDCommon::Counter::PCF8574P yardMeter(&inputDriver);

MeterHandler meterHandler(&homeMeter, &yardMeter);

Automation automation(&discoveryMgr, &mqtt, &relayDriver, &stateMgr, &wirenboard, &homeMeter);

Handler handler(&configMgr, &networkMgr, &healthCheck, &meterHandler);

bool inited = false;

void setup()
{
    randomSeed(micros());

    Serial.begin(SERIAL_SPEED);

    esp_log_level_set("*", ESP_LOG_VERBOSE);

    LOGI("setup", "Neptunus");
    LOGI("setup", "start");

    LOGI("setup", "littlefs begin");
    if (!LittleFS.begin(true)) {
        LOGE("setup", "failed to init littlefs");
        return;
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
    });

    LOGI("setup", "load config");
    configMgr.load();

    networkLogger.init(configMgr.getData()->log, CONTROLLER_NAME, EDUtils::formatString("Neptunus_%s", EDUtils::getMacAddress().c_str()));

    LOGI("setup", "init modbus");
    Serial2.begin(configMgr.getData()->modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    wirenboard.init(200);

    LOGI("setup", "init i2c");
    Wire.begin(I2CSDA, I2CSCL);
    Wire.setClock(100000);

    LOGI("setup", "init PCF8574");
    inputDriver.begin();
    relayDriver.begin();

    LOGI("setup", "init network");
    networkMgr.init(configMgr.getData()->network, false);

    LOGI("setup", "init OTA");
    ArduinoOTA.setPassword(configMgr.getData()->otaPassword);
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

    LOGI("setup", "state producer init");
    stateProducer.init(configMgr.getData()->mqttStateTopic);

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

    inited = true;
    LOGI("setup", "complete");
}

void loop()
{
    if (!inited) {
        return;
    }

    networkMgr.loop();
    discoveryMgr.loop();
    ArduinoOTA.handle();
    healthCheck.loop();
    stateMgr.loop();
    networkLogger.update();
    automation.update();
    homeMeter.update();
    yardMeter.update();
}
