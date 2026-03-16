#pragma once

#include <Arduino.h>
#include <nullable.h>

class Command
{
public:
    bool unmarshalJSON(const char* data);

    std::pair<bool, bool> isAutoModeEnable() const { return _autoMode; }
    std::pair<bool, bool> isFillingBarrelValveOpen() const { return _fillingBarrelValve; }
    std::pair<bool, bool> isBypassValveOpen() const { return _bypassValve; }
    std::pair<bool, bool> isPumpStationEnable() const { return _pumpStation; }
    std::pair<bool, bool> isDrainagePumpEnable() const { return _drainagePump; }

private:
    std::pair<bool, bool> _autoMode;
    std::pair<bool, bool> _fillingBarrelValve;
    std::pair<bool, bool> _bypassValve;
    std::pair<bool, bool> _pumpStation;
    std::pair<bool, bool> _drainagePump;
};
