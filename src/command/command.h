#pragma once

#include <Arduino.h>
#include <nullable.h>

class Command
{
public:
    bool unmarshalJSON(const char* data);

    std::pair<bool, bool> isAutoModeEnable() const { return _autoMode; }

private:
    std::pair<bool, bool> _autoMode;
};
