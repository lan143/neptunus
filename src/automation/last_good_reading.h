#pragma once

#include <cmath> // float_t
#include <cstdint>
#include <utility>

namespace Neptunus
{
    // Cache of the last successful sensor reading plus its timestamp.
    //
    // The QDY30A poll runs every ~1 s and its consumer uses a 5-minute
    // freshness window, but the base sensor only reports its most recent
    // poll. Recording ONLY successful reads here means a single transient
    // Modbus timeout does not invalidate the level a consumer already saw:
    // the last good value stays fresh until it ages past the window. The age
    // window is still the only degradation path — a genuinely stalled poll
    // (no good value for longer than maxAgeUs) returns invalid and the
    // stale-barrel safe state fires, matching the firmware's documented
    // freshness design
    // (WATER_LEVEL_READING_MAX_AGE_US, 5 min over a 1 s poll).
    //
    // Pure and host-testable: no Arduino/ESP dependencies.
    class LastGoodReading
    {
    public:
        // Called only for successful reads; a failed poll simply does not call
        // this, leaving the previous good value and timestamp untouched.
        void record(float_t value, int64_t nowUs)
        {
            _value = value;
            _recordedUs = nowUs;
            _hasGood = true;
        }

        // Returns the last good value only while it is within maxAgeUs of
        // nowUs. Before any record(), or once the window has elapsed, the
        // result is invalid. The window is inclusive: age == maxAgeUs is still
        // fresh.
        std::pair<float_t, bool> get(int64_t nowUs, int64_t maxAgeUs) const
        {
            if (!_hasGood || maxAgeUs <= 0) {
                return std::make_pair(0.0f, false);
            }

            if ((nowUs - _recordedUs) > maxAgeUs) {
                return std::make_pair(0.0f, false);
            }

            return std::make_pair(_value, true);
        }

    private:
        // Default state is invalid so a never-recorded cache cannot be mistaken
        // for a real reading.
        float_t _value = 0.0f;
        int64_t _recordedUs = 0;
        bool _hasGood = false;
    };
} // namespace Neptunus
