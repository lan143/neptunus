#include <Json.h>
#include <ExtStrings.h>
#include <enum/modes.h>

#include "state.h"

bool State::operator==(State& other)
{
    return _waterConsumption == other._waterConsumption
        && _yardWaterConsumption == other._yardWaterConsumption
        && _waterPressureSupplier == other._waterPressureSupplier
        && _autoMode == other._autoMode
        && _emergencyMode == other._emergencyMode;
}

std::string State::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_waterConsumption.second) {
            entity[F("waterConsumption")] = _waterConsumption.first;
        }

        if (_yardWaterConsumption.second) {
            entity[F("yardWaterConsumption")] = _yardWaterConsumption.first;
        }

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
