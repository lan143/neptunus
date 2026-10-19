#pragma once

#include <Arduino.h>
#include <consumer.h>
#include <functional>
#include <string>

enum class ElectricityState
{
    NORMAL,
    GENERATOR,
    BATTERY,
    CRITICAL
};

class ElectricityStatusConsumer : public EDMQTT::Consumer
{
public:
    void onState(std::function<void(ElectricityState)> callback);
    void consume(std::string payload) override;

private:
    std::function<void(ElectricityState)> _callback;
};
