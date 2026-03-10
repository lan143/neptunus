#pragma once

#include <PCF8574.h>

#include "relay.h"

class RelayPCF8574P : public Relay
{
public:
    RelayPCF8574P(PCF8574* driver) : _driver(driver) {}

    void init(uint8_t channel)
    {
        _channel = channel;
    }

    bool changeState(bool enable);
    std::pair<bool, bool> isEnabled() const;

private:
    PCF8574* _driver = nullptr;
    uint8_t _channel = 0;
};
