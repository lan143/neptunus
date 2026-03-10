#include <Json.h>
#include <ExtStrings.h>
#include <enum/modes.h>

#include "state.h"

bool State::operator==(State& other)
{
    return _waterLevel == other._waterLevel;
}

std::string State::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_waterLevel.second) {
            entity[F("waterLevel")] = _waterLevel.first;
        }
    });

    return payload;
}
