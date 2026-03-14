#pragma once

#include <Arduino.h>
#include "automation/automation.h"
#include <consumer.h>

class CommandConsumer : public EDMQTT::Consumer
{
public:
    CommandConsumer(Automation* automation) : _automation(automation) {}
    void consume(std::string payload);

private:
    Automation* _automation = nullptr;
};
