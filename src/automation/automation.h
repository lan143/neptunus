#pragma once

#include <Arduino.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <device/qdy30a.h>
#include <device/wb_mai6.h>
#include <discovery.h>
#include <state/state_mgr.h>
#include <wirenboard.h>
#include <PCF8574.h>
#include <relay/relay.h>

#include "config.h"
#include "meter/meter.h"
#include "state/state.h"

#define WATER_MIN_LEVEL 0.37f
#define WATER_MAX_LEVEL 1.2f
#define SWITCH_TO_HOME_PUMP_STATION_PRESSURE 3.1f
#define EMERGENCY_PRESSURE 1.0f

struct AutomationState
{
    bool autoMode = false;
};

class Automation
{
public:
    Automation(
        EDHA::DiscoveryMgr* discoveryMgr,
        EDMQTT::MQTT* mqtt,
        PCF8574* relayDriver,
        EDUtils::StateMgr<State>* stateMgr,
        EDWB::WirenBoard* wirenboard,
        Meter* meter
    ) : _discoveryMgr(discoveryMgr), _mqtt(mqtt), _relayDriver(relayDriver), _stateMgr(stateMgr), _wirenboard(wirenboard), _meter(meter)
    {
        _localStateMgr = new EDConfig::DataMgr<AutomationState>(new EDConfig::StorageLittleFS<AutomationState>("/automation_v2.bin"));
    }

    void init(EDHA::Device* device, Config config);
    void update();

    bool changeAutoModeEnable(bool enable);

private:
    void buildDiscovery(EDHA::Device* device);
    bool loadQDY30AConstants();
    bool setupPressureSensor();

    std::pair<float_t, bool> getWaterLevel();

    bool changeFillingBarrelValveOpenInternal(bool open);
    bool changeBypassValveOpenInternal(bool open);
    bool changeHomePumpStationEnableInternal(bool enable);
    bool changeDrainagePumpEnableInternal(bool enable);

private:
    uint64_t _lastUpdateTime = 0;
    uint64_t _pressureSensorLastUpdateTime = 0;
    uint32_t _goodPressureCount = 0;
    uint32_t _badPressureCount = 0;

    int32_t _unitOfMeasurement = 0;
    int32_t _dotPosition = 0;
    bool _constantsLoaded = false;

private:
    EDConfig::DataMgr<AutomationState>* _localStateMgr = nullptr;
    EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
    EDMQTT::MQTT* _mqtt = nullptr;
    PCF8574* _relayDriver = nullptr;
    EDUtils::StateMgr<State>* _stateMgr = nullptr;
    EDWB::WirenBoard* _wirenboard = nullptr;

    EDCommon::Relay::Relay* _fillingBarrelRelay = nullptr;
    EDCommon::Relay::Relay* _bypassRelay = nullptr;
    EDCommon::Relay::Relay* _homePumpStationRelay = nullptr;
    EDCommon::Relay::Relay* _drainagePumpRelay = nullptr;
    EDCommon::Relay::Relay* _rainwaterPitRelay = nullptr;
    EDCommon::Relay::Relay* _outdoorPumpStationRelay = nullptr;

    Config _config;
    EDWB::QDY30A* _qdy30a = nullptr;
    EDWB::MAI6* _mai6 = nullptr;
    Meter* _meter = nullptr;
    bool inited = false;
};
