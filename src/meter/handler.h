#pragma once

#include <ESPAsyncWebServer.h>

#include "meter.h"

class MeterHandler
{
public:
    MeterHandler(Meter* homeWaterConsumptionMeter, Meter* yardWaterConsumptionMeter) : _homeWaterConsumptionMeter(homeWaterConsumptionMeter), _yardWaterConsumptionMeter(yardWaterConsumptionMeter) {};

    void registerHandler(AsyncWebServer* server);

private:
    Meter* _homeWaterConsumptionMeter = nullptr;
    Meter* _yardWaterConsumptionMeter = nullptr;
};
