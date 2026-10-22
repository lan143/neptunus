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
#include "electricity_status_consumer.h"

#define WATER_MIN_LEVEL 0.37f
#define WATER_MAX_LEVEL 1.2f
#define SWITCH_TO_HOME_PUMP_STATION_PRESSURE 3.1f
#define EMERGENCY_PRESSURE 1.0f

#define BARREL_FILL_ON_PERCENT 40.0f
#define BARREL_FILL_OFF_PERCENT 95.0f
#define RAINWATER_PIT_PUMP_DISABLE_PERCENT 8.0f
#define RAINWATER_PIT_PUMP_ENABLE_PERCENT 10.0f
#define RAINWATER_PIT_DATA_TIMEOUT_SEC 600

// Failsafe when the finedog grid state goes silent (publisher heartbeats ~60s).
#define ELECTRICITY_DATA_TIMEOUT_SEC 600
// On battery power, city pressure above this value -> pump off + bypass open.
#define ELECTRICITY_BATTERY_BYPASS_PRESSURE_BAR 1.5f

// AUTO-only idle protection for the outdoor pump: pump continuously ON for
// >= OUTDOOR_PUMP_IDLE_WINDOW_SEC with < OUTDOOR_PUMP_IDLE_MIN_FLOW_LITERS on
// the yard meter over the trailing window -> force OFF.
#define OUTDOOR_PUMP_IDLE_WINDOW_SEC 600
#define OUTDOOR_PUMP_IDLE_MIN_FLOW_LITERS 2

#include "bypass_mode.h"

struct AutomationState
{
    bool autoMode = false;
    bool drainagePumpEnabled = false;
};

class Automation
{
public:
    Automation(
        EDHA::DiscoveryMgr* discoveryMgr,
        EDMQTT::MQTT* mqtt,
        PCF8574* relayDriver,
        EDWB::WirenBoard* wirenboard,
        EDCommon::Counter::PCF8574P* meter,
        EDCommon::Counter::PCF8574P* yardMeter
    ) : _discoveryMgr(discoveryMgr), _mqtt(mqtt), _relayDriver(relayDriver), _wirenboard(wirenboard), _meter(meter), _yardMeter(yardMeter)
    {
        _localStateMgr = new EDConfig::DataMgr<AutomationState>(new EDConfig::StorageLittleFS<AutomationState>("/automation_v3.bin"));
    }

    void init(EDHA::Device* device, Config config);
    void update();

    enum class DeviceId : uint8_t
    {
        FillingBarrelValve,
        BypassValve,
        RainwaterPitValve,
        HomePumpStation,
        DrainagePump,
        OutdoorPumpStation,
        AutoMode,
    };

    // desiredValue semantics: for valves true means OPEN, for pumps and auto
    // mode true means ON. Returns false on unknown/invalid pointer state.
    bool controlSetDevice(DeviceId id, bool desiredValue);

    // outValue semantics: for valves true means OPEN, for pumps and auto mode
    // true means ON. Returns false when the state could not be read.
    bool controlGetDevice(DeviceId id, bool* outValue);

    bool getSupplierPressure(float* value);
    bool getBarrelWaterLevel(float* value);
    bool getEmergencyModeActive();

    // Returns the current rainwater pit level as a percentage of the configured
    // max height. Returns false when the feature is disabled (empty topic), no
    // valid level was received yet, the data is stale (RAINWATER_PIT_DATA_TIMEOUT_SEC),
    // or the configured max height is invalid.
    bool getRainwaterPitLevelPercent(float* percent);

private:
    bool changeFillingBarrelValveOpenInternal(bool open);
    bool changeBypassValveOpenInternal(bool open);
    bool changeHomePumpStationEnableInternal(bool enable);
    bool changeDrainagePumpEnableInternal(bool enable);
    bool changeRainwaterPitValveOpenInternal(bool open);
    bool changeOutdoorPumpStationEnableInternal(bool enable);

