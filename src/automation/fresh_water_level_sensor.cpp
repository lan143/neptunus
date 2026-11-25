#include "fresh_water_level_sensor.h"

#include <esp_timer.h>

std::pair<float_t, bool> Neptunus::FreshWaterLevelSensor::getValueInternal()
{
    auto value = EDCommon::Sensor::WaterLevel::getValueInternal();
    if (!value.second) {
        // Transient poll failure: keep the last good value so consumers still
        // see a fresh level within the window. A long stall ages out via
        // getFreshReading().
        return value;
    }

    _lastGood.record(value.first, esp_timer_get_time());
    return value;
}

std::pair<float_t, bool> Neptunus::FreshWaterLevelSensor::getFreshReading(int64_t maxAgeUs) const
{
    return _lastGood.get(esp_timer_get_time(), maxAgeUs);
}
