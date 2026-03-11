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

private:
    std::pair<float_t, bool> _waterLevel;
    std::pair<float_t, bool> _waterConsumption;
};
