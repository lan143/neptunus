#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <mqtt_config.h>
#include <network/network_config.h>
#include <log/log_config.h>

#include "defines.h"

#define CURRENT_VERSION 2

#define MQTT_TOPIC_LEN 64

// Rainwater pit fill start threshold (percent). The configured max fill level
// must be strictly greater than this value.
#define RAINWATER_PIT_FILL_START_PERCENT 10.0f

struct Config
{
    uint8_t version = CURRENT_VERSION;

    EDNetwork::Config network;
    EDMQTT::Config mqtt;
    EDUtils::LogConfig log;

    char otaPassword[WIFI_PWD_LEN] = {0};

    bool mqttIsHADiscovery = true;
    char mqttHADiscoveryPrefix[MQTT_TOPIC_LEN] = {0};
    char mqttCommandTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStateTopic[MQTT_TOPIC_LEN] = {0};
    char mqttTopicPrefix[MQTT_TOPIC_LEN] = {0};

    // modbus
    uint32_t modbusSpeed = 0;
    uint8_t addressQDY30A = 0;
    uint8_t addressWBMAI6 = 0;

    // rainwater pit
    char rainwaterPitLevelTopic[MQTT_TOPIC_LEN] = {0};
    float rainwaterPitMaxHeight = 1.6f;
    float rainwaterPitMaxFillLevel = 20.0f;
};
