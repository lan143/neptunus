#pragma once

#include <Arduino.h>

class Relay
{
public:
    virtual bool changeState(bool enable) = 0;
    virtual std::pair<bool, bool> isEnabled() const = 0;
};