    // AUTO-only: force the outdoor pump OFF when it has run continuously for a
    // full window with less than the minimum yard flow over that window.
    void updateOutdoorPumpIdleProtection(bool overrideActive);

    // Advances the debounced bypass-mode state machine. Must only be called from
    // the 10-s pressure sample path with a valid supplier pressure.
    void updateBypassMode(float pressure);

    // Returns the relay backing a device id and, for the three valves, sets
    // *isValve to true (valve "open" semantics are inverted from the relay
    // desired state). Returns nullptr / false for unknown or out-of-range ids.
    // Must only be dereferenced on the main loop task.
    EDCommon::Relay::Relay* relayForDevice(DeviceId id, bool* isValve);

    // Reads every relay once on the main loop task and refreshes _deviceCache.
    // Never call this from the async web task: PCF8574P::isEnabled() performs a
    // live Wire read that is not atomic with the loop task's I2C usage.
    void refreshDeviceCache();

    // Snapshot of the relay states maintained by the main loop task so the HTTP
    // handlers never touch I2C. Volatile because it is written on the loop task
    // and read from the async web task.
    struct DeviceCacheEntry
    {
        volatile bool value;
        volatile bool available;

        DeviceCacheEntry() : value(false), available(false) {}
    };

    static constexpr uint64_t DEVICE_CACHE_REFRESH_INTERVAL_US = 100000;
    DeviceCacheEntry _deviceCache[7];
    uint64_t _deviceCacheLastUpdateUs = 0;

private:
    uint64_t _lastUpdateTime = 0;
    uint64_t _pressureSensorLastUpdateTime = 0;
    BypassModeState _bypassMode;
    uint32_t _badPressureCount = 0;
    bool _autoModeSeeding = false;
    bool _drainagePumpSeeding = false;

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
    EDCommon::Counter::PCF8574P* _yardMeter = nullptr;

    RainwaterPitLevelConsumer* _rainwaterPitLevelConsumer = nullptr;
    // Written from the MQTT task callback, read from the main loop task.
    volatile float _rainwaterPitLevelMeters = 0.0f;
    volatile uint32_t _rainwaterPitLevelLastUpdateSec = 0;
    volatile bool _rainwaterPitLevelReceived = false;

    ElectricityStatusConsumer* _electricityStatusConsumer = nullptr;
    // Written from the MQTT task callback, read from the main loop task.
    volatile bool _electricityStateReceived = false;
    volatile ElectricityState _electricityState = ElectricityState::NORMAL;
    volatile uint32_t _electricityStateLastUpdateSec = 0;
    // Main-loop only, drives edge-triggered override logging.
    bool _electricityOverrideActive = false;
    // Main-loop only; outdoor pump hardware state captured at override entry so
    // it can be restored when the episode ends.
    bool _outdoorPumpOnBeforeOverride = false;

    // Rainwater pit fill session state (in-memory only).
    bool _rainwaterPitFillingSession = false;
    bool _outdoorPumpStoppedByLevel = false;

    // Outdoor pump idle-flow protection state (main-loop only, static storage).
    // The slot about to be overwritten is the yard-meter sample from
    // OUTDOOR_PUMP_IDLE_WINDOW_SEC seconds ago.
    static constexpr uint16_t YARD_FLOW_SAMPLES = OUTDOOR_PUMP_IDLE_WINDOW_SEC + 1;
    uint32_t _yardFlowSamples[YARD_FLOW_SAMPLES];
    uint16_t _yardFlowSampleHead = 0;
    bool _yardFlowSamplesSeeded = false;
    // Previous tick's rounded yard total, for tick-to-tick decrease detection.
    uint32_t _lastYardLiters = 0;
    bool _outdoorPumpIdleArmed = false;
    uint32_t _outdoorPumpOnSinceSec = 0;

    bool inited = false;
};
