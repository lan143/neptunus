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

    // Retained broker replays carry measurements from before the last disconnect;
    // accepting them would refresh the local timestamp and restart the staleness
    // window for data that may be hours old.
    bool acceptRetained() const override { return false; }

private:
    std::function<void(ElectricityState)> _callback;
};
