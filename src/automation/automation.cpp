#include <log/log.h>
#include <Utils.h>
#include <relay/pcf8574.h>

#include "config.h"
#include "automation.h"

namespace
{
// Electricity grid-state override decision, computed once per 1s decision tick.
// NONE means no override: the normal pump/bypass logic runs unmodified. Any
// other value makes the relocated override block the ONLY writer of the outdoor
// pump, home pump and bypass relays for that tick.
enum class GridOverride
{
    NONE,
    BATTERY_HIGH_PRESSURE,
    BATTERY_LOW_PRESSURE,
    SHUTDOWN,
};
} // namespace

void Automation::init(EDHA::Device* device, Config config)
{
    _localStateMgr->setDefault([](AutomationState* state) {
        state->autoMode = true;
        state->drainagePumpEnabled = true;
    });
    _localStateMgr->load();

    _config = config;

    std::string topicPrefix = _config.mqttTopicPrefix;

    auto mai6 = _wirenboard->addMAI6(config.addressWBMAI6);
    _pressureSensor = new Neptunus::ValidatedWBMAI6Pressure(mai6, 1);
    if (!_pressureSensor->init(2, 10000, {
        EDCommon::Sensor::withMQTT(_mqtt, topicPrefix, "neptunus_sensor", "Water pressure supplier"),
        EDCommon::Sensor::withDiscovery(_discoveryMgr, device)
    })) {
        LOGE("init", "failed to init pressure sensor");
    }

    auto qdy30a = _wirenboard->addQDY30A(config.addressQDY30A);
    _waterLevelSensor = new Neptunus::FreshWaterLevelSensor(qdy30a);
    if (!_waterLevelSensor->init(3, 1000, {
        EDCommon::Sensor::withMQTT(_mqtt, topicPrefix, "neptunus_sensor", "Barrel water level"),
        EDCommon::Sensor::withDiscovery(_discoveryMgr, device)
    })) {
        LOGE("init", "failed to init water level sensor");
    }

    auto fillingBarrelRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    fillingBarrelRelay->init(RELAY_CHANNEL_FILLING_BARREL, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Filling Barrel Valve"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device),
        EDCommon::Relay::withOpenSemantics()
    });
    _fillingBarrelRelay = fillingBarrelRelay;

    auto bypassRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    bypassRelay->init(RELAY_CHANNEL_BYPASS, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Bypass Valve"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device),
        EDCommon::Relay::withOpenSemantics()
    });
    _bypassRelay = bypassRelay;

    auto homePumpStationRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    homePumpStationRelay->init(RELAY_CHANNEL_HOME_PUMP_STATION, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Home pump station"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
    });
    _homePumpStationRelay = homePumpStationRelay;

    bool storedDrainagePumpEnabled = _localStateMgr->getData()->drainagePumpEnabled;
    _drainagePumpSeeding = true;
    auto drainagePumpRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    drainagePumpRelay->init(RELAY_CHANNEL_DRAINAGE_PUMP, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Drainage Pump"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device),
        EDCommon::Relay::withStateChangeListener([this](bool enable) {
            if (_drainagePumpSeeding) return;
            _localStateMgr->getData()->drainagePumpEnabled = enable;
            if (!_localStateMgr->store()) {
                LOGE("update", "failed to store automation state");
            }
        })
    });
    _drainagePumpRelay = drainagePumpRelay;
    _drainagePumpRelay->setState(storedDrainagePumpEnabled);

    auto rainwaterPitRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    rainwaterPitRelay->init(RELAY_CHANNEL_FILLING_RAINWATER_PIT, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Filling Rainwater Pit"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device),
        EDCommon::Relay::withOpenSemantics()
    });
    _rainwaterPitRelay = rainwaterPitRelay;

    auto outdoorPumpStationRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    outdoorPumpStationRelay->init(RELAY_CHANNEL_OUTDOOR_PUMP_STATION, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Outdoor pump station"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
    });
    _outdoorPumpStationRelay = outdoorPumpStationRelay;

    bool storedAutoMode = _localStateMgr->getData()->autoMode;
    _autoModeSeeding = true;
    _autoModeRelay = new EDCommon::Relay::Relay();
    _autoModeRelay->init({
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Auto mode"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device),
        EDCommon::Relay::withStateChangeListener([this](bool enable) {
            if (_autoModeSeeding) return;
            _localStateMgr->getData()->autoMode = enable;
            if (!_localStateMgr->store()) {
                LOGE("update", "failed to store automation state");
            }
        })
    });
    _autoModeRelay->setState(storedAutoMode);

    _emergencyModeSensor = new EDCommon::BinarySensor::BinarySensor();
    _emergencyModeSensor->init(1000, {
        EDCommon::BinarySensor::withMQTT(_mqtt, topicPrefix, "neptunus_sensor", "Emergency mode"),
        EDCommon::BinarySensor::withDiscovery(_discoveryMgr, device),
    });

    _barrelLevelStaleSensor = new EDCommon::BinarySensor::BinarySensor();
    _barrelLevelStaleSensor->init(1000, {
        EDCommon::BinarySensor::withMQTT(_mqtt, topicPrefix, "neptunus_sensor", "Barrel water level stale"),
        EDCommon::BinarySensor::withDiscovery(_discoveryMgr, device),
    });

    if (strlen(_config.rainwaterPitLevelTopic) > 0) {
        _rainwaterPitLevelConsumer = new RainwaterPitLevelConsumer();
        _rainwaterPitLevelConsumer->onLevel([this](float value) {
            _rainwaterPitLevelMeters = value;
            _rainwaterPitLevelLastUpdateSec = esp_timer_get_time() / 1000000;
            _rainwaterPitLevelReceived = true;
        });
        _rainwaterPitLevelConsumer->init(_config.rainwaterPitLevelTopic);
        _mqtt->subscribe(_rainwaterPitLevelConsumer);
        LOGI("init", "rainwater pit level consumer enabled, topic: %s", _config.rainwaterPitLevelTopic);
    } else {
        LOGI("init", "rainwater pit level consumer disabled (empty topic)");
    }

    if (strlen(_config.electricityTopic) > 0) {
        _electricityStatusConsumer = new ElectricityStatusConsumer();
        _electricityStatusConsumer->onState([this](ElectricityState state) {
            _electricityState = state;
            _electricityStateLastUpdateSec = esp_timer_get_time() / 1000000;
            _electricityStateReceived = true;
        });
        _electricityStatusConsumer->init(_config.electricityTopic);
        _mqtt->subscribe(_electricityStatusConsumer);
        // Start the failsafe clock at boot so a retained message that never
        // arrives is still treated as stale after ELECTRICITY_DATA_TIMEOUT_SEC.
        _electricityStateLastUpdateSec = esp_timer_get_time() / 1000000;
        LOGI("init", "electricity status consumer enabled, topic: %s", _config.electricityTopic);
    } else {
        LOGI("init", "electricity status consumer disabled (empty topic)");
    }

    // Cold power-on leaves the PCF8574 register all-HIGH: every valve relay is
    // de-energized = physically OPEN while pumps are OFF. Force the quiescent
    // state (all valves CLOSED) until the decision tick re-establishes intent;
    // the commands drain on the first update().
    changeFillingBarrelValveOpenInternal(false);
    changeBypassValveOpenInternal(false);
    changeRainwaterPitValveOpenInternal(false);

    inited = true;
}

