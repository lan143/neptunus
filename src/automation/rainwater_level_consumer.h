#pragma once

#include <Arduino.h>
#include <consumer.h>
#include <functional>
#include <string>

class RainwaterPitLevelConsumer : public EDMQTT::Consumer
{
public:
    void onLevel(std::function<void(float)> callback);
    void consume(std::string payload) override;

private:
    std::function<void(float)> _callback;
};
