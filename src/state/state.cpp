#include <Json.h>
#include <ExtStrings.h>

#include "state.h"

bool State::operator==(State& other)
{
    return _waterPressureSupplier == other._waterPressureSupplier;
}

std::string State::marshalJSON()
{
    std::string payload = EDUtils::buildJson([this](JsonObject entity) {
        if (_waterPressureSupplier.second) {
            entity[F("waterPressureSupplier")] = _waterPressureSupplier.first;
        }
    });

    return payload;
}
