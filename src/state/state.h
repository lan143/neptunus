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

    void setWaterLevel(float_t level) { _waterLevel = std::make_pair(level, true); }
    void setWaterConsumption(float_t consumption) { _waterConsumption = std::make_pair(consumption, true); }
    void setWaterPressureSupplier(float_t waterPressureSupplier) { _waterPressureSupplier = std::make_pair(waterPressureSupplier, true); }

    void changeAutoModeState(bool enabled) { _autoMode = std::make_pair(enabled, true); }
    void changeFillingBarrelValveState(bool enabled) { _fillingBarrelValve = std::make_pair(enabled, true); }
    void changeBypassValveState(bool enabled) { _bypassValve = std::make_pair(enabled, true); }
    void changePumpStationState(bool enabled) { _pumpStation = std::make_pair(enabled, true); }
    void changeDrainagePumpState(bool enabled) { _drainagePump = std::make_pair(enabled, true); }

private:
    std::pair<float_t, bool> _waterLevel;
    std::pair<float_t, bool> _waterConsumption;
    std::pair<float_t, bool> _waterPressureSupplier;
    std::pair<bool, bool> _autoMode;
    std::pair<bool, bool> _fillingBarrelValve;
    std::pair<bool, bool> _bypassValve;
    std::pair<bool, bool> _pumpStation;
    std::pair<bool, bool> _drainagePump;
};
