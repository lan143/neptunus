#pragma once

#include <sensor/water_level.h>

namespace Neptunus
{
    // QDY30A water-level sensor that exposes a last-poll timestamp so consumers
    // can refuse stale readings. The base ed-common Sensor only keeps the last
    // GOOD value with .second=true forever, so a stalled Modbus poll would
    // otherwise freeze the barrel level and defeat every level-based safety
    // rule. Derives from the ed-common sensor to reuse its init/MQTT/
    // discovery plumbing unchanged; only the read path is wrapped.
    //
    // Mirrors ValidatedWBMAI6Pressure's freshness pattern.
    class FreshWaterLevelSensor : public EDCommon::Sensor::WaterLevel
    {
    public:
        FreshWaterLevelSensor(EDWB::QDY30A* qdy30a)
            : EDCommon::Sensor::WaterLevel(qdy30a)
        {
        }

        // Last reading only if it is valid and no older than maxAgeUs. Used by
        // automation consumers so a stalled poll degrades to invalid instead of
        // freezing a stale level.
        std::pair<float_t, bool> getFreshReading(int64_t maxAgeUs) const;

    protected:
        std::pair<float_t, bool> getValueInternal() override;

    private:
        void recordReading(float_t value, bool valid);

    private:
        // Written on the loop task by getValueInternal(); read by the same task
        // and by the async web task. The base sensor already exposes its
        // unsynchronized cached value the same way.
        std::pair<float_t, bool> _lastReading = {0.0f, false};
        int64_t _lastReadingTimeUs = 0;
    };
} // namespace Neptunus
