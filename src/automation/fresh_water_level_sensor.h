#pragma once

#include <sensor/water_level.h>

#include "last_good_reading.h"

namespace Neptunus
{
    // QDY30A water-level sensor that caches the last GOOD reading so consumers
    // can apply a freshness window without a single transient Modbus timeout
    // invalidating the level.
    //
    // Failed polls preserve the last good value, so a Modbus hiccup does not
    // trip the stale-barrel safe state (home pump off / fill valve closed) for
    // a tick or two. The age window is still the only degradation path: a
    // genuinely stalled poll (> WATER_LEVEL_READING_MAX_AGE_US without a good
    // value) returns invalid and C2 fires as designed.
    //
    // This INTENTIONALLY diverges from ValidatedWBMAI6Pressure, whose
    // fail-fast-on-invalid-sample semantics are load-bearing for the
    // bad-pressure clock: a frozen pressure reading would mask a burst.
    // Derives from the ed-common sensor to reuse its init/MQTT/discovery
    // plumbing unchanged; only the read path is wrapped.
    class FreshWaterLevelSensor : public EDCommon::Sensor::WaterLevel
    {
    public:
        FreshWaterLevelSensor(EDWB::QDY30A* qdy30a)
            : EDCommon::Sensor::WaterLevel(qdy30a)
        {
        }

        // Last good reading only if it is no older than maxAgeUs. Used by
        // automation consumers so a stalled poll degrades to invalid instead
        // of freezing a stale level.
        std::pair<float_t, bool> getFreshReading(int64_t maxAgeUs) const;

    protected:
        std::pair<float_t, bool> getValueInternal() override;

    private:
        // Written on the loop task by getValueInternal(); read by the same task
        // and by the async web task. Like the base sensor's unsynchronized
        // cached value, this is deliberately unsynchronized by design.
        LastGoodReading _lastGood;
    };
} // namespace Neptunus
