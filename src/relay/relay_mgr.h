#pragma once

#include <Arduino.h>
#include <PCF8574.h>

#include "relay.h"

#define RELAY_CHANNEL_FILLING_BARREL 0
#define RELAY_CHANNEL_BYPASS         1
#define RELAY_CHANNEL_PUMP_STATION   2
#define RELAY_CHANNEL_DRAINAGE_PUMP  3

enum RelayType : uint8_t
{
    RELAY_TYPE_FILLING_BARREL,
    RELAY_TYPE_BYPASS,
    RELAY_TYPE_PUMP_STATION,
    RELAY_TYPE_DRAINAGE_PUMP,
    RELAY_TYPE_MAX
};

class RelayMgr
{
public:
    RelayMgr(PCF8574* driver) : _driver(driver) {}
    void init();

    Relay* getRelay(RelayType type) { return _relays[type]; }

private:
    PCF8574* _driver = nullptr;

    std::array<Relay*, RELAY_TYPE_MAX> _relays;
};