void Automation::update()
{
    if (!inited) {
        LOGE("update", "automation isn't initialized");
        return;
    }

    _fillingBarrelRelay->update();
    _bypassRelay->update();
    _homePumpStationRelay->update();
    _drainagePumpRelay->update();
    _rainwaterPitRelay->update();
    _outdoorPumpStationRelay->update();
    _autoModeRelay->update();

    // Refresh the HTTP-facing device snapshot on the loop task only, throttled so
    // the (potentially blocking) I2C reads cannot starve meter pulse sampling.
    if ((esp_timer_get_time() - _deviceCacheLastUpdateUs) >= DEVICE_CACHE_REFRESH_INTERVAL_US) {
        _deviceCacheLastUpdateUs = esp_timer_get_time();
        refreshDeviceCache();
    }

    _autoModeSeeding = false;
    _drainagePumpSeeding = false;
    _emergencyModeSensor->update();
    _barrelLevelStaleSensor->update();
    _pressureSensor->update();

    if ((_pressureSensorLastUpdateTime + 10000000) < esp_timer_get_time()) {
        auto pressure = _pressureSensor->getFreshReading(PRESSURE_READING_MAX_AGE_US);

        // Relay reads run every tick so the bad-pressure counter is not frozen by
        // an unavailable pressure sample. Only the relay STATES must be valid
        // (conservative: an invalid state freezes the bypass debounce and the
        // bad-pressure counter).
        auto fillingBarrel = _fillingBarrelRelay->isEnabled();
        auto rainwaterPit = _rainwaterPitRelay->isEnabled();

        // Sample the storage levels once per pressure tick and track their
        // trend. A fill whose storage level rises is real filling, even when it
        // collapses city pressure (the big-draw outdoor pit fill drops the
        // supplier line to ~0 bar and the WB-MAI6 often reports errors). A fill
        // whose level stays flat or falls is stalled. Only valid samples are
        // recorded; invalid data must not assert progress.
        const int64_t trendNowUs = esp_timer_get_time();
        if (_waterLevelSensor != nullptr) {
            // Freshness-gated: a stale/unknown sample must never be recorded as
            // fill progress, or a dead sensor would look like a rising fill.
            auto barrelLevel = _waterLevelSensor->getFreshReading(WATER_LEVEL_READING_MAX_AGE_US);
            if (barrelLevel.second) {
                _barrelLevelTrend.record(trendNowUs, barrelLevel.first);
            }
        }
        float pitTrendPct = 0.0f;
        if (getRainwaterPitLevelPercent(&pitTrendPct)) {
            _pitLevelTrend.record(trendNowUs, pitTrendPct);
        }

        // Relay pair semantics: .second is state validity, .first true means the
        // relay is de-energized = valve CLOSED (valves use open semantics).
        const bool barrelValveOpen = fillingBarrel.second && !fillingBarrel.first;
        const bool pitValveOpen = rainwaterPit.second && !rainwaterPit.first;
        const bool barrelLevelRising = _barrelLevelTrend.isRising(BARREL_LEVEL_RISING_DELTA_M, LEVEL_TREND_MAX_AGE_US, trendNowUs);
        const bool pitLevelRising = _pitLevelTrend.isRising(PIT_LEVEL_RISING_DELTA_PERCENT, LEVEL_TREND_MAX_AGE_US, trendNowUs);

        // Water actually moving (a draw or a fill in progress) explains a pressure
        // dip, so bad-pressure COUNTING freezes while flow is active on either
        // meter, and the bypass state machine suppresses ENTRY for the same reason
        // (H4); its EXIT transitions still run so a real supplier collapse escapes
        // bypass mode mid-draw. A fill whose storage level RISES is real filling —
        // the big-draw pit fill collapses city pressure to ~0 with sensor errors
        // and that is normal. A flat/falling level with the valve open is a stalled
        // fill on a dead supply. With no flow and no progressing fill, a low or
        // unavailable supplier pressure is suspicious whether the filling valves
        // are closed (idle line) or open and stalled. The relay-validity and
        // progressing-fill guards suppress the whole block.
        if (
            fillingBarrel.second && rainwaterPit.second
            && !(barrelValveOpen && barrelLevelRising)
            && !(pitValveOpen && pitLevelRising)
        ) {
            // A household draw explains a pressure dip, so the bypass state machine
            // must still run mid-draw: exits (fast drop / low average) fire and engage
            // the pump, while entry is suppressed for the same reason (H4). Only the
            // bad-pressure counting is fully flow-gated.
            const bool anyFlowActive = _meter->isFlowOfWaterActive() || _yardMeter->isFlowOfWaterActive();
            if (pressure.second) {
                float_t calculatedPressure = pressure.first;

                updateBypassMode(calculatedPressure, !anyFlowActive);

                if (!anyFlowActive) {
                    if (calculatedPressure < EMERGENCY_PRESSURE && _badPressureCount < 24) {
                        _badPressureCount++;
                    } else if (calculatedPressure > EMERGENCY_PRESSURE && _badPressureCount > 0) {
                        _badPressureCount--;
                    }
                }
            } else if (!anyFlowActive) {
                LOGE("update", "failed to get supplier water pressure");
                // Unavailable pressure counts as bad pressure. Decay still requires
                // a valid reading above EMERGENCY_PRESSURE, so a persistently
                // unavailable sensor reaches the emergency threshold.
                if (_badPressureCount < 24) {
                    _badPressureCount++;
                }
            }
        }

        _pressureSensorLastUpdateTime = esp_timer_get_time();
    }

    if ((_lastUpdateTime + 1000000) < esp_timer_get_time()) {
        _lastUpdateTime = esp_timer_get_time();

        const uint32_t nowSec = esp_timer_get_time() / 1000000;

        // Barrel water level: read FIRST every tick so the per-tick safety
        // re-assertion below (fill valve closed, home pump off) runs in every
        // mode, including battery/CRITICAL overrides and manual, before any
        // other home-pump writer. The base sensor keeps the last GOOD value
        // forever; getFreshReading() is the authoritative freshness gate.
        if (_waterLevelSensor == nullptr) {
            LOGE("update", "water level sensor not initialized");
            return;
        }
        _waterLevelSensor->update();
        auto levelResult = _waterLevelSensor->getFreshReading(WATER_LEVEL_READING_MAX_AGE_US);
        const bool barrelLevelOk = levelResult.second;
        const float level = levelResult.first;
        _barrelLevelStaleSensor->setValue(!barrelLevelOk);

        // Pit feature: an empty topic means DISABLED, which is not the same as
        // stale data. An enabled feature with no fresh data is stale.
        const bool pitFeatureEnabled = strlen(_config.rainwaterPitLevelTopic) > 0;
        float pitPct = 0.0f;
        const bool pitDataOk = getRainwaterPitLevelPercent(&pitPct);
        // The override-exit restore must never re-enable the outdoor pump on
        // unknown/stale pit data (feature disabled is fine).
        const bool pitGuardAllowsRestore = !pitFeatureEnabled
            || (pitDataOk && pitPct > RAINWATER_PIT_PUMP_ENABLE_PERCENT);

        // Electricity grid-state override (automatic mode only). Evaluated and
        // actuated at the very TOP of the decision tick, so the stale/critical
        // failsafe cannot be defeated by later per-tick early returns. When
        // active this is the ONLY writer of the outdoor pump, home pump and
        // bypass relays this tick; the normal writers below are gated on
        // gridOverride == NONE.
        GridOverride gridOverride = GridOverride::NONE;
        const char* gridOverrideDescription = nullptr;

        if (_electricityStatusConsumer && _autoModeRelay->isEnabled().first) {
            // Signed diff: the MQTT task may write the timestamp AFTER the loop
            // task reads nowSec, so an unsigned subtraction could underflow and
            // report a false "stale" for one tick.
            bool stale = static_cast<int32_t>(nowSec - _electricityStateLastUpdateSec) > static_cast<int32_t>(ELECTRICITY_DATA_TIMEOUT_SEC);
            bool received = _electricityStateReceived;
            ElectricityState state = _electricityState;

            if (stale) {
                // Rule 4 (checked first: highest priority): failsafe after >10 min
                // of publisher silence.
                gridOverride = GridOverride::SHUTDOWN;
                gridOverrideDescription = "stale grid state";
            } else if (received && state == ElectricityState::BATTERY) {
                // Rule 2: on battery power keep the pump running while city
                // pressure is low (or unknown); switch to bypass only on high
                // pressure. Invalid pressure keeps pump on / bypass closed.
                //
                // Safety layer takes priority: the battery pump-ON requires a
                // fresh, valid barrel level above the minimum. Without it the
                // home pump must not run dry, so fall back to SHUTDOWN semantics
                // (pump OFF + bypass OPEN=supply fed directly). This deliberately
                // overrides the previous spec-literal BATTERY_LOW behaviour.
                // The explicit level check closes the one-tick gap before the
                // min-level latch is re-evaluated later this same tick.
                const bool homePumpAllowedByLevel = barrelLevelOk && level > WATER_MIN_LEVEL && !_homePumpOffByMinLevel;
                if (!homePumpAllowedByLevel) {
                    gridOverride = GridOverride::SHUTDOWN;
                    gridOverrideDescription = "battery, home pump blocked by barrel level safety";
                } else {
                    float pressure = 0.0f;
                    bool pressureValid = getSupplierPressure(&pressure);
                    if (pressureValid && pressure > ELECTRICITY_BATTERY_BYPASS_PRESSURE_BAR) {
                        gridOverride = GridOverride::BATTERY_HIGH_PRESSURE;
                        gridOverrideDescription = "battery, high pressure";
                    } else {
                        gridOverride = GridOverride::BATTERY_LOW_PRESSURE;
                        gridOverrideDescription = "battery, low pressure";
                    }
                }
            } else if (received && state == ElectricityState::CRITICAL) {
                // Rule 3: critical grid state, stop both pumps and open bypass.
                gridOverride = GridOverride::SHUTDOWN;
                gridOverrideDescription = "critical grid state";
            }
            // NORMAL / GENERATOR, or fresh but never received: no override.
        }

        // Pre-gate outdoor-pump recovery must not fight the override's forced
        // OFF. Local for the whole tick body (the pre-gate block runs below).
        bool gridOutdoorForcedOff = (gridOverride != GridOverride::NONE);

        if (gridOverride != GridOverride::NONE) {
            // Outdoor pump is always commanded OFF while an override is active;
            // its pre-override state is snapshotted on entry and restored on
            // exit by the edge-detection block below.
            if (!changeOutdoorPumpStationEnableInternal(false)) {
                LOGE("update", "electricity override failed to disable outdoor pump station");
            }

            switch (gridOverride) {
                case GridOverride::BATTERY_HIGH_PRESSURE:
                    if (!changeHomePumpStationEnableInternal(false)) {
                        LOGE("update", "electricity override failed to disable home pump station");
                    }
                    if (!changeBypassValveOpenInternal(true)) {
                        LOGE("update", "electricity override failed to open bypass valve");
                    }
                    break;
                case GridOverride::BATTERY_LOW_PRESSURE:
                    // Deliberate policy change: the safety layer now outranks the
                    // old spec-literal "battery keeps the pump on" rule — entry
                    // above only reaches here with a fresh, above-minimum level.
                    if (!changeBypassValveOpenInternal(false)) {
                        LOGE("update", "electricity override failed to close bypass valve");
                    }
                    if (!changeHomePumpStationEnableInternal(true)) {
                        LOGE("update", "electricity override failed to enable home pump station");
                    }
                    break;
                case GridOverride::SHUTDOWN:
                    if (!changeHomePumpStationEnableInternal(false)) {
                        LOGE("update", "electricity override failed to disable home pump station");
                    }
                    if (!changeBypassValveOpenInternal(true)) {
                        LOGE("update", "electricity override failed to open bypass valve");
                    }
                    break;
                case GridOverride::NONE:
                    break;
            }
        }

        bool overrideActive = (gridOverride != GridOverride::NONE);
        if (overrideActive && !_electricityOverrideActive) {
            // Entry edge: snapshot the hardware state before the OFF queued above
            // reaches the relay (relay->update() drains at the top of loop()).
            _outdoorPumpOnBeforeOverride = _outdoorPumpStationRelay->isEnabled().first;
            LOGI("update", "electricity override active: %s", gridOverrideDescription);
        } else if (!overrideActive && _electricityOverrideActive) {
            // Exit edge: restore the outdoor pump only when it was on before the
            // override, automatic mode still owns it, the pit-level latch does
            // not, and fresh pit data (or a disabled feature) allows it. Never
            // restore the outdoor pump on unknown/stale pit level. Cleared
            // unconditionally so the restore fires at most once.
            if (_outdoorPumpOnBeforeOverride && _autoModeRelay->isEnabled().first && !_outdoorPumpStoppedByLevel && pitGuardAllowsRestore) {
                if (changeOutdoorPumpStationEnableInternal(true)) {
                    LOGI("update", "outdoor pump station restored after electricity override");
                } else {
                    LOGE("update", "failed to restore outdoor pump station after electricity override");
                }
            }
            _outdoorPumpOnBeforeOverride = false;
            LOGI("update", "electricity override cleared");
        }
        _electricityOverrideActive = overrideActive;

        // Outdoor pump protection: stop it when the rainwater pit is too low.
        // State-based: the OFF is re-fired every tick while the level stays
        // below the disable threshold (changeX is idempotent once the relay
        // already reads OFF). Runs before the barrel sensor checks so it
        // survives sensor failures, and in every mode. On missing/stale level
        // data the pump is left to the stale-pit guard below.
        if (pitDataOk && pitPct < RAINWATER_PIT_PUMP_DISABLE_PERCENT) {
            // State-based OFF every tick (changeX is idempotent once OFF). Latch
            // ownership only when this tick actually found the pump ON: a pump
            // already off (manual off / cold boot) must not be re-enabled later
            // by the recovery branch. Log only the first disable of the episode.
            auto pumpNow = _outdoorPumpStationRelay->isEnabled();
            const bool pumpAlreadyOff = pumpNow.second && !pumpNow.first;
            if (!changeOutdoorPumpStationEnableInternal(false)) {
                LOGE("update", "failed to disable outdoor pump station");
            } else if (!_outdoorPumpStoppedByLevel && !pumpAlreadyOff) {
                _outdoorPumpStoppedByLevel = true;
                LOGI("update", "outdoor pump station disabled, rainwater pit level: %f%%", pitPct);
            }
        } else if (pitDataOk && !gridOutdoorForcedOff && _outdoorPumpStoppedByLevel && pitPct > RAINWATER_PIT_PUMP_ENABLE_PERCENT) {
            // Automatic re-enable stays AUTO-only (M1): never resurrect the
            // outdoor pump in manual mode after a pit-low stop.
            if (_autoModeRelay->isEnabled().first) {
                if (changeOutdoorPumpStationEnableInternal(true)) {
                    _outdoorPumpStoppedByLevel = false;
                    LOGI("update", "outdoor pump station enabled, rainwater pit level: %f%%", pitPct);
                } else {
                    LOGE("update", "failed to enable outdoor pump station");
                }
            }
        }

        // Stale-pit guard (H6): an ENABLED pit feature with no fresh data must
        // not leave the outdoor pump running on unknown pit level. Skipped when
        // the feature is disabled (empty topic = off, not stale).
        if (pitFeatureEnabled && !pitDataOk && !gridOutdoorForcedOff) {
            auto stalePump = _outdoorPumpStationRelay->isEnabled();
            if (stalePump.second && stalePump.first) {
                if (changeOutdoorPumpStationEnableInternal(false)) {
                    LOGI("update", "outdoor pump station disabled: rainwater pit data stale");
                } else {
                    LOGE("update", "failed to disable outdoor pump station on stale pit data");
                }
            }
        }

        // Pit fill safety: an OPEN pit valve is closed on stale level feedback or on
        // reaching the configured target regardless of how it got open (adopted
        // session, orphan from a cold boot, manual UI/HA toggle). Runs before the
        // auto-mode gate so an abandoned open valve cannot flood the yard in manual
        // mode.
        auto pitValveState = _rainwaterPitRelay->isEnabled();
        bool pitValveActuallyOpen = pitValveState.second && !pitValveState.first;
        // In-tick authoritative open state: relay changes only enqueue, so mirror
        // every successful transition below instead of re-reading isEnabled().
        bool pitValveOpen = pitValveActuallyOpen;
        if (pitValveActuallyOpen && !pitDataOk) {
            if (changeRainwaterPitValveOpenInternal(false)) {
                pitValveOpen = false;
                _rainwaterPitFillingSession = false;
                LOGI("update", "rainwater pit filling stopped: no fresh evelyn data");
            } else {
                // State-based guard re-fires on the next tick, but log the enqueue failure.
                LOGE("update", "failed to close rainwater pit valve");
            }
        } else if (pitValveActuallyOpen && pitPct >= _config.rainwaterPitMaxFillLevel) {
            if (changeRainwaterPitValveOpenInternal(false)) {
                pitValveOpen = false;
                _rainwaterPitFillingSession = false;
                LOGI("update", "rainwater pit filling reached target level: %f%%", pitPct);
            } else {
                // State-based guard re-fires on the next tick, but log the enqueue failure.
                LOGE("update", "failed to close rainwater pit valve");
            }
        }

        // Outdoor pump idle-flow shutoff. Placed after the grid override block
        // which owns the pump while active, and after the pit valve safety. Now
        // applies in every mode: only the automatic re-enable path stays AUTO.
        updateOutdoorPumpIdleProtection(overrideActive);

        // Hard cap on continuous outdoor-pump runtime, in every mode. The
        // idle-flow shutoff only covers the AUTO low-flow case; this also stops
        // a pump that keeps flowing but runs for hours (e.g. a burst pipe).
        if (!gridOutdoorForcedOff && _outdoorPumpIdleArmed
            && (nowSec - _outdoorPumpOnSinceSec) >= OUTDOOR_PUMP_MAX_RUN_SEC) {
            auto maxRunPump = _outdoorPumpStationRelay->isEnabled();
            if (maxRunPump.second && maxRunPump.first) {
                if (changeOutdoorPumpStationEnableInternal(false)) {
                    LOGI("update", "outdoor pump station disabled: max continuous runtime");
                } else {
                    LOGE("update", "failed to disable outdoor pump station on max runtime");
                }
            }
        }

        // HOME PUMP SAFETY GATE (C1): evaluated before any other home-pump
        // writer. The latch is state-based (re-asserted every tick); the
        // hysteresis margin keeps a level hovering at the minimum from
        // chattering the pump. Does not touch the relay when the level is
        // unknown — the stale-barrel safe state below owns that case.
        if (barrelLevelOk && level <= WATER_MIN_LEVEL) {
            if (!_homePumpOffByMinLevel) {
                _homePumpOffByMinLevel = true;
                LOGI("update", "home pump disabled: barrel level at minimum (%f m)", level);
            }
            changeHomePumpStationEnableInternal(false);
        } else if (barrelLevelOk && _homePumpOffByMinLevel
                   && level >= WATER_MIN_LEVEL + HOME_PUMP_MIN_LEVEL_HYSTERESIS_M) {
            _homePumpOffByMinLevel = false;
            LOGI("update", "home pump min-level latch released");
        }

        // STALE BARREL SAFE STATE (C2): with the barrel level unknown the fill
        // valve may be filling a full barrel and the home pump may be running
        // dry. Force both to their safe state in EVERY mode and skip the rest of
        // the level-dependent logic this tick. The pit/outdoor guards above have
        // already run; the bypass and pit valves stay at their previous state.
        if (!barrelLevelOk) {
            changeFillingBarrelValveOpenInternal(false);
            changeHomePumpStationEnableInternal(false);
            if (!_barrelLevelStaleAnnounced) {
                _barrelLevelStaleAnnounced = true;
                LOGE("update", "barrel water level stale: fill valve closed, home pump off");
            }
            return;
        }
        _barrelLevelStaleAnnounced = false;
        // Overflow protection in every mode (manual included): the fill-valve
        // hysteresis below only runs in AUTO, so a manually opened fill valve
        // must still be force-closed when the barrel reaches the physical
        // maximum. State-based: re-fires every tick while the level is at max.
        if (level >= WATER_MAX_LEVEL) {
            auto fillValve = _fillingBarrelRelay->isEnabled();
            if (fillValve.second && !fillValve.first) {
                if (changeFillingBarrelValveOpenInternal(false)) {
                    LOGI("update", "barrel fill valve force-closed at max level: %f m", level);
                } else {
                    LOGE("update", "failed to close barrel fill valve at max level");
                }
            }
        }

        if (!_autoModeRelay->isEnabled().first) {
            return;
        }

        const auto span = WATER_MAX_LEVEL - WATER_MIN_LEVEL;
        auto enableLevel = WATER_MIN_LEVEL + span * (BARREL_FILL_ON_PERCENT / 100.0f);
        auto disableLevel = WATER_MIN_LEVEL + span * (BARREL_FILL_OFF_PERCENT / 100.0f);

        // Relay::setState only enqueues, so a barrel-open commanded this tick is
        // invisible to isEnabled() until the next relay->update(). Compute the
        // effective valve states here and overlay this pass's deterministic
        // barrel hysteresis intent, so pit/bypass/emergency decisions see the
        // barrel priority in the SAME tick the barrel is first commanded open.
        auto barrelRelay = _fillingBarrelRelay->isEnabled();

        bool barrelValveOpen = barrelRelay.second && !barrelRelay.first;
        if (level <= enableLevel) {
            barrelValveOpen = true;
        } else if (level >= disableLevel) {
            barrelValveOpen = false;
        }

        bool fillingActive = barrelValveOpen || pitValveOpen;

        // Evaluation only: the 10 s tick records the level samples. A fill whose
        // filled storage level is rising is making progress even when the home
        // meter registers no flow (the pit fill's big draw bypasses it).
        const int64_t trendNowUs = esp_timer_get_time();
        const bool barrelLevelRising = _barrelLevelTrend.isRising(BARREL_LEVEL_RISING_DELTA_M, LEVEL_TREND_MAX_AGE_US, trendNowUs);
        const bool pitLevelRising = _pitLevelTrend.isRising(PIT_LEVEL_RISING_DELTA_PERCENT, LEVEL_TREND_MAX_AGE_US, trendNowUs);
        const bool fillProgressing = (barrelValveOpen && barrelLevelRising) || (pitValveOpen && pitLevelRising);

        // A fill with no registered flow anywhere is stalled UNLESS the filled
        // storage level is rising (dead supply: the valve is open but nothing
        // comes through, so it must not block the emergency path).
        bool fillingStalled = fillingActive
            && !_meter->isFlowOfWaterActive()
            && !_yardMeter->isFlowOfWaterActive()
            && !fillProgressing;

        bool emergencyMode = false;
        if ((!fillingActive || fillingStalled) && _badPressureCount > 12) { // fill the barrel completely on a suspicion of an accident, including a stalled fill on a dead supply
            enableLevel = WATER_MAX_LEVEL - WATER_MAX_LEVEL * 0.2f;
            disableLevel = WATER_MAX_LEVEL - WATER_MAX_LEVEL * 0.1f;
            emergencyMode = true;
            // Re-overlay barrel hysteresis intent with the EMERGENCY thresholds, so
            // fillingActive reflects a barrel open commanded this tick before the
            // pit/bypass/pump decisions below.
            if (level <= enableLevel) {
                barrelValveOpen = true;
            } else if (level >= disableLevel) {
                barrelValveOpen = false;
            }
            fillingActive = barrelValveOpen || pitValveOpen;
        }

        _emergencyModeSensor->setValue(emergencyMode);

        if (level <= enableLevel) {
            changeFillingBarrelValveOpenInternal(true);
        } else if (level >= disableLevel) {
            changeFillingBarrelValveOpenInternal(false);
        }

        // Barrel priority: the pit valve must never stay open while the barrel valve
        // is open. The session flag is retained so filling resumes once the barrel closes.
        if (barrelValveOpen && pitValveOpen) {
            if (changeRainwaterPitValveOpenInternal(false)) {
                pitValveOpen = false;
            } else {
                // State-based guard re-fires on the next tick, but log the enqueue failure.
                LOGE("update", "failed to close rainwater pit valve");
            }
        }

        // Abandon a fill session that has run too long: a leaking supply or
        // stuck feedback must not fill forever. The valve is forced closed (it
        // may still be open when the cap fires mid-fill) and the start time is
        // cleared. This also covers sessions ended by the barrel-priority close
        // above, which retains the session flag and leaves the start time set.
        bool pitSessionAbandonedThisTick = false;
        if (_rainwaterPitFillingSession
            && _rainwaterPitFillingSessionStartSec != 0
            && static_cast<int32_t>(nowSec - _rainwaterPitFillingSessionStartSec) >= static_cast<int32_t>(RAINWATER_PIT_FILL_MAX_SESSION_SEC)) {
            pitSessionAbandonedThisTick = true;
            _rainwaterPitFillingSession = false;
            _rainwaterPitFillingSessionStartSec = 0;
            _rainwaterPitFillingBlockedUntilSec = nowSec + RAINWATER_PIT_FILL_COOLDOWN_SEC;
            if (pitValveOpen) {
                if (changeRainwaterPitValveOpenInternal(false)) {
                    pitValveOpen = false;
                } else {
                    LOGE("update", "failed to close rainwater pit valve on session timeout");
                }
            }
            LOGI("update", "rainwater pit filling abandoned: max session time");
        }

        if (_rainwaterPitFillingSession) {
            if (!barrelValveOpen && !pitValveOpen) {
                // Do not reopen on stale data or an already-completed fill.
                if (pitDataOk && pitPct < _config.rainwaterPitMaxFillLevel
                    && changeRainwaterPitValveOpenInternal(true)) {
                    pitValveOpen = true;
                    LOGI("update", "rainwater pit filling resumed");
                }
            }
        } else if (!pitSessionAbandonedThisTick
                   && nowSec >= _rainwaterPitFillingBlockedUntilSec && pitDataOk
                   && pitPct < RAINWATER_PIT_FILL_START_PERCENT && !barrelValveOpen
                   && !_homePumpOffByMinLevel) {
            if (changeRainwaterPitValveOpenInternal(true)) {
                pitValveOpen = true;
                _rainwaterPitFillingSession = true;
                _rainwaterPitFillingSessionStartSec = nowSec;
                LOGI("update", "rainwater pit filling started, level: %f%%", pitPct);
            }
        }

        // Recompute after the in-tick pit transitions so the bypass/pump decision
        // below sees the valve state actually commanded by this tick.
        fillingActive = barrelValveOpen || pitValveOpen;

        // While any filling valve is open, keep the bypass valve and the home pump
        // station in their prior state. Also gated while a grid override is active
        // so the override remains the only writer of the home pump and bypass
        // relays this tick (fixes same-tick opposite-command oscillation).
        if (gridOverride == GridOverride::NONE) {
            if (pitValveOpen) {
                // Pit filling needs home pressure for its whole duration: close
                // the bypass and run the home pump station. The barrel min-level
                // latch outranks this: while it holds, leave BOTH relays
                // untouched (filling paused) rather than run the pump dry.
                if (_homePumpOffByMinLevel) {
                    LOGI("update", "rainwater pit filling paused by barrel min-level safety");
                } else {
                    if (!changeBypassValveOpenInternal(false)) {
                        LOGE("update", "failed to close bypass valve for rainwater pit filling");
                    }
                    if (!changeHomePumpStationEnableInternal(true)) {
                        LOGE("update", "failed to enable pump station for rainwater pit filling");
                    }
                }
            } else if (!fillingActive) {
                // The min-level latch IS the protection now (with hysteresis);
                // the removed one-shot here was dead because a level at/below
                // WATER_MIN_LEVEL always forces the barrel valve open above.
                bool enableHomePumpStation = !_homePumpOffByMinLevel;
                // Debounced bypass mode (300-s hold, 0.2-bar hysteresis): open the
                // bypass and stop the pump station to save electricity only when
                // high city pressure has persisted, not on single samples.
                if (_bypassMode.active) {
                    changeBypassValveOpenInternal(true);
                    enableHomePumpStation = false;
                } else {
                    changeBypassValveOpenInternal(false);
                }

                if (!changeHomePumpStationEnableInternal(enableHomePumpStation)) {
                    LOGE("update", "failed to change pump station state. enable: %s", enableHomePumpStation ? "true" : "false");
                }
            }
        }

        LOGD(
            "update",
            "enable level: %f, disable level: %f, current level: %f, emergency mode: %s, filling active: %s, rainwater pit level: %f, pit session: %s, bad pressure count: %d, barrel level rising: %s, pit level rising: %s, min latch: %s",
            enableLevel,
            disableLevel,
            level,
            emergencyMode ? "true" : "false",
            fillingActive ? "true" : "false",
            pitDataOk ? pitPct : -1.0f,
            _rainwaterPitFillingSession ? "true" : "false",
            _badPressureCount,
            barrelLevelRising ? "true" : "false",
            pitLevelRising ? "true" : "false",
            _homePumpOffByMinLevel ? "true" : "false"
        );
    }
}

