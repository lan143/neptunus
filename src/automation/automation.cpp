#include <log/log.h>
#include <Utils.h>

#include "config.h"
#include "automation.h"

void Automation::init(EDHA::Device* device, Config config)
{
    _qdy30a = _wirenboard->addQDY30A(config.addressQDY30A);
    _mai6 = _wirenboard->addMAI6(config.addressWBMAI6);

    buildDiscovery(device);
    _constantsLoaded = loadQDY30AConstants();

    inited = true;
}

void Automation::update()
{
    if (!inited) {
        LOGE("update", "automation isn't initialized");
        return;
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

        auto middleLevel = (WATER_MAX_LEVEL - WATER_MIN_LEVEL) / 2 + WATER_MIN_LEVEL;
        auto enableLevel = middleLevel - middleLevel * 0.1;
        auto disableLevel = middleLevel + middleLevel * 0.1;

        if (level <= enableLevel) {
            _relayMgr->getRelay(RELAY_TYPE_DRAINAGE_PUMP)->changeState(true);
        } else if (level >= disableLevel) {
            _relayMgr->getRelay(RELAY_TYPE_DRAINAGE_PUMP)->changeState(false);
        }

        if (level <= WATER_MIN_LEVEL) {
            _relayMgr->getRelay(RELAY_TYPE_PUMP_STATION)->changeState(false);
        } else {
            _relayMgr->getRelay(RELAY_TYPE_PUMP_STATION)->changeState(true);
        }

        if (level >= WATER_MAX_LEVEL) {
            _relayMgr->getRelay(RELAY_TYPE_DRAINAGE_PUMP)->changeState(false);
        } else {
            _relayMgr->getRelay(RELAY_TYPE_DRAINAGE_PUMP)->changeState(true);
        }
    }
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

    float_t convertLevel;

    switch (_dotPosition) {
        case 1:
            convertLevel = (float_t)value.first / 10.0f;
            break;
        case 2:
            convertLevel = (float_t)value.first / 100.0f;
            break;
        case 3:
            convertLevel = (float_t)value.first / 1000.0f;
            break;
        default:
            return std::make_pair(0.0f, false);
    }

    switch (_unitOfMeasurement) {
        case 1:
        case 17:
            convertLevel /= 100.0f;
            break;
        case 2:
            convertLevel /= 1000.0f;
            break;
        default:
            return std::make_pair(0.0f, false);
    }

    return std::make_pair(std::round(convertLevel * 1000.0f) / 1000.0f, true);
}
