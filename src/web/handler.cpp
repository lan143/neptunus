#include <ArduinoJSON.h>
#include <FS.h>
#include <esp_system.h>
#include <ExtStrings.h>
#include <Json.h>
#include <cstring>
#include <string.h>
#include <math.h>
#include "defines.h"
#include "handler.h"

void Handler::init()
{
    _server->serveStatic("/", LittleFS, "/").setDefaultFile("index.html");

    _healthCheck->registerHandlers(_server);
    _meterHandler->registerHandler(_server);

    _networkApi->registerRoutes(*_server);

    _server->on("/api/settings/modbus", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            auto config = _configMgr->getData();

            entity["modbusSpeed"] = config->modbusSpeed;
            entity["addressQDY30A"] = config->addressQDY30A;
            entity["addressWBMAI6"] = config->addressWBMAI6;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/settings/modbus", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (
            !request->hasParam("modbusSpeed", true)
            || !request->hasParam("addressQDY30A", true)
            || !request->hasParam("addressWBMAI6", true)
        ) {
            request->send(422, "application/json", "{\"message\": \"not present modbus params in request\"}");
            return;
        }

        const AsyncWebParameter* modbusSpeedParam = request->getParam("modbusSpeed", true);
        const AsyncWebParameter* addressQDY30AParam = request->getParam("addressQDY30A", true);
        const AsyncWebParameter* addressWBMAI6Param = request->getParam("addressWBMAI6", true);

        int modbusSpeed;
        if (EDUtils::str2int(&modbusSpeed, modbusSpeedParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect modbus speed\"}");
            return;
        }

        switch (modbusSpeed) {
            case 1200:
                break;
            case 2400:
                break;
            case 4800:
                break;
            case 9600:
                break;
            case 19200:
                break;
            case 38400:
                break;
            case 57600:
                break;
            case 115200:
                break;
            default:
                request->send(422, "application/json", "{\"message\": \"Unsupported modbus speed\"}");
                return;
        }

        int addressQDY30A;
        if (EDUtils::str2int(&addressQDY30A, addressQDY30AParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS
            || addressQDY30A < 1 || addressQDY30A > 254) {
            request->send(422, "application/json", "{\"message\": \"Incorrect address QDY30A\"}");
            return;
        }

        int addressWBMAI6;
        if (EDUtils::str2int(&addressWBMAI6, addressWBMAI6Param->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS
            || addressWBMAI6 < 1 || addressWBMAI6 > 254) {
            request->send(422, "application/json", "{\"message\": \"Incorrect address WB-MAI6\"}");
            return;
        }

        auto config = _configMgr->getData();
        config->modbusSpeed = modbusSpeed;
        config->addressQDY30A = addressQDY30A;
        config->addressWBMAI6 = addressWBMAI6;

        _configMgr->store();

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/settings/rainwater", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            auto config = _configMgr->getData();

            entity["rainwaterPitLevelTopic"] = config->rainwaterPitLevelTopic;
            entity["rainwaterPitMaxHeight"] = config->rainwaterPitMaxHeight;
            entity["rainwaterPitMaxFillLevel"] = config->rainwaterPitMaxFillLevel;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/settings/rainwater", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (
            !request->hasParam("rainwaterPitLevelTopic", true)
            || !request->hasParam("rainwaterPitMaxHeight", true)
            || !request->hasParam("rainwaterPitMaxFillLevel", true)
        ) {
            request->send(422, "application/json", "{\"message\": \"not present rainwater params in request\"}");
            return;
        }

        const AsyncWebParameter* rainwaterPitLevelTopic = request->getParam("rainwaterPitLevelTopic", true);
        const AsyncWebParameter* rainwaterPitMaxHeight = request->getParam("rainwaterPitMaxHeight", true);
        const AsyncWebParameter* rainwaterPitMaxFillLevel = request->getParam("rainwaterPitMaxFillLevel", true);

        if (rainwaterPitLevelTopic->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"Incorrect rainwater pit level topic length\"}");
            return;
        }

        float_t maxHeight;
        if (EDUtils::str2float(&maxHeight, rainwaterPitMaxHeight->value().c_str()) != EDUtils::STR2INT_SUCCESS
            || isnan(maxHeight) || isinf(maxHeight)
            || maxHeight <= 0 || maxHeight > 10) {
            request->send(422, "application/json", "{\"message\": \"Incorrect rainwater pit max height\"}");
            return;
        }

        float_t maxFillLevel;
        if (EDUtils::str2float(&maxFillLevel, rainwaterPitMaxFillLevel->value().c_str()) != EDUtils::STR2INT_SUCCESS
            || isnan(maxFillLevel) || isinf(maxFillLevel)
            || maxFillLevel <= 0 || maxFillLevel > 100) {
            request->send(422, "application/json", "{\"message\": \"Incorrect rainwater pit max fill level\"}");
            return;
        }

        if (maxFillLevel <= RAINWATER_PIT_FILL_START_PERCENT) {
            request->send(422, "application/json", "{\"message\": \"rainwater pit max fill level must be greater than fill start level\"}");
            return;
        }

        Config* config = _configMgr->getData();
        std::strcpy(config->rainwaterPitLevelTopic, rainwaterPitLevelTopic->value().c_str());
        config->rainwaterPitMaxHeight = maxHeight;
        config->rainwaterPitMaxFillLevel = maxFillLevel;

        _configMgr->store();

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/status", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string data = EDUtils::buildJson([this](JsonObject entity) {
            if (_networkMgr->isConnected()) {
                entity[F("wifiStatus")] = "connected";
            } else {
                entity[F("wifiStatus")] = "disconnected";
            }

            entity[F("freeHeap")] = ESP.getFreeHeap();
            entity[F("uptime")] = esp_timer_get_time() / 1000000;

            esp_reset_reason_t reason = esp_reset_reason();

            switch (reason) {
                case ESP_RST_POWERON:
                    entity[F("lastResetReason")] = "Power-on Reset";
                    break;
                case ESP_RST_EXT:
                    entity[F("lastResetReason")] = "External Reset";
                    break;
                case ESP_RST_SW:
                    entity[F("lastResetReason")] = "Software Reset";
                    break;
                case ESP_RST_PANIC:
                    entity[F("lastResetReason")] = "Panic Reset";
                    break;
                case ESP_RST_INT_WDT:
                    entity[F("lastResetReason")] = "Interrupt Watchdog Reset";
                    break;
                case ESP_RST_TASK_WDT:
                    entity[F("lastResetReason")] = "Task Watchdog Reset";
                    break;
                case ESP_RST_WDT:
                    entity[F("lastResetReason")] = "Other Watchdog Reset";
                    break;
                case ESP_RST_DEEPSLEEP:
                    entity[F("lastResetReason")] = "Wake from Deep Sleep";
                    break;
                case ESP_RST_BROWNOUT:
                    entity[F("lastResetReason")] = "Brownout Reset";
                    break;
                case ESP_RST_SDIO:
                    entity[F("lastResetReason")] = "SDIO Reset";
                    break;
                default:
                    entity[F("lastResetReason")] = "Unknown";
                    break;
            }
        });
        response->print(data.c_str());
        request->send(response);
    });

    _server->on("/api/settings/wifi", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (!request->hasParam("wifiSSID", true) || !request->hasParam("wifiPassword", true)) {
            request->send(422, "application/json", "{\"message\": \"not present wifiSSID or wifiPassword in request\"}");
            return;
        }

        const AsyncWebParameter* wifiSSID = request->getParam("wifiSSID", true);
        const AsyncWebParameter* wifiPassword = request->getParam("wifiPassword", true);

        if (wifiSSID->value().length() > WIFI_SSID_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"WiFi SSID lenght more 32 symbols\"}");
            return;
        }

        if (wifiPassword->value().length() > WIFI_PWD_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"WiFi password lenght more 63 symbols\"}");
            return;
        }

        Config* config = _configMgr->getData();
        std::strcpy(config->network.wifiSSID, wifiSSID->value().c_str());
        std::strcpy(config->network.wifiPassword, wifiPassword->value().c_str());
        config->network.isAPMode = false;

        _configMgr->store();

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/settings/mqtt", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (
            !request->hasParam("host", true)
            || !request->hasParam("port", true)
            || !request->hasParam("login", true)
            || !request->hasParam("password", true)
            || !request->hasParam("haDiscoveryPrefix", true)
            || !request->hasParam("mqttTopicPrefix", true)
        ) {
            request->send(422, "application/json", "{\"message\": \"not present mqtt params in request\"}");
            return;
        }

        Config* config = _configMgr->getData();
        const AsyncWebParameter* host = request->getParam("host", true);
        const AsyncWebParameter* port = request->getParam("port", true);
        const AsyncWebParameter* login = request->getParam("login", true);
        const AsyncWebParameter* password = request->getParam("password", true);
        const AsyncWebParameter* haDiscoveryPrefix = request->getParam("haDiscoveryPrefix", true);
        const AsyncWebParameter* ishaDiscoveryEnabled = request->getParam("mqttIsHADiscovery", true);
        const AsyncWebParameter* stateTopic = request->getParam("stateTopic", true);
        const AsyncWebParameter* commandTopic = request->getParam("commandTopic", true);
        const AsyncWebParameter* mqttTopicPrefix = request->getParam("mqttTopicPrefix", true);

        if (host->value().length() == 0 || host->value().length() > HOST_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT host lenght invalid\"}");
            return;
        }

        int mqttPort;
        if (EDUtils::str2int(&mqttPort, port->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect port\"}");
            return;
        }

        if (login->value().length() > MQTT_LOGIN_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT login length invalid\"}");
            return;
        }

        if (password->value().length() > MQTT_PASSWORD_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT password length invalid\"}");
            return;
        }

        if (haDiscoveryPrefix->value().length() == 0) {
            request->send(422, "application/json", "{\"message\": \"You must specify mqtt topic name\"}");
            return;
        }

        if (haDiscoveryPrefix->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"HA discovery prefix length invalid\"}");
            return;
        }

        if (stateTopic->value().length() == 0 || stateTopic->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"state topic length invalid\"}");
            return;
        }

        if (commandTopic->value().length() == 0 || commandTopic->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"command topic length invalid\"}");
            return;
        }

        if (mqttTopicPrefix->value().length() == 0 || mqttTopicPrefix->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"mqtt topic prefix length invalid\"}");
            return;
        }

        strcpy(config->mqtt.host, host->value().c_str());
        config->mqtt.port = (uint16_t)mqttPort;
        strcpy(config->mqtt.login, login->value().c_str());
        strcpy(config->mqtt.password, password->value().c_str());
        strcpy(config->mqttHADiscoveryPrefix, haDiscoveryPrefix->value().c_str());
        strcpy(config->mqttStateTopic, stateTopic->value().c_str());
        strcpy(config->mqttCommandTopic, commandTopic->value().c_str());
        strcpy(config->mqttTopicPrefix, mqttTopicPrefix->value().c_str());

        if (strcmp(ishaDiscoveryEnabled->value().c_str(), "true") == 0) {
            config->mqttIsHADiscovery = true;
        } else {
            config->mqttIsHADiscovery = false;
        }

        if (!_configMgr->store()) {
            request->send(500, "application/json", "{\"message\": \"failed to save config\"}");
            return;
        }

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/settings", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            Config* config = _configMgr->getData();

            entity["wifiSSID"] = config->network.wifiSSID;
            entity["wifiPassword"] = config->network.wifiPassword;
            entity["mqttHost"] = config->mqtt.host;
            entity["mqttPort"] = config->mqtt.port;
            entity["mqttLogin"] = config->mqtt.login;
            entity["mqttPassword"] = config->mqtt.password;
            entity["mqttIsHADiscovery"] = config->mqttIsHADiscovery;
            entity["mqttHADiscoveryPrefix"] = config->mqttHADiscoveryPrefix;
            entity["mqttCommandTopic"] = config->mqttCommandTopic;
            entity["mqttStateTopic"] = config->mqttStateTopic;
            entity["mqttTopicPrefix"] = config->mqttTopicPrefix;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/reboot", HTTP_POST, [this](AsyncWebServerRequest *request) {
        request->send(200, "application/json", "{}");
        delay(200);
        ESP.restart();
    });

    _server->begin();
}
