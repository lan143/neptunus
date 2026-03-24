#include <log/log.h>
#include <Utils.h>

#include "config.h"
#include "automation.h"

void Automation::init(EDHA::Device* device, Config config)
{
    _localStateMgr->setDefault([](AutomationState* state) {
        state->autoMode = true;
    });
    _localStateMgr->load();

    _config = config;
    _qdy30a = _wirenboard->addQDY30A(config.addressQDY30A);
    _constantsLoaded = loadQDY30AConstants();
    if (!_constantsLoaded) {
        LOGE("init", "failed to load QDY30A constants");
    }

    _mai6 = _wirenboard->addMAI6(config.addressWBMAI6);
    if (!setupPressureSensor()) {
        LOGE("init", "failed to setup pressure sensor");
    }

    auto state = _localStateMgr->getData();
    _stateMgr->getState().changeAutoModeState(state->autoMode);
    if (!state->autoMode) {
        _stateMgr->getState().changeFillingBarrelValveState(state->fillingBarrelValveOpen);
        _stateMgr->getState().changeBypassValveState(state->bypassValveOpen);
        _stateMgr->getState().changePumpStationState(state->pumpStationEnabled);
        _stateMgr->getState().changeDrainagePumpState(state->drainagePumpEnabled);
    }

    buildDiscovery(device);

    inited = true;
}

