// Host-only scenarios for src/automation/level_trend.h.
//
// Build and run:
//   g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
//       test/level_trend_scenarios.cpp -o /tmp/level_trend_test && /tmp/level_trend_test
//
// This file lives outside src/ so PlatformIO never compiles it into firmware.

#include <cassert>
#include <cmath>
#include <cstdint>
#include <cstdio>
#include <limits>

#include "../src/automation/level_trend.h"

namespace
{
    constexpr int64_t SAMPLE_PERIOD_US = 10000000; // 10 s
    constexpr int64_t MAX_AGE_US = 30000000;       // 30 s (3 samples)

    void testEmptyTrackerIsNotRising()
    {
        Neptunus::LevelTrendTracker tracker;
        assert(!tracker.isRising(0.01f, MAX_AGE_US, 0));
    }

    void testAscendingAboveThresholdIsRising()
    {
        Neptunus::LevelTrendTracker tracker;
        tracker.record(0, 0.40f);
        tracker.record(SAMPLE_PERIOD_US, 0.42f);
        assert(tracker.isRising(0.01f, MAX_AGE_US, SAMPLE_PERIOD_US));
    }

    void testAscendingBelowThresholdIsNotRising()
    {
        Neptunus::LevelTrendTracker tracker;
        tracker.record(0, 0.40f);
        tracker.record(SAMPLE_PERIOD_US, 0.405f);
        assert(!tracker.isRising(0.01f, MAX_AGE_US, SAMPLE_PERIOD_US));
    }

    void testExactlyAtThresholdIsRising()
    {
        Neptunus::LevelTrendTracker tracker;
        tracker.record(0, 0.40f);
        tracker.record(SAMPLE_PERIOD_US, 0.41f);
        assert(tracker.isRising(0.01f, MAX_AGE_US, SAMPLE_PERIOD_US));
    }

    void testWraparoundUsesOldestRetainedSample()
    {
        // 84 samples, +0.01 each: full-history rise is 0.83, but only the last
        // 64 samples are retained (rise 0.63). A 0.70 threshold must reject the
        // window to prove sample 0 is not used.
        Neptunus::LevelTrendTracker tracker;
        int64_t now = 0;
        float_t value = 0.0f;
        for (uint16_t i = 0; i < Neptunus::LevelTrendTracker::CAPACITY + 20; i++) {
            tracker.record(now, value);
            now += SAMPLE_PERIOD_US;
            value += 0.01f;
        }
        const int64_t newestTime = now - SAMPLE_PERIOD_US;
        assert(!tracker.isRising(0.70f, MAX_AGE_US, newestTime));

        // One big rise on top of the retained window crosses the threshold.
        tracker.record(now, value + 0.5f);
        assert(tracker.isRising(0.70f, MAX_AGE_US, now));
    }

    void testStaleNewestSampleIsNotRising()
    {
        Neptunus::LevelTrendTracker tracker;
        tracker.record(0, 0.40f);
        tracker.record(SAMPLE_PERIOD_US, 0.50f);
        // Newest sample is 31 s old, one second past the 30 s age limit.
        assert(!tracker.isRising(0.01f, MAX_AGE_US, SAMPLE_PERIOD_US + MAX_AGE_US + 1000000));
        // Exactly at the age limit is still fresh.
        assert(tracker.isRising(0.01f, MAX_AGE_US, SAMPLE_PERIOD_US + MAX_AGE_US));
    }

    void testNonFiniteSamplesAreSkipped()
    {
        Neptunus::LevelTrendTracker tracker;
        tracker.record(0, 0.40f);
        tracker.record(SAMPLE_PERIOD_US, std::numeric_limits<float_t>::quiet_NaN());
        tracker.record(2 * SAMPLE_PERIOD_US, std::numeric_limits<float_t>::infinity());
        tracker.record(3 * SAMPLE_PERIOD_US, 0.45f);
        // Only the two valid samples participate; the trend is still rising and
        // the NaN did not become the "newest" sample.
        assert(tracker.isRising(0.01f, MAX_AGE_US, 3 * SAMPLE_PERIOD_US));
    }

    void testFlatSeriesWithNoiseIsNotRising()
    {
        Neptunus::LevelTrendTracker tracker;
        const float series[] = {0.40f, 0.402f, 0.398f, 0.401f, 0.399f, 0.403f, 0.397f};
        int64_t now = 0;
        for (float_t v : series) {
            tracker.record(now, v);
            now += SAMPLE_PERIOD_US;
        }
        assert(!tracker.isRising(0.01f, MAX_AGE_US, now - SAMPLE_PERIOD_US));
    }

    void testFallingSeriesIsNotRising()
    {
        Neptunus::LevelTrendTracker tracker;
        tracker.record(0, 0.50f);
        tracker.record(SAMPLE_PERIOD_US, 0.45f);
        assert(!tracker.isRising(0.01f, MAX_AGE_US, SAMPLE_PERIOD_US));
    }

    void testExactlyAtCapacityKeepsOldest()
    {
        Neptunus::LevelTrendTracker tracker;
        int64_t now = 0;
        for (uint16_t i = 0; i < Neptunus::LevelTrendTracker::CAPACITY; i++) {
            tracker.record(now, static_cast<float_t>(i) * 0.01f);
            now += SAMPLE_PERIOD_US;
        }
        // 63 steps of 0.01 = 0.63 from the first sample.
        const int64_t newestTime = now - SAMPLE_PERIOD_US;
        assert(tracker.isRising(0.63f, MAX_AGE_US, newestTime));
        assert(!tracker.isRising(0.64f, MAX_AGE_US, newestTime));
    }
} // namespace

int main()
{
    testEmptyTrackerIsNotRising();
    testAscendingAboveThresholdIsRising();
    testAscendingBelowThresholdIsNotRising();
    testExactlyAtThresholdIsRising();
    testWraparoundUsesOldestRetainedSample();
    testStaleNewestSampleIsNotRising();
    testNonFiniteSamplesAreSkipped();
    testFlatSeriesWithNoiseIsNotRising();
    testFallingSeriesIsNotRising();
    testExactlyAtCapacityKeepsOldest();

    std::printf("level_trend scenarios passed: 10\n");
    return 0;
}
