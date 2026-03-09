#pragma once

#include <Arduino.h>
#include <nullable.h>

class Command
{
public:
    bool unmarshalJSON(const char* data);
};
