#include <ExtStrings.h>
#include <Utils.h>
#include <esp_log.h>
#include "defines.h"
#include "meter.h"

void Meter::init(EDHA::Device* device, std::string name, std::string escapeName, std::string field, uint8_t pin, uint32_t cost, std::string stateTopic)
{
    _pin = pin;
    _cost = cost;

    _currentValue = _ringStorage->getCurrentValue();
    _lock = _ringStorage->hasLock();
    buildDiscovery(device, name, escapeName, field, stateTopic);

    if (_pin == 0) {
        _stateMgr->getState().setWaterConsumption(toMeterCube(_currentValue));
    } else if (_pin == 1) {
        _stateMgr->getState().setYardWaterConsumption(toMeterCube(_currentValue));
    }
}

void Meter::update()
{
    if ((_lastCheckTime + 250000) < esp_timer_get_time()) {
        int pinValue = _driver->read(_pin);

        if (pinValue == LOW && !_lock) {
            if (!_ponentialLockUnlock) {
                _ponentialLockUnlock = true;
            } else {
                _ponentialLockUnlock = false;
                _lock = true;
                _currentValue++;

                _ringStorage->writeValue(_currentValue, _lock);

                if (_pin == 0) {
                    _stateMgr->getState().setWaterConsumption(toMeterCube(_currentValue));
                } else if (_pin == 1) {
                    _stateMgr->getState().setYardWaterConsumption(toMeterCube(_currentValue));
                }

                _isFlowOfWaterActive = true;
                _lastFlowOfWaterActiveTime = esp_timer_get_time();
            }
        } else if (pinValue == HIGH && _lock) {
            if (!_ponentialLockUnlock) {
                _ponentialLockUnlock = true;
            } else {
                _ponentialLockUnlock = false;
                _lock = false;
                _ringStorage->writeValue(_currentValue, _lock);
            }
        }

        _lastCheckTime = millis();
    }

    if (_isFlowOfWaterActive && (_lastFlowOfWaterActiveTime + 120000000) < esp_timer_get_time()) {
        _isFlowOfWaterActive = false;
    }
}

void Meter::setInitialValue(float_t value)
{
    _ringStorage->clear();
    _currentValue = fromMeterCube(value);
    _ringStorage->writeValue(_currentValue, _lock);
}

void Meter::buildDiscovery(EDHA::Device* device, std::string name, std::string escapeName, std::string field, std::string stateTopic)
{
    _discoveryMgr->addSensor(
        device,
        name,
        escapeName,
        EDUtils::formatString("%s_sensor_neptunus_%s", escapeName.c_str(), EDUtils::getChipID())
    )
        ->setStateTopic(stateTopic)
        ->setValueTemplate(EDUtils::formatString("{{ value_json.%s }}", field.c_str()))
        ->setUnitOfMeasurement("m³")
        ->setSensorStateClass(EDHA::SENSOR_STATE_CLASS_TOTAL)
        ->setDeviceClass("water");
}

int Meter::fromMeterCube(float_t value) const
{
    return (int)((value * 1000) / _cost);
}

float_t Meter::toMeterCube(int value) const
{
    return (float_t)(value * _cost) / 1000.0f;
}