EDCommon::Relay::Relay* Automation::relayForDevice(DeviceId id, bool* isValve)
{
    if (isValve != nullptr) {
        *isValve = false;
    }

    switch (id) {
        case DeviceId::FillingBarrelValve:
            if (isValve != nullptr) {
                *isValve = true;
            }
            return _fillingBarrelRelay;
        case DeviceId::BypassValve:
            if (isValve != nullptr) {
                *isValve = true;
            }
            return _bypassRelay;
        case DeviceId::RainwaterPitValve:
            if (isValve != nullptr) {
                *isValve = true;
            }
            return _rainwaterPitRelay;
        case DeviceId::HomePumpStation:
            return _homePumpStationRelay;
        case DeviceId::DrainagePump:
            return _drainagePumpRelay;
        case DeviceId::OutdoorPumpStation:
            return _outdoorPumpStationRelay;
        case DeviceId::AutoMode:
            return _autoModeRelay;
    }

    return nullptr;
}

void Automation::refreshDeviceCache()
{
    for (uint8_t i = 0; i <= static_cast<uint8_t>(DeviceId::AutoMode); i++) {
        bool isValve = false;
        EDCommon::Relay::Relay* relay = relayForDevice(static_cast<DeviceId>(i), &isValve);
        if (relay == nullptr) {
            _deviceCache[i].available = false;
            continue;
        }

        auto enabled = relay->isEnabled();
        _deviceCache[i].available = enabled.second;
        // Valves expose "open" semantics while the relay desired state is inverted.
        _deviceCache[i].value = isValve ? !enabled.first : enabled.first;
    }
}

