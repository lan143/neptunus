#include <log/log.h>
#include <Utils.h>
#include <relay/pcf8574.h>

#include "config.h"
#include "automation.h"

void Automation::init(EDHA::Device* device, Config config)
{
    _localStateMgr->setDefault([](AutomationState* state) {
        state->autoMode = true;
    });
    _localStateMgr->load();

    _config = config;

    std::string topicPrefix = _config.mqttTopicPrefix;

    auto mai6 = _wirenboard->addMAI6(config.addressWBMAI6);
    _pressureSensor = new EDCommon::Sensor::WBMAI6Pressure(mai6, 1);
    if (!_pressureSensor->init(2, 10000, {
        EDCommon::Sensor::withMQTT(_mqtt, topicPrefix, "neptunus_sensor", "Water pressure supplier"),
        EDCommon::Sensor::withDiscovery(_discoveryMgr, device)
    })) {
        LOGE("init", "failed to init pressure sensor");
    }

    auto qdy30a = _wirenboard->addQDY30A(config.addressQDY30A);
    _waterLevelSensor = new EDCommon::Sensor::WaterLevel(qdy30a);
    if (!_waterLevelSensor->init(3, 1000, {
        EDCommon::Sensor::withMQTT(_mqtt, topicPrefix, "neptunus_sensor", "Barrel water level"),
        EDCommon::Sensor::withDiscovery(_discoveryMgr, device)
    })) {
        LOGE("init", "failed to init water level sensor");
    }

    auto fillingBarrelRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    fillingBarrelRelay->init(RELAY_CHANNEL_FILLING_BARREL, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Filling Barrel Valve"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
    });
    _fillingBarrelRelay = fillingBarrelRelay;

    auto bypassRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    bypassRelay->init(RELAY_CHANNEL_BYPASS, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Bypass Valve"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
    });
    _bypassRelay = bypassRelay;

    auto homePumpStationRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    homePumpStationRelay->init(RELAY_CHANNEL_HOME_PUMP_STATION, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Home pump station"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
    });
    _homePumpStationRelay = homePumpStationRelay;

    auto drainagePumpRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    drainagePumpRelay->init(RELAY_CHANNEL_DRAINAGE_PUMP, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Drainage Pump"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
    });
    _drainagePumpRelay = drainagePumpRelay;

    auto rainwaterPitRelay = new EDCommon::Relay::PCF8574P(_relayDriver);
    rainwaterPitRelay->init(RELAY_CHANNEL_FILLING_RAINWATER_PIT, {
        EDCommon::Relay::withMQTT(_mqtt, topicPrefix, "neptunus_relay", "Filling Rainwater Pit"),
        EDCommon::Relay::withDiscovery(_discoveryMgr, device)
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
    _emergencyModeSensor->update();
    _pressureSensor->update();

    if ((_pressureSensorLastUpdateTime + 10000000) < esp_timer_get_time()) {
        auto pressure = _pressureSensor->getValue();
        if (pressure.second) {
            float_t calculatedPressure = pressure.first;

            auto fillingBarrel = _fillingBarrelRelay->isEnabled();
            auto rainwaterPit = _rainwaterPitRelay->isEnabled();

            // Counters only move when no filling valve is open. Pit relay state must
            // be valid (conservative: an invalid state freezes the counters).
            if (
                !_meter->isFlowOfWaterActive()
                && fillingBarrel.second && fillingBarrel.first
                && rainwaterPit.second && rainwaterPit.first
            ) {
                if (calculatedPressure > SWITCH_TO_HOME_PUMP_STATION_PRESSURE && _goodPressureCount < 24) {
                    _goodPressureCount++;
                } else if (calculatedPressure < SWITCH_TO_HOME_PUMP_STATION_PRESSURE && _goodPressureCount > 0) {
                    _goodPressureCount--;
                }

                if (calculatedPressure < EMERGENCY_PRESSURE && _badPressureCount < 24) {
                    _badPressureCount++;
                } else if (calculatedPressure > EMERGENCY_PRESSURE && _badPressureCount > 0) {
                    _badPressureCount--;
                }
            }
        } else {
            LOGE("update", "failed to get supplier water pressure");
        }

        _pressureSensorLastUpdateTime = esp_timer_get_time();
    }

    if ((_lastUpdateTime + 1000000) < esp_timer_get_time()) {
        _lastUpdateTime = esp_timer_get_time();

        float pitPct;
        bool pitDataOk = getRainwaterPitLevelPercent(&pitPct);

        // Outdoor pump protection: stop it when the rainwater pit is too low.
        // Runs before the barrel sensor checks so it survives sensor failures.
        // On missing/stale level data the pump is left untouched.
        if (pitDataOk) {
            if (pitPct < RAINWATER_PIT_PUMP_DISABLE_PERCENT && !_outdoorPumpStoppedByLevel) {
                // Only latch ownership (and re-enable later) if this code actually
                // stopped the pump. A pump that is already off (manual off / cold
                // boot) must not be re-enabled by the recovery branch.
                auto pumpNow = _outdoorPumpStationRelay->isEnabled();
                if (pumpNow.second && !pumpNow.first) {
                    // Pump already off; do nothing, do not latch.
                } else if (changeOutdoorPumpStationEnableInternal(false)) {
                    _outdoorPumpStoppedByLevel = true;
                    LOGI("update", "outdoor pump station disabled, rainwater pit level: %f%%", pitPct);
                } else {
                    LOGE("update", "failed to disable outdoor pump station");
                }
            } else if (_outdoorPumpStoppedByLevel && pitPct > RAINWATER_PIT_PUMP_ENABLE_PERCENT) {
                if (changeOutdoorPumpStationEnableInternal(true)) {
                    _outdoorPumpStoppedByLevel = false;
                    LOGI("update", "outdoor pump station enabled, rainwater pit level: %f%%", pitPct);
                } else {
                    LOGE("update", "failed to enable outdoor pump station");
                }
            }
        }

        // Pit fill session safety: stop an active fill when level feedback is
        // missing/stale or the target is reached. Runs before the auto-mode gate
        // so an abandoned open valve cannot flood the yard in manual mode.
        if (_rainwaterPitFillingSession && !pitDataOk) {
            if (changeRainwaterPitValveOpenInternal(false)) {
                _rainwaterPitFillingSession = false;
                LOGI("update", "rainwater pit filling stopped: no fresh evelyn data");
            } else {
                // Keep the session so the stop is retried on the next tick.
                LOGE("update", "failed to close rainwater pit valve");
            }
        } else if (_rainwaterPitFillingSession && pitPct >= _config.rainwaterPitMaxFillLevel) {
            if (changeRainwaterPitValveOpenInternal(false)) {
                _rainwaterPitFillingSession = false;
                LOGI("update", "rainwater pit filling reached target level: %f%%", pitPct);
            } else {
                // Keep the session so the stop is retried on the next tick.
                LOGE("update", "failed to close rainwater pit valve");
            }
        }

        if (_waterLevelSensor == nullptr) {
            LOGE("update", "water level sensor not initialized");
            return;
        }
        _waterLevelSensor->update();
        auto levelResult = _waterLevelSensor->getValue();
        if (!levelResult.second) {
            LOGE("update", "failed to get water level");
            return;
        }

        if (!_autoModeRelay->isEnabled().first) {
            return;
        }

        auto level = levelResult.first;

        auto middleLevel = (WATER_MAX_LEVEL - WATER_MIN_LEVEL) / 2 + WATER_MIN_LEVEL;
        auto enableLevel = middleLevel - middleLevel * 0.25;
        auto disableLevel = middleLevel + middleLevel * 0.25;

        // Relay::setState only enqueues, so a barrel-open commanded this tick is
        // invisible to isEnabled() until the next relay->update(). Compute the
        // effective valve states here and overlay this pass's deterministic
        // barrel hysteresis intent, so pit/bypass/emergency decisions see the
        // barrel priority in the SAME tick the barrel is first commanded open.
        auto barrelRelay = _fillingBarrelRelay->isEnabled();
        auto pitRelay = _rainwaterPitRelay->isEnabled();

        bool barrelValveOpen = barrelRelay.second && !barrelRelay.first;
        if (level <= enableLevel) {
            barrelValveOpen = true;
        } else if (level >= disableLevel) {
            barrelValveOpen = false;
        }

        bool pitValveOpen = pitRelay.second && !pitRelay.first;
        bool fillingActive = barrelValveOpen || pitValveOpen;

        bool emergencyMode = false;
        if (!fillingActive && _badPressureCount > 12) { // fill the barrel completely if there is a suspicion of an accident
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

        // While any filling valve is open, keep the bypass valve and the home pump
        // station in their prior state.
        if (!fillingActive) {
            bool enableHomePumpStation = true;
            if (_goodPressureCount > 12) { // disable pump station and open bypass for saving electricity
                changeBypassValveOpenInternal(true);
                enableHomePumpStation = false;
            } else {
                changeBypassValveOpenInternal(false);
            }

            if (level <= WATER_MIN_LEVEL) {
                enableHomePumpStation = false;
            }

            if (!changeHomePumpStationEnableInternal(enableHomePumpStation)) {
                LOGE("update", "failed to change pump station state. enable: %s", enableHomePumpStation ? "true" : "false");
            }
        }

        // Barrel priority: the pit valve must never stay open while the barrel valve
        // is open. The session flag is retained so filling resumes once the barrel closes.
        if (barrelValveOpen && pitValveOpen) {
            changeRainwaterPitValveOpenInternal(false);
            pitValveOpen = false;
        }

        if (_rainwaterPitFillingSession) {
            if (!barrelValveOpen && !pitValveOpen) {
                changeRainwaterPitValveOpenInternal(true);
                LOGI("update", "rainwater pit filling resumed");
            }
        } else if (pitDataOk && pitPct < RAINWATER_PIT_FILL_START_PERCENT && !barrelValveOpen) {
            if (changeRainwaterPitValveOpenInternal(true)) {
                _rainwaterPitFillingSession = true;
                LOGI("update", "rainwater pit filling started, level: %f%%", pitPct);
            }
        }

        LOGD(
            "update",
            "middle level: %f, enable level: %f, disable level: %f, current level: %f, emergency mode: %s, filling active: %s, rainwater pit level: %f, pit session: %s, good pressure count: %d, bad pressure count: %d",
            middleLevel,
            enableLevel,
            disableLevel,
            level,
            emergencyMode ? "true" : "false",
            fillingActive ? "true" : "false",
            pitDataOk ? pitPct : -1.0f,
            _rainwaterPitFillingSession ? "true" : "false",
            _goodPressureCount,
            _badPressureCount
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

    auto result = _pressureSensor->getValue();
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

    auto result = _waterLevelSensor->getValue();
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

    uint32_t nowSec = esp_timer_get_time() / 1000000;
    if ((nowSec - _rainwaterPitLevelLastUpdateSec) > RAINWATER_PIT_DATA_TIMEOUT_SEC) {
        return false;
    }

    if (_config.rainwaterPitMaxHeight <= 0) {
        return false;
    }

    *percent = _rainwaterPitLevelMeters / _config.rainwaterPitMaxHeight * 100.0f;
    return true;
}

