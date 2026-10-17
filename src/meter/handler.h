#pragma once

#include <ESPAsyncWebServer.h>
#include <counter/pcf8574.h>

class MeterHandler
{
public:
    MeterHandler(EDCommon::Counter::PCF8574P* homeWaterConsumptionMeter, EDCommon::Counter::PCF8574P* yardWaterConsumptionMeter) : _homeWaterConsumptionMeter(homeWaterConsumptionMeter), _yardWaterConsumptionMeter(yardWaterConsumptionMeter) {};

    void registerHandler(AsyncWebServer* server);

private:
    EDCommon::Counter::PCF8574P* _homeWaterConsumptionMeter = nullptr;
    EDCommon::Counter::PCF8574P* _yardWaterConsumptionMeter = nullptr;
};
