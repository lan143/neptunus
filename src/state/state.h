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

private:
    std::pair<float_t, bool> _waterLevel;
};
