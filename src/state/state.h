#pragma once

#include <Arduino.h>
#include <nullable.h>

class State
{
public:
    State() {}

    bool operator==(State& other);
    bool operator!=(State& other) { return !(*this == other); }

    std::string marshalJSON();

    void setWaterPressureSupplier(float_t waterPressureSupplier) { _waterPressureSupplier = std::make_pair(waterPressureSupplier, true); }

private:
    std::pair<float_t, bool> _waterPressureSupplier;
};
