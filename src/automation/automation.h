#pragma once

#include <Arduino.h>
#include <device/qdy30a.h>
#include <device/wb_mai6.h>
#include <discovery.h>
#include <state/state_mgr.h>
#include <wirenboard.h>

#include "relay/relay_mgr.h"
#include "state/state.h"

#define WATER_MIN_LEVEL 0.01f
#define WATER_MAX_LEVEL 1.19f

class Automation
{
public:
    Automation(
        EDHA::DiscoveryMgr* discoveryMgr,
        RelayMgr* relayMgr,
        EDUtils::StateMgr<State>* stateMgr,
        EDWB::WirenBoard* wirenboard
    ) : _discoveryMgr(discoveryMgr), _relayMgr(relayMgr), _stateMgr(stateMgr), _wirenboard(wirenboard) {}

    void init(EDHA::Device* device, Config config);
    void update();

private:
    void buildDiscovery(EDHA::Device* device);
    bool loadQDY30AConstants();

    std::pair<float_t, bool> getWaterLevel();

private:
    uint64_t _lastUpdateTime = 0;

    int32_t _unitOfMeasurement = 0;
    int32_t _dotPosition = 0;
    bool _constantsLoaded = false;

private:
    EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
    RelayMgr* _relayMgr = nullptr;
    EDUtils::StateMgr<State>* _stateMgr = nullptr;
    EDWB::WirenBoard* _wirenboard = nullptr;

    Config _config;
    EDWB::QDY30A* _qdy30a = nullptr;
    EDWB::MAI6* _mai6 = nullptr;
    bool inited = false;
};
