#pragma once

#include <ESPAsyncWebServer.h>

#include "meter.h"

class MeterHandler
{
public:
    MeterHandler(Meter* meter) : _meter(meter) {};

    void registerHandler(AsyncWebServer* server);

private:
    Meter* _meter = nullptr;
};