bool Automation::controlSetDevice(DeviceId id, bool desiredValue)
{
    // Direct enqueue only: Relay::setState() pushes onto the relay's command
    // queue, which is drained by Relay::update() on the main loop task. No I2C
    // access happens on the async web task. Dedupe against the current state is
    // intentionally skipped, because it would require isEnabled() (a live Wire
    // read); duplicate queued commands are idempotent and harmless.
    bool isValve = false;
    EDCommon::Relay::Relay* relay = relayForDevice(id, &isValve);
    if (relay == nullptr) {
        return false;
    }

    return relay->setState(isValve ? !desiredValue : desiredValue);
}

bool Automation::controlGetDevice(DeviceId id, bool* outValue)
{
    if (outValue == nullptr) {
        return false;
    }

    uint8_t index = static_cast<uint8_t>(id);
    if (index > static_cast<uint8_t>(DeviceId::AutoMode)) {
        return false;
    }

    // Cache is written on the loop task; until the first refresh every entry is
    // unavailable, so the UI reports Unknown instead of a stale/raced value.
    *outValue = _deviceCache[index].value;
    return _deviceCache[index].available;
}

bool Automation::getSupplierPressure(float* value)
{
    if (_pressureSensor == nullptr || value == nullptr) {
        return false;
    }

    auto result = _pressureSensor->getFreshReading(PRESSURE_READING_MAX_AGE_US);
    if (!result.second) {
        return false;
    }

    *value = result.first;
    return true;
}

