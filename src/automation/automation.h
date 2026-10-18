#pragma once

#include <Arduino.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <sensor/water_level.h>
#include <sensor/wb_mai6_pressure.h>
#include <discovery.h>
#include <wirenboard.h>
#include <PCF8574.h>
#include <relay/relay.h>
#include <binary_sensor/binary_sensor.h>
#include <counter/pcf8574.h>

#include "config.h"
#include "rainwater_level_consumer.h"

#define WATER_MIN_LEVEL 0.37f
#define WATER_MAX_LEVEL 1.2f
#define SWITCH_TO_HOME_PUMP_STATION_PRESSURE 3.1f
#define EMERGENCY_PRESSURE 1.0f

#define RAINWATER_PIT_PUMP_DISABLE_PERCENT 8.0f
#define RAINWATER_PIT_PUMP_ENABLE_PERCENT 10.0f
#define RAINWATER_PIT_DATA_TIMEOUT_SEC 600

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
        EDWB::WirenBoard* wirenboard,
        EDCommon::Counter::PCF8574P* meter
    ) : _discoveryMgr(discoveryMgr), _mqtt(mqtt), _relayDriver(relayDriver), _wirenboard(wirenboard), _meter(meter)
    {
        _localStateMgr = new EDConfig::DataMgr<AutomationState>(new EDConfig::StorageLittleFS<AutomationState>("/automation_v2.bin"));
    }

    void init(EDHA::Device* device, Config config);
    void update();

private:
    bool changeFillingBarrelValveOpenInternal(bool open);
    bool changeBypassValveOpenInternal(bool open);
    bool changeHomePumpStationEnableInternal(bool enable);
    bool changeDrainagePumpEnableInternal(bool enable);
    bool changeRainwaterPitValveOpenInternal(bool open);
    bool changeOutdoorPumpStationEnableInternal(bool enable);

    // Returns the current rainwater pit level as a percentage of the configured
    // max height. Returns false when the feature is disabled (empty topic), no
    // valid level was received yet, the data is stale (RAINWATER_PIT_DATA_TIMEOUT_SEC),
    // or the configured max height is invalid.
    bool getRainwaterPitLevelPercent(float* percent);

private:
    uint64_t _lastUpdateTime = 0;
    uint64_t _pressureSensorLastUpdateTime = 0;
    uint32_t _goodPressureCount = 0;
    uint32_t _badPressureCount = 0;
    bool _autoModeSeeding = false;

private:
    EDConfig::DataMgr<AutomationState>* _localStateMgr = nullptr;
    EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
    EDMQTT::MQTT* _mqtt = nullptr;
    PCF8574* _relayDriver = nullptr;
    EDWB::WirenBoard* _wirenboard = nullptr;

    EDCommon::Relay::Relay* _fillingBarrelRelay = nullptr;
    EDCommon::Relay::Relay* _bypassRelay = nullptr;
    EDCommon::Relay::Relay* _homePumpStationRelay = nullptr;
    EDCommon::Relay::Relay* _drainagePumpRelay = nullptr;
    EDCommon::Relay::Relay* _rainwaterPitRelay = nullptr;
    EDCommon::Relay::Relay* _outdoorPumpStationRelay = nullptr;
    EDCommon::Relay::Relay* _autoModeRelay = nullptr;
    EDCommon::BinarySensor::BinarySensor* _emergencyModeSensor = nullptr;

    Config _config;
    EDCommon::Sensor::WaterLevel* _waterLevelSensor = nullptr;
    EDCommon::Sensor::WBMAI6Pressure* _pressureSensor = nullptr;
    EDCommon::Counter::PCF8574P* _meter = nullptr;

    RainwaterPitLevelConsumer* _rainwaterPitLevelConsumer = nullptr;
    // Written from the MQTT task callback, read from the main loop task.
    volatile float _rainwaterPitLevelMeters = 0.0f;
    volatile uint32_t _rainwaterPitLevelLastUpdateSec = 0;
    volatile bool _rainwaterPitLevelReceived = false;

    // Rainwater pit fill session state (in-memory only).
    bool _rainwaterPitFillingSession = false;
    bool _outdoorPumpStoppedByLevel = false;

    bool inited = false;
};
