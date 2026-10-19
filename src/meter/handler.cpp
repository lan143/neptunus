#include <Json.h>
#include <cmath>

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

        float_t homeValue;
        float_t yardValue;
        const AsyncWebParameter* homeWaterInitialValueParam = request->getParam("homeWaterInitialValue", true);
        const AsyncWebParameter* yardWaterInitialValueParam = request->getParam("yardWaterInitialValue", true);

        // uint32 counter stores value*1000/cost (yard cost=1) -> max ~4,294,967 m³
        if (EDUtils::str2float(&homeValue, homeWaterInitialValueParam->value().c_str()) != EDUtils::STR2INT_SUCCESS
            || !std::isfinite(homeValue) || homeValue < 0 || homeValue > 4294967) {
            request->send(422, "application/json", "{\"message\": \"Incorrect home water initial value\"}");
            return;
        }

        if (EDUtils::str2float(&yardValue, yardWaterInitialValueParam->value().c_str()) != EDUtils::STR2INT_SUCCESS
            || !std::isfinite(yardValue) || yardValue < 0 || yardValue > 4294967) {
            request->send(422, "application/json", "{\"message\": \"Incorrect yard water meter initial value\"}");
            return;
        }

        _homeWaterConsumptionMeter->setInitialValue(homeValue);
        _yardWaterConsumptionMeter->setInitialValue(yardValue);

        request->send(200, "application/json", "{}");
    });
}
