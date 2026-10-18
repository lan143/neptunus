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
    _autoModeSeeding = false;
    _emergencyModeSensor->update();
    _pressureSensor->update();

    if ((_pressureSensorLastUpdateTime + 10000000) < esp_timer_get_time()) {
        auto pressure = _pressureSensor->getValue();
        if (pressure.second) {
            float_t calculatedPressure = pressure.first;

            auto fillingBarrel = _fillingBarrelRelay->isEnabled();

            if (!_meter->isFlowOfWaterActive() && fillingBarrel.second && fillingBarrel.first) {
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

        bool emergencyMode = false;
        if (_badPressureCount > 12) { // fill the barrel completely if there is a suspicion of an accident
            enableLevel = WATER_MAX_LEVEL - WATER_MAX_LEVEL * 0.2f;
            disableLevel = WATER_MAX_LEVEL - WATER_MAX_LEVEL * 0.1f;
            emergencyMode = true;
        }

        _emergencyModeSensor->setValue(emergencyMode);

        /*bool enableHomePumpStation = true;
        if (_goodPressureCount > 12) { // disable pump station and open bypass for saving electricity
            changeBypassValveOpenInternal(true);
            enableHomePumpStation = false;
        } else {
            changeBypassValveOpenInternal(false);
        }*/

        if (level <= enableLevel) {
            changeFillingBarrelValveOpenInternal(true);
        } else if (level >= disableLevel) {
            changeFillingBarrelValveOpenInternal(false);
        }

        /*if (level <= WATER_MIN_LEVEL) {
            enableHomePumpStation = false;
        }

        if (!changeHomePumpStationEnableInternal(enableHomePumpStation)) {
            LOGE("update", "failed to change pump station state. enable: %s", enableHomePumpStation ? "true" : "false");
        }*/

        LOGD(
            "update",
            "middle level: %f, enable level: %f, disable level: %f, current level: %f, emergency mode: %s, good pressure count: %d, bad pressure count: %d",
            middleLevel,
            enableLevel,
            disableLevel,
            level,
            emergencyMode ? "true" : "false",
            _goodPressureCount,
            _badPressureCount
        );
    }
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

bool Automation::changeDrainagePumpEnableInternal(bool enable)
{
    auto current = _drainagePumpRelay->isEnabled();
    if (current.second && current.first == enable) {
        return true;
    }
    return _drainagePumpRelay->setState(enable);
}