bool Automation::getBarrelWaterLevel(float* value)
{
    if (_waterLevelSensor == nullptr || value == nullptr) {
        return false;
    }

    auto result = _waterLevelSensor->getFreshReading(WATER_LEVEL_READING_MAX_AGE_US);
    if (!result.second) {
        return false;
    }

    *value = result.first;
    return true;
}

bool Automation::getEmergencyModeActive()
{
    if (_emergencyModeSensor == nullptr) {
        return false;
    }

    // BinarySensor::isActive() returns (value, valid).
    auto active = _emergencyModeSensor->isActive();
    return active.second && active.first;
}

bool Automation::changeFillingBarrelValveOpenInternal(bool open)
{
    auto desired = !open;
    auto current = _fillingBarrelRelay->isEnabled();
    if (current.second && current.first == desired) {
        return true;
    }
    return _fillingBarrelRelay->setState(desired);
}

bool Automation::changeBypassValveOpenInternal(bool open)
{
    auto desired = !open;
    auto current = _bypassRelay->isEnabled();
    if (current.second && current.first == desired) {
        return true;
    }
    return _bypassRelay->setState(desired);
}

bool Automation::changeHomePumpStationEnableInternal(bool enable)
{
    auto current = _homePumpStationRelay->isEnabled();
    if (current.second && current.first == enable) {
        return true;
    }
    return _homePumpStationRelay->setState(enable);
}

