#pragma once

#include <discovery.h>
#include <state/state_mgr.h>
#include <PCF8574.h>

#include "state/state.h"
#include "storage.h"

class Meter
{
public:
    Meter(
        PCF8574* driver,
        EDHA::DiscoveryMgr* discoveryMgr,
        RingStorage* ringStorage,
        EDUtils::StateMgr<State>* stateMgr
    ) : _driver(driver), _discoveryMgr(discoveryMgr), _stateMgr(stateMgr), _ringStorage(ringStorage) {}

    void init(EDHA::Device* device, std::string stateTopic);
    void update();

    void setInitialValue(float_t value);
    float_t getCurrentValue() { return toMeterCube(_currentValue); }

private:
    void buildDiscovery(EDHA::Device* device, std::string stateTopic);
    int fromMeterCube(float_t value);
    float_t toMeterCube(int value);

private:
    PCF8574* _driver = nullptr;
    EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
    RingStorage* _ringStorage = nullptr;
    EDUtils::StateMgr<State>* _stateMgr = nullptr;

private:
    bool _lock = false;
    bool _ponentialLockUnlock = false;
    uint32_t _currentValue;
    uint64_t _lastCheckTime;
};
