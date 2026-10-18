#include <math.h>
#include <ExtStrings.h>
#include <log/log.h>

#include "rainwater_level_consumer.h"

void RainwaterPitLevelConsumer::onLevel(std::function<void(float)> callback)
{
    _callback = callback;
}

void RainwaterPitLevelConsumer::consume(std::string payload)
{
    float_t value;
    if (EDUtils::str2float(&value, payload.c_str()) != EDUtils::STR2INT_SUCCESS
        || isnan(value) || isinf(value)
        || value < 0.0f || value > 10.0f
    ) {
        LOGW("rainwater", "invalid rainwater pit level payload");
        return;
    }

    if (_callback) {
        _callback(value);
    }
}
