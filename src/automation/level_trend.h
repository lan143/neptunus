#pragma once

#include <cmath>
#include <cstdint>

// Fixed-window trend detector for a fillable storage level.
//
// Callers sample at a fixed cadence (the automation 10 s tick) and then ask
// whether the level rose by at least deltaThreshold over the samples still
// retained in the window. A fill whose storage level rises is real filling; a
// valve left open against a flat or falling level is a stalled fill.
//
// No Arduino/ESP dependencies: host-testable in isolation.
namespace Neptunus
{
    class LevelTrendTracker
    {
    public:
        // ~10.6 min of history at the 10 s sampling cadence.
        static constexpr uint16_t CAPACITY = 64;

        // Appends one sample. Non-finite values (NaN/inf) are dropped so a
        // misbehaving sensor never poisons the trend window.
        void record(int64_t timeUs, float_t value)
        {
            if (!std::isfinite(value)) {
                return;
            }

            _samples[_head].timeUs = timeUs;
            _samples[_head].value = value;
            _head = static_cast<uint16_t>((_head + 1) % CAPACITY);
            if (_count < CAPACITY) {
                _count++;
            }
        }

        // True when the newest sample is fresh enough and has risen by at least
        // deltaThreshold above the oldest sample still retained (inclusive at
        // the boundary). Compares only the retained window, so a pre-fill
        // baseline eventually ages out on a long fill.
        bool isRising(float_t deltaThreshold, int64_t maxAgeUs, int64_t nowUs) const
        {
            if (_count == 0) {
                return false;
            }

            const Sample& newest = _samples[(_head + CAPACITY - 1) % CAPACITY];
            if ((nowUs - newest.timeUs) > maxAgeUs) {
                return false;
            }

            // Before the ring wraps the oldest sample is index 0; once full,
            // _head is the next write slot and therefore the oldest sample.
            const uint16_t oldestIndex = (_count < CAPACITY) ? 0 : _head;
            const Sample& oldest = _samples[oldestIndex];

            return newest.value >= oldest.value + deltaThreshold;
        }

    private:
        struct Sample
        {
            int64_t timeUs = 0;
            float_t value = 0.0f;
        };

        Sample _samples[CAPACITY];
        uint16_t _head = 0;
        uint16_t _count = 0;
    };
} // namespace Neptunus
