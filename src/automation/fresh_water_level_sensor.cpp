#include "fresh_water_level_sensor.h"

std::pair<float_t, bool> Neptunus::FreshWaterLevelSensor::getValueInternal()
{
    auto value = EDCommon::Sensor::WaterLevel::getValueInternal();
    if (!value.second) {
        recordReading(0.0f, false);
        return value;
    }

    recordReading(value.first, true);
    return value;
}

std::pair<float_t, bool> Neptunus::FreshWaterLevelSensor::getFreshReading(int64_t maxAgeUs) const
{
    if (!_lastReading.second || maxAgeUs <= 0) {
        return std::make_pair(0.0f, false);
    }

    if ((esp_timer_get_time() - _lastReadingTimeUs) > maxAgeUs) {
        return std::make_pair(0.0f, false);
    }

    return _lastReading;
}

void Neptunus::FreshWaterLevelSensor::recordReading(float_t value, bool valid)
{
    _lastReading = std::make_pair(value, valid);
    _lastReadingTimeUs = esp_timer_get_time();
}
