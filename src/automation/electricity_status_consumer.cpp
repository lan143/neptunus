#include <Json.h>
#include <log/log.h>

#include "electricity_status_consumer.h"

void ElectricityStatusConsumer::onState(std::function<void(ElectricityState)> callback)
{
    _callback = callback;
}

void ElectricityStatusConsumer::consume(std::string payload)
{
    // Only the "state" member is consumed; the publisher's "time" field is
    // ignored because this device has no synchronized wall clock.
    bool valid = EDUtils::parseJson(payload.c_str(), [this](JsonObject entity) -> bool {
        const char* state = entity["state"];
        if (state == nullptr) {
            return false;
        }

        ElectricityState parsed;
        if (strcmp(state, "NORMAL") == 0) {
            parsed = ElectricityState::NORMAL;
        } else if (strcmp(state, "GENERATOR") == 0) {
            parsed = ElectricityState::GENERATOR;
        } else if (strcmp(state, "BATTERY") == 0) {
            parsed = ElectricityState::BATTERY;
        } else if (strcmp(state, "CRITICAL") == 0) {
            parsed = ElectricityState::CRITICAL;
        } else {
            return false;
        }

        if (_callback) {
            _callback(parsed);
        }

        return true;
    });

    if (!valid) {
        LOGW("electricity", "invalid electricity state payload");
    }
}
