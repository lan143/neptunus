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

    _mai6 = _wirenboard->addMAI6(config.addressWBMAI6);
    if (!setupPressureSensor()) {
        LOGE("init", "failed to setup pressure sensor");
    }

    std::string topicPrefix = _config.mqttTopicPrefix;

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

    auto state = _localStateMgr->getData();
    _stateMgr->getState().changeAutoModeState(state->autoMode);

    buildDiscovery(device);

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

    if ((_pressureSensorLastUpdateTime + 10000000) < esp_timer_get_time()) {
        auto pressure = _mai6->getCalculatedValueN(1);
        if (pressure.second) {
            float_t calculatedPressure = (float_t)pressure.first / 100.0f;
            calculatedPressure = std::round(calculatedPressure * 100.0f) / 100.0f;

            _stateMgr->getState().setWaterPressureSupplier(calculatedPressure);
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
            _stateMgr->getState().setWaterPressureSupplier(0.0f);
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

        if (!_localStateMgr->getData()->autoMode) {
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

        _stateMgr->getState().changeEmergencyModeState(emergencyMode);

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

bool Automation::changeAutoModeEnable(bool enable)
{
    _localStateMgr->getData()->autoMode = enable;
    _stateMgr->getState().changeAutoModeState(enable);

    return _localStateMgr->store();
}

bool Automation::setupPressureSensor()
{
    LOGI("setupPressureSensor", "setup");

    auto sensorType = _mai6->getSensorTypeN(1);
    if (!sensorType.second) {
        LOGE("setupPressureSensor", "failed to get sensor type");
        return false;
    }

    if (sensorType.first != 0x1302) { // 4-20 mA sensor
        LOGD("setupPressureSensor", "change sensor type");

        if (!_mai6->setSensorTypeN(1, 0x1302)) {
            LOGE("setupPressureSensor", "failed to update sensor type");
            return false;
        }
    }

    auto minCalculateValue = _mai6->getMinCalculatedValueN(1);
    if (!minCalculateValue.second) {
        LOGE("setupPressureSensor", "failed to get min calculated value");
        return false;
    }

    if (minCalculateValue.first != 0) {
        LOGD("setupPressureSensor", "change min calculated value");

        if (!_mai6->setMinCalculatedValueN(1, 0)) {
            LOGE("setupPressureSensor", "failed to set min calculated value");
            return false;
        }
    }

    auto maxCalculatedValue = _mai6->getMaxCalculatedValueN(1);
    if (!maxCalculatedValue.second) {
        LOGE("setupPressureSensor", "failed to get max calculated value");
        return false;
    }

    if (maxCalculatedValue.first != 1000) { // 10 Bar
        LOGD("setupPressureSensor", "change max calculated value");

        if (!_mai6->setMaxCalculatedValueN(1, 1000)) {
            LOGE("setupPressureSensor", "failed to set max calculated value");
            return false;
        }
    }

    LOGI("setupPressureSensor", "setup complete");

    return true;
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

void Automation::buildDiscovery(EDHA::Device* device)
{
    const char* chipID = EDUtils::getChipID();
    _discoveryMgr->addSensor(
        device,
        "Water pressure supplier",
        "waterPressureSupplier",
        EDUtils::formatString("water_pressure_supplier_neptunus_%s", chipID)
    )
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.waterPressureSupplier }}")
        ->setDeviceClass("pressure")
        ->setUnitOfMeasurement("bar");

    _discoveryMgr->addSwitch(
        device,
        "Auto mode",
        "autoMode",
        EDUtils::formatString("auto_mode_neptunus_%s", EDUtils::getChipID())
    )
        ->setCommandTemplate("{\"autoMode\": {{ value }} }")
        ->setCommandTopic(_config.mqttCommandTopic)
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.autoMode }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false")
        ->setStateOn("true")
        ->setStateOff("false");

    _discoveryMgr->addBinarySensor(
        device,
        "Emergency mode",
        "emergency_mode",
        EDUtils::formatString("emergency_mode_neptunus_%s", chipID)
    )
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.emergencyMode }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false")
        ->setDeviceClass(EDHA::deviceClassBinarySensorProblem);
}
