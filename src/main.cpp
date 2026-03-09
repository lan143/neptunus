#include <Arduino.h>
#include <ArduinoOTA.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <esp_log.h>
#include <discovery.h>
#include <iarduino_Modbus.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <state/state_mgr.h>
#include <PCF8574.h>
#include <Wire.h>
#include <network/network.h>
#include <log/log.h>

#include "defines.h"
#include "config.h"
#include "command/command_consumer.h"
#include "state/state.h"
#include "state/producer.h"
#include "web/handler.h"

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDMQTT::MQTT mqtt;

ModbusClient modbus(Serial2);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

StateProducer stateProducer(&mqtt);
EDUtils::StateMgr<State> stateMgr(&stateProducer);

CommandConsumer commandConsumer;

Handler handler(&configMgr, &networkMgr, &healthCheck);

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

        strcpy(config->log.host, "192.168.1.2");
        config->log.port = 5555;
        strcpy(config->log.uri, "/_bulk");

        strcpy(config->otaPassword, "somestrongpassword");
    });

    LOGI("setup", "load config");
    configMgr.load();

    networkLogger.init(configMgr.getData()->log, CONTROLLER_NAME, EDUtils::formatString("Neptunus_%s", EDUtils::getMacAddress().c_str()));

    LOGI("setup", "init modbus");
    Serial2.begin(configMgr.getData()->modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);
    modbus.begin();
    modbus.setTypeMB(MODBUS_RTU);
    modbus.setTimeout(200);

    LOGI("setup", "init i2c");
    Wire.begin(I2CSDA, I2CSCL);
    Wire.setClock(100000);

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

    LOGI("setup", "command consumer init");
    commandConsumer.init(configMgr.getData()->mqttCommandTopic);
    mqtt.subscribe(&commandConsumer);

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
}
