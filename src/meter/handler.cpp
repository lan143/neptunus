#include <Json.h>

#include "handler.h"

void MeterHandler::registerHandler(AsyncWebServer* server)
{
    server->on("/api/settings/meter", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            entity["homeWaterInitialValue"] = _homeWaterConsumptionMeter->getCurrentValue();
            entity["yardWaterInitialValue"] = _yardWaterConsumptionMeter->getCurrentValue();
        });

        response->write(payload.c_str());
        request->send(response);
    });

    server->on("/api/settings/meter", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (!request->hasParam("homeWaterInitialValue", true) || !request->hasParam("yardWaterInitialValue", true)) {
            request->send(422, "application/json", "{\"message\": \"not present initial value in request\"}");
            return;
        }

        float_t initialValue;
        const AsyncWebParameter* homeWaterInitialValueParam = request->getParam("homeWaterInitialValue", true);
        const AsyncWebParameter* yardWaterInitialValueParam = request->getParam("yardWaterInitialValue", true);

        if (EDUtils::str2float(&initialValue, homeWaterInitialValueParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect home water initial value\"}");
            return;
        }

        _homeWaterConsumptionMeter->setInitialValue(initialValue);

        if (EDUtils::str2float(&initialValue, yardWaterInitialValueParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect yard water meter initial value\"}");
            return;
        }

        _yardWaterConsumptionMeter->setInitialValue(initialValue);

        request->send(200, "application/json", "{}");
    });
}
