#include <log/log.h>

#include "wb_mai6_pressure_validation.h"
#include "wb_mai6_pressure_sensor.h"

std::pair<float_t, bool> Neptunus::ValidatedWBMAI6Pressure::getValueInternal()
{
    auto value = _device->getCalculatedValueN(_channel);
    if (!value.second) {
        recordReading(0.0f, false);
        return std::make_pair(0.0f, false);
    }

    float_t physicalValue = 0.0f;
    if (!Neptunus::validateWBMAI6Pressure(
            value.first,
            _minCalculatedValue,
            _maxCalculatedValue,
            _maxPhysicalValue,
            &physicalValue)) {
        LOGE(
            "WBMAI6Pressure",
            "WB-MAI6 channel %u invalid raw value 0x%04X",
            static_cast<unsigned>(_channel),
            static_cast<unsigned>(value.first)
        );
        recordReading(0.0f, false);
        return std::make_pair(0.0f, false);
    }

    recordReading(physicalValue, true);
    return std::make_pair(physicalValue, true);
}

std::pair<float_t, bool> Neptunus::ValidatedWBMAI6Pressure::getFreshReading(int64_t maxAgeUs) const
{
    if (!_lastReading.second || maxAgeUs <= 0) {
        return std::make_pair(0.0f, false);
    }

    if ((esp_timer_get_time() - _lastReadingTimeUs) > maxAgeUs) {
        return std::make_pair(0.0f, false);
    }

    return _lastReading;
}

void Neptunus::ValidatedWBMAI6Pressure::recordReading(float_t value, bool valid)
{
    _lastReading = std::make_pair(value, valid);
    _lastReadingTimeUs = esp_timer_get_time();
}
