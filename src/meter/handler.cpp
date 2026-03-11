#include <Json.h>

#include "handler.h"

void MeterHandler::registerHandler(AsyncWebServer* server)
{
    server->on("/api/settings/meter", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            entity["initialValue"] = _meter->getCurrentValue();
        });

        response->write(payload.c_str());
        request->send(response);
    });

    server->on("/api/settings/meter", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (!request->hasParam("initialValue", true)) {
            request->send(422, "application/json", "{\"message\": \"not present initial value in request\"}");
            return;
        }

        const AsyncWebParameter* initialValueParam = request->getParam("initialValue", true);

        float_t initialValue;
        if (EDUtils::str2float(&initialValue, initialValueParam->value().c_str()) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect modbus speed\"}");
            return;
        }

        _meter->setInitialValue(initialValue);

        request->send(200, "application/json", "{}");
    });
}
