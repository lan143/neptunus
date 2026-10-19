#include <algorithm>
#include <cctype>
#include <string>

#include <Json.h>

#include "handler.h"

namespace
{
    struct DeviceDescriptor
    {
        Automation::DeviceId id;
        const char* key;
        const char* name;
        const char* kind;
    };

    const DeviceDescriptor DEVICES[] = {
        {Automation::DeviceId::FillingBarrelValve, "fillingBarrelValve", "Filling Barrel Valve", "valve"},
        {Automation::DeviceId::BypassValve, "bypassValve", "Bypass Valve", "valve"},
        {Automation::DeviceId::RainwaterPitValve, "rainwaterPitValve", "Filling Rainwater Pit", "valve"},
        {Automation::DeviceId::HomePumpStation, "homePumpStation", "Home pump station", "pump"},
        {Automation::DeviceId::DrainagePump, "drainagePump", "Drainage Pump", "pump"},
        {Automation::DeviceId::OutdoorPumpStation, "outdoorPumpStation", "Outdoor pump station", "pump"},
        {Automation::DeviceId::AutoMode, "autoMode", "Auto mode", "auto"},
    };
}

bool ControlsHandler::parseDeviceId(const std::string& id, Automation::DeviceId* deviceId)
{
    if (deviceId == nullptr) {
        return false;
    }

    for (const auto& descriptor : DEVICES) {
        if (id == descriptor.key) {
            *deviceId = descriptor.id;
            return true;
        }
    }

    return false;
}

void ControlsHandler::registerHandler(AsyncWebServer* server)
{
    server->on("/api/controls", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            JsonArray devices = entity["devices"].to<JsonArray>();
            for (const auto& descriptor : DEVICES) {
                bool value = false;
                bool available = _automation != nullptr
                    && _automation->controlGetDevice(descriptor.id, &value);

                JsonObject item = devices.add<JsonObject>();
                item["id"] = descriptor.key;
                item["name"] = descriptor.name;
                item["kind"] = descriptor.kind;
                item["value"] = available ? value : false;
                item["available"] = available;
            }

            JsonArray sensors = entity["sensors"].to<JsonArray>();
            auto addSensor = [&sensors](const char* id, const char* name, const char* unit, bool available, float value) {
                JsonObject item = sensors.add<JsonObject>();
                item["id"] = id;
                item["name"] = name;
                item["unit"] = unit;
                item["value"] = available ? value : 0.0f;
                item["available"] = available;
            };

            float value = 0.0f;

            bool supplierPressureAvailable = _automation != nullptr
                && _automation->getSupplierPressure(&value);
            addSensor("supplierPressure", "Supplier pressure", "bar", supplierPressureAvailable, value);

            bool barrelWaterLevelAvailable = _automation != nullptr
                && _automation->getBarrelWaterLevel(&value);
            addSensor("barrelWaterLevel", "Barrel water level", "m", barrelWaterLevelAvailable, value);

            bool rainwaterPitLevelAvailable = _automation != nullptr
                && _automation->getRainwaterPitLevelPercent(&value);
            addSensor("rainwaterPitLevel", "Rainwater pit level", "%", rainwaterPitLevelAvailable, value);

            bool homeWaterConsumptionAvailable = _homeWaterConsumptionMeter != nullptr;
            addSensor(
                "homeWaterConsumption",
                "Home water consumption",
                "m3",
                homeWaterConsumptionAvailable,
                homeWaterConsumptionAvailable ? _homeWaterConsumptionMeter->getCurrentValue() : 0.0f
            );

            bool yardWaterConsumptionAvailable = _yardWaterConsumptionMeter != nullptr;
            addSensor(
                "yardWaterConsumption",
                "Yard water consumption",
                "m3",
                yardWaterConsumptionAvailable,
                yardWaterConsumptionAvailable ? _yardWaterConsumptionMeter->getCurrentValue() : 0.0f
            );

            entity["emergencyMode"] = _automation != nullptr && _automation->getEmergencyModeActive();
        });

        response->write(payload.c_str());
        request->send(response);
    });

    server->on("/api/controls/set", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (!request->hasParam("id", true) || !request->hasParam("value", true)) {
            request->send(422, "application/json", "{\"message\": \"not present id or value in request\"}");
            return;
        }

        const AsyncWebParameter* idParam = request->getParam("id", true);
        const AsyncWebParameter* valueParam = request->getParam("value", true);

        Automation::DeviceId deviceId;
        if (!parseDeviceId(idParam->value().c_str(), &deviceId)) {
            request->send(422, "application/json", "{\"message\": \"Unknown device id\"}");
            return;
        }

        std::string value = valueParam->value().c_str();
        std::transform(value.begin(), value.end(), value.begin(), [](unsigned char c) {
            return std::tolower(c);
        });

        bool desiredValue;
        if (value == "on" || value == "true") {
            desiredValue = true;
        } else if (value == "off" || value == "false") {
            desiredValue = false;
        } else {
            request->send(422, "application/json", "{\"message\": \"Invalid device value\"}");
            return;
        }

        if (_automation == nullptr || !_automation->controlSetDevice(deviceId, desiredValue)) {
            request->send(500, "application/json", "{\"message\": \"Failed to set device state\"}");
            return;
        }

        request->send(200, "application/json", "{}");
    });
}
