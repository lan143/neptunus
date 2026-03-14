#include <Json.h>
#include <ExtStrings.h>
#include <enum/modes.h>

#include "state.h"

bool State::operator==(State& other)
{
    return _waterLevel == other._waterLevel
        && _waterConsumption == other._waterConsumption
        && _waterPressureSupplier == other._waterPressureSupplier
        && _autoMode == other._autoMode
        && _fillingBarrelValve == other._fillingBarrelValve
        && _bypassValve == other._bypassValve
        && _pumpStation == other._pumpStation
        && _drainagePump == other._drainagePump;
}

std::string State::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_waterLevel.second) {
            entity[F("waterLevel")] = _waterLevel.first;
        }

        if (_waterConsumption.second) {
            entity[F("waterConsumption")] = _waterConsumption.first;
        }

        if (_waterPressureSupplier.second) {
            entity[F("waterPressureSupplier")] = _waterPressureSupplier.first;
        }

        if (_autoMode.second) {
            entity[F("autoMode")] = _autoMode.first ? "true" : "false";
        }

        if (_fillingBarrelValve.second) {
            entity[F("fillingBarrelValve")] = _fillingBarrelValve.first ? "true" : "false";
        }

        if (_bypassValve.second) {
            entity[F("bypassValve")] = _bypassValve.first ? "true" : "false";
        }

        if (_pumpStation.second) {
            entity[F("pumpStation")] = _pumpStation.first ? "true" : "false";
        }

        if (_drainagePump.second) {
            entity[F("drainagePump")] = _drainagePump.first ? "true" : "false";
        }
    });

    return payload;
}
