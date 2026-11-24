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

    // Retained broker replays carry measurements from before the last disconnect;
    // accepting them would refresh the local timestamp and restart the staleness
    // window for data that may be hours old.
    bool acceptRetained() const override { return false; }

private:
    std::function<void(float)> _callback;
};
