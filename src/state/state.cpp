#include <Json.h>
#include <ExtStrings.h>
#include <enum/modes.h>

#include "state.h"

bool State::operator==(State& other)
{
    return _waterPressureSupplier == other._waterPressureSupplier
        && _autoMode == other._autoMode
        && _emergencyMode == other._emergencyMode;
}

std::string State::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_waterPressureSupplier.second) {
            entity[F("waterPressureSupplier")] = _waterPressureSupplier.first;
        }

        if (_autoMode.second) {
            entity[F("autoMode")] = _autoMode.first ? "true" : "false";
        }

        if (_emergencyMode.second) {
            entity[F("emergencyMode")] = _emergencyMode.first ? "true" : "false";
        }
    });

    return payload;
}
