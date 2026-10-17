#pragma once

#include <Arduino.h>
#include <nullable.h>
#include <enum/modes.h>

class State
{
public:
    State() {}

    bool operator==(State& other);
    bool operator!=(State& other) { return !(*this == other); }

    std::string marshalJSON();

    void setWaterConsumption(float_t consumption) { _waterConsumption = std::make_pair(consumption, true); }
    void setYardWaterConsumption(float_t consumption) { _yardWaterConsumption = std::make_pair(consumption, true); }
    void setWaterPressureSupplier(float_t waterPressureSupplier) { _waterPressureSupplier = std::make_pair(waterPressureSupplier, true); }

    void changeAutoModeState(bool enabled) { _autoMode = std::make_pair(enabled, true); }
    void changeEmergencyModeState(bool enabled) { _emergencyMode = std::make_pair(enabled, true); }

private:
    std::pair<float_t, bool> _waterConsumption;
    std::pair<float_t, bool> _yardWaterConsumption;
    std::pair<float_t, bool> _waterPressureSupplier;
    std::pair<bool, bool> _autoMode;
    std::pair<bool, bool> _emergencyMode;
};