bool Automation::changeOutdoorPumpStationEnableInternal(bool enable)
{
    auto current = _outdoorPumpStationRelay->isEnabled();
    if (current.second && current.first == enable) {
        return true;
    }
    return _outdoorPumpStationRelay->setState(enable);
}

void Automation::updateOutdoorPumpIdleProtection(bool overrideActive)
{
    if (_yardMeter == nullptr) {
        return;
    }

    uint32_t nowSec = esp_timer_get_time() / 1000000;
    uint32_t liters = (uint32_t)(_yardMeter->getCurrentValue() * 1000.0f + 0.5f);

    // Sample every tick regardless of mode so the trailing window is already
    // valid when the pump starts. The slot at head is the oldest sample,
    // ~OUTDOOR_PUMP_IDLE_WINDOW_SEC ticks ago (conservative: one sample longer
    // than the window), and is about to be overwritten.
    bool historyInvalid = false;
    uint32_t flow = 0;
    if (!_yardFlowSamplesSeeded) {
        for (uint16_t i = 0; i < YARD_FLOW_SAMPLES; i++) {
            _yardFlowSamples[i] = liters;
        }
        _yardFlowSampleHead = 0;
        _yardFlowSamplesSeeded = true;
        _lastYardLiters = liters;
    } else {
        uint32_t ago = _yardFlowSamples[_yardFlowSampleHead];
        if (liters < ago || liters < _lastYardLiters) {
            // The web UI can lower the persisted total (setInitialValue); the
            // tick-to-tick term catches it even while the 600-s-old slot still
            // looks monotonic. Refill the flat window and disarm here: the
            // window holds no flow history, so the flow window (via refill) and
            // the pump-ON eligibility timer (via disarm + re-arm with a fresh
            // _outdoorPumpOnSinceSec in the tracking pass below, same tick)
            // must restart together. Otherwise the next tick would compare
            // ~1 s of samples against a stale elapsed >= 600 s gate and
            // falsely shutoff despite real flow.
            for (uint16_t i = 0; i < YARD_FLOW_SAMPLES; i++) {
                _yardFlowSamples[i] = liters;
            }
            _yardFlowSampleHead = 0;
            historyInvalid = true;
            _outdoorPumpIdleArmed = false;
        } else {
            flow = liters - ago;
        }
        _lastYardLiters = liters;
        _yardFlowSamples[_yardFlowSampleHead] = liters;
        _yardFlowSampleHead = (_yardFlowSampleHead + 1) % YARD_FLOW_SAMPLES;
    }

    // Track continuous ON time regardless of mode/override; the actuation gate
    // below decides whether this automation is allowed to act on it.
    auto pump = _outdoorPumpStationRelay->isEnabled();
    if (!pump.second || !pump.first) {
        _outdoorPumpIdleArmed = false;
    } else if (!_outdoorPumpIdleArmed) {
        _outdoorPumpIdleArmed = true;
        _outdoorPumpOnSinceSec = nowSec;
    }

    // No persistent latch is needed for the electricity-override exit restore:
    // that restore only fires when the pump was ON at override entry, and after
    // an idle shutoff the pump reads OFF, so a later entry snapshots false. If a
    // restore does re-enable the pump, the OFF->ON edge above re-arms the timer.
    //
    // Applies in every mode (H6): manual mode previously skipped this entirely,
    // leaving an idle-running outdoor pump unprotected. Actuation is OFF-only,
    // so it is always safe; the automatic re-enable path stays AUTO-only.
    if (overrideActive || !_outdoorPumpIdleArmed || historyInvalid) {
        return;
    }
    if ((nowSec - _outdoorPumpOnSinceSec) < OUTDOOR_PUMP_IDLE_WINDOW_SEC) {
        return;
    }
    if (flow >= OUTDOOR_PUMP_IDLE_MIN_FLOW_LITERS) {
        return;
    }

    if (changeOutdoorPumpStationEnableInternal(false)) {
        _outdoorPumpIdleArmed = false;
        LOGI("update", "outdoor pump station disabled: less than %d L over last %d sec", OUTDOOR_PUMP_IDLE_MIN_FLOW_LITERS, OUTDOOR_PUMP_IDLE_WINDOW_SEC);
    } else {
        // State-based guard re-fires on the next tick, but log the enqueue failure.
        LOGE("update", "failed to disable idle outdoor pump station");
    }
}