void Automation::update()
{
    if (!inited) {
        LOGE("update", "automation isn't initialized");
        return;
    }

    if ((_pressureSensorLastUpdateTime + 10000000) < esp_timer_get_time()) {
        auto pressure = _mai6->getCalculatedValueN(1);
        if (pressure.second) {
            float_t calculatedPressure = (float_t)pressure.first / 100.0f;
            calculatedPressure = std::round(calculatedPressure * 100.0f) / 100.0f;

            _stateMgr->getState().setWaterPressureSupplier(calculatedPressure);

            if (!_meter->isFlowOfWaterActive()) {
                if (calculatedPressure > SWITCH_TO_PUMP_STATION_PRESSURE && _goodPressureCount < 24) {
                    _goodPressureCount++;
                } else if (calculatedPressure < SWITCH_TO_PUMP_STATION_PRESSURE && _goodPressureCount > 0) {
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

        auto levelResult = getWaterLevel();
        if (!levelResult.second) {
            LOGE("update", "failed to get water level");
            return;
        }

        auto level = levelResult.first;
        _stateMgr->getState().setWaterLevel(level);

        if (!_localStateMgr->getData()->autoMode) {
            return;
        }

        auto middleLevel = (WATER_MAX_LEVEL - WATER_MIN_LEVEL) / 2 + WATER_MIN_LEVEL;
        auto enableLevel = middleLevel - middleLevel * 0.15;
        auto disableLevel = middleLevel + middleLevel * 0.15;

        bool emergencyMode = false;
        if (_badPressureCount > 12) { // fill the barrel completely if there is a suspicion of an accident
            enableLevel = WATER_MAX_LEVEL - WATER_MAX_LEVEL * 0.2f;
            disableLevel = WATER_MAX_LEVEL - WATER_MAX_LEVEL * 0.1f;
            emergencyMode = true;
        }

        _stateMgr->getState().changeEmergencyModeState(emergencyMode);

        bool enablePumpStation = true;
        if (_goodPressureCount > 12) { // disable pump station and open bypass for saving electricity
            changeBypassValveOpenInternal(true);
            enablePumpStation = false;
        } else {
            changeBypassValveOpenInternal(false);
        }

        if (level <= enableLevel) {
            changeFillingBarrelValveOpenInternal(true);
        } else if (level >= disableLevel) {
            changeFillingBarrelValveOpenInternal(false);
        }

        if (level <= WATER_MIN_LEVEL) {
            enablePumpStation = false;
        }

        if (!changePumpStationEnableInternal(enablePumpStation)) {
            LOGE("update", "failed to change pump station state. enable: %s", enablePumpStation ? "true" : "false");
        }

        if (level >= WATER_MAX_LEVEL) {
            changeDrainagePumpEnableInternal(false);
        } else {
            changeDrainagePumpEnableInternal(true);
        }

        LOGD(
            "update",
            "middle level: %f, enable level: %f, disable level: %f, current level: %f, emergency mode: %s, good pressure count: %d, bad pressure count: %d, pump station enable: %s",
            middleLevel,
            enableLevel,
            disableLevel,
            level,
            emergencyMode ? "true" : "false",
            _goodPressureCount,
            _badPressureCount,
            enablePumpStation ? "true" : "false"
        );
    }
}

bool Automation::changeAutoModeEnable(bool enable)
{
    _localStateMgr->getData()->autoMode = enable;
    _stateMgr->getState().changeAutoModeState(enable);

    return _localStateMgr->store();
}

bool Automation::changeFillingBarrelValveOpen(bool open)
{
    if (_localStateMgr->getData()->autoMode) {
        return false;
    }

    if (!changeFillingBarrelValveOpenInternal(open)) {
        return false;
    }

    _localStateMgr->getData()->fillingBarrelValveOpen = open;
    _stateMgr->getState().changeFillingBarrelValveState(open);

    return _localStateMgr->store();
}

bool Automation::changeBypassValveOpen(bool open)
{
    if (_localStateMgr->getData()->autoMode) {
        return false;
    }

    if (!changeBypassValveOpenInternal(open)) {
        return false;
    }

    _localStateMgr->getData()->bypassValveOpen = open;
    _stateMgr->getState().changeBypassValveState(open);

    return _localStateMgr->store();
}

bool Automation::changePumpStationEnable(bool enable)
{
    if (_localStateMgr->getData()->autoMode) {
        return false;
    }

    if (!changePumpStationEnableInternal(enable)) {
        return false;
    }

    _localStateMgr->getData()->pumpStationEnabled = enable;
    _stateMgr->getState().changePumpStationState(enable);

    return _localStateMgr->store();
}

bool Automation::changeDrainagePumpEnable(bool enable)
{
    if (_localStateMgr->getData()->autoMode) {
        return false;
    }

    if (!changeDrainagePumpEnableInternal(enable)) {
        return false;
    }

    _localStateMgr->getData()->drainagePumpEnabled = enable;
    _stateMgr->getState().changeDrainagePumpState(enable);

    return _localStateMgr->store();
}

bool Automation::loadQDY30AConstants()
{
    auto unitOfMeasurement = _qdy30a->getUnitOfMeasurement();
    if (!unitOfMeasurement.second) {
        return false;
    }

    auto dotPosition = _qdy30a->getDotPosition();
    if (!dotPosition.second) {
        return false;
    }

    _unitOfMeasurement = unitOfMeasurement.first;
    _dotPosition = dotPosition.first;

    LOGD("loadQDY30AConstants", "unit of measurement: %d, dot position: %d", _unitOfMeasurement, _dotPosition);

    return true;
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

std::pair<float_t, bool> Automation::getWaterLevel()
{
    if (!_constantsLoaded) {
        _constantsLoaded = loadQDY30AConstants();
    }

    if (!_constantsLoaded) {
        return std::make_pair(0.0f, false);
    }

    auto value = _qdy30a->getLevel();
    if (!value.second) {
        return value;
    }

    float_t convertLevel = (float_t)value.first;

    switch (_unitOfMeasurement) {
        case 16: // m
            break;
        case 17: // cm
            convertLevel /= 100.0f;
            break;
        case 18: // mm
            convertLevel /= 1000.0f;
            break;
        default:
            return std::make_pair(0.0f, false);
    }

    switch (_dotPosition) {
        case 1:
            convertLevel /= 10.0f;
            break;
        case 2:
            convertLevel /= 100.0f;
            break;
        case 3:
            convertLevel /= 1000.0f;
            break;
        default:
            return std::make_pair(0.0f, false);
    }

    return std::make_pair(std::round(convertLevel * 1000.0f) / 1000.0f, true);
}

bool Automation::changeFillingBarrelValveOpenInternal(bool open)
{
    if (!_relayMgr->getRelay(RELAY_TYPE_FILLING_BARREL)->changeState(!open)) {
        return false;
    }

    _stateMgr->getState().changeFillingBarrelValveState(open);
    if (!_localStateMgr->getData()->autoMode) {
        _localStateMgr->getData()->fillingBarrelValveOpen = open;
        _localStateMgr->store();
    }

    return true;
}

bool Automation::changeBypassValveOpenInternal(bool open)
{
    if (!_relayMgr->getRelay(RELAY_TYPE_BYPASS)->changeState(!open)) {
        return false;
    }

    _stateMgr->getState().changeBypassValveState(open);
    if (!_localStateMgr->getData()->autoMode) {
        _localStateMgr->getData()->bypassValveOpen = open;
        _localStateMgr->store();
    }

    return true;
}

bool Automation::changePumpStationEnableInternal(bool enable)
{
    if (!_relayMgr->getRelay(RELAY_TYPE_PUMP_STATION)->changeState(enable)) {
        return false;
    }

    _stateMgr->getState().changePumpStationState(open);
    if (!_localStateMgr->getData()->autoMode) {
        _localStateMgr->getData()->pumpStationEnabled = enable;
        _localStateMgr->store();
    }

    return true;
}

bool Automation::changeDrainagePumpEnableInternal(bool enable)
{
    if (!_relayMgr->getRelay(RELAY_TYPE_DRAINAGE_PUMP)->changeState(enable)) {
        return false;
    }

    _stateMgr->getState().changeDrainagePumpState(open);
    if (!_localStateMgr->getData()->autoMode) {
        _localStateMgr->getData()->drainagePumpEnabled = enable;
        _localStateMgr->store();
    }

    return true;
}

void Automation::buildDiscovery(EDHA::Device* device)
{
    const char* chipID = EDUtils::getChipID();
    _discoveryMgr->addSensor(
        device,
        "Barrel water level",
        "waterLevel",
        EDUtils::formatString("water_level_neptunus_%s", chipID)
    )
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.waterLevel }}")
        ->setUnitOfMeasurement("m");

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

    _discoveryMgr->addSwitch(
        device,
        "Filling barrel valve",
        "fillingBarrelValve",
        EDUtils::formatString("filling_barrel_valve_neptunus_%s", EDUtils::getChipID())
    )
        ->setCommandTemplate("{\"fillingBarrelValve\": {{ value }} }")
        ->setCommandTopic(_config.mqttCommandTopic)
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.fillingBarrelValve }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false")
        ->setStateOn("true")
        ->setStateOff("false");

    _discoveryMgr->addSwitch(
        device,
        "Bypass valve",
        "bypassValve",
        EDUtils::formatString("bypass_valve_neptunus_%s", EDUtils::getChipID())
    )
        ->setCommandTemplate("{\"bypassValve\": {{ value }} }")
        ->setCommandTopic(_config.mqttCommandTopic)
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.bypassValve }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false")
        ->setStateOn("true")
        ->setStateOff("false");

    _discoveryMgr->addSwitch(
        device,
        "Pump station",
        "pumpStation",
        EDUtils::formatString("pump_station_neptunus_%s", EDUtils::getChipID())
    )
        ->setCommandTemplate("{\"pumpStation\": {{ value }} }")
        ->setCommandTopic(_config.mqttCommandTopic)
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.pumpStation }}")
        ->setPayloadOn("true")
        ->setPayloadOff("false")
        ->setStateOn("true")
        ->setStateOff("false");

    _discoveryMgr->addSwitch(
        device,
        "Drainage pump",
        "drainagePump",
        EDUtils::formatString("drainage_pump_neptunus_%s", EDUtils::getChipID())
    )
        ->setCommandTemplate("{\"drainagePump\": {{ value }} }")
        ->setCommandTopic(_config.mqttCommandTopic)
        ->setStateTopic(_config.mqttStateTopic)
        ->setValueTemplate("{{ value_json.drainagePump }}")
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
