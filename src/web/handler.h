#pragma once

#ifdef ESP32
    #include <AsyncTCP.h>
#elif defined(ESP8266)
    #include <ESPAsyncTCP.h>
#endif

#include <LittleFS.h>
#include <ESPAsyncWebServer.h>
#include <data_mgr.h>
#include <healthcheck.h>
#include <network/network.h>

#include "config.h"
#include "meter/handler.h"

class Handler {
public:
    Handler(
        EDConfig::DataMgr<Config>* configMgr,
        EDNetwork::NetworkMgr* networkMgr,
        EDHealthCheck::HealthCheck* healthCheck,
        MeterHandler* meterHandler
    ) : _configMgr(configMgr), _networkMgr(networkMgr),
        _healthCheck(healthCheck), _meterHandler(meterHandler) {
        _server = new AsyncWebServer(80);
    }

    void init();

private:
    AsyncWebServer* _server = nullptr;
    EDConfig::DataMgr<Config>* _configMgr = nullptr;
    EDNetwork::NetworkMgr* _networkMgr = nullptr;
    EDHealthCheck::HealthCheck* _healthCheck = nullptr;
    MeterHandler* _meterHandler = nullptr;
};