void Automation::updateBypassMode(float pressure, bool allowEnter)
{
    const uint32_t nowSec = esp_timer_get_time() / 1000000;
    const BypassModeEvent event = updateBypassModeState(_bypassMode, pressure, nowSec, allowEnter);

    switch (event) {
        case BypassModeEvent::ENTERED_BYPASS:
            LOGI("update", "bypass mode ON: avg pressure high, avg: %.2f, pressure: %.2f", _bypassMode.avg, pressure);
            break;
        case BypassModeEvent::EXITED_LOW_AVG:
            LOGI("update", "bypass mode OFF: avg pressure low, avg: %.2f, pressure: %.2f", _bypassMode.avg, pressure);
            break;
        case BypassModeEvent::EXITED_FAST_DROP:
            LOGI("update", "bypass mode OFF (fast pressure drop): %.2f bar", pressure);
            break;
        case BypassModeEvent::NONE:
            break;
    }
}

bool Automation::changeDrainagePumpEnableInternal(bool enable)
{
    auto current = _drainagePumpRelay->isEnabled();
    if (current.second && current.first == enable) {
        return true;
    }
    return _drainagePumpRelay->setState(enable);
}

bool Automation::changeRainwaterPitValveOpenInternal(bool open)
{
    auto desired = !open;
    auto current = _rainwaterPitRelay->isEnabled();
    if (current.second && current.first == desired) {
        return true;
    }
    return _rainwaterPitRelay->setState(desired);
}

bool Automation::getRainwaterPitLevelPercent(float* percent)
{
    if (strlen(_config.rainwaterPitLevelTopic) == 0) {
        return false;
    }

    if (!_rainwaterPitLevelReceived) {
        return false;
    }

    // Signed diff: the MQTT task may write the timestamp AFTER the loop task
    // reads nowSec, so an unsigned subtraction could underflow and report a
    // false "stale" for one tick.
    uint32_t nowSec = esp_timer_get_time() / 1000000;
    if (static_cast<int32_t>(nowSec - _rainwaterPitLevelLastUpdateSec) > static_cast<int32_t>(RAINWATER_PIT_DATA_TIMEOUT_SEC)) {
        return false;
    }

    if (_config.rainwaterPitMaxHeight <= 0) {
        return false;
    }

    *percent = _rainwaterPitLevelMeters / _config.rainwaterPitMaxHeight * 100.0f;
    return true;
}

