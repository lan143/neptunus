#pragma once

#include <string>

#include <ESPAsyncWebServer.h>
#include <counter/pcf8574.h>

#include "automation/automation.h"

class ControlsHandler
{
public:
    ControlsHandler(
        Automation* automation,
        EDCommon::Counter::PCF8574P* homeWaterConsumptionMeter,
        EDCommon::Counter::PCF8574P* yardWaterConsumptionMeter
    ) : _automation(automation),
        _homeWaterConsumptionMeter(homeWaterConsumptionMeter),
        _yardWaterConsumptionMeter(yardWaterConsumptionMeter) {};

    void registerHandler(AsyncWebServer* server);

private:
    bool parseDeviceId(const std::string& id, Automation::DeviceId* deviceId);

private:
    Automation* _automation = nullptr;
    EDCommon::Counter::PCF8574P* _homeWaterConsumptionMeter = nullptr;
    EDCommon::Counter::PCF8574P* _yardWaterConsumptionMeter = nullptr;
};
