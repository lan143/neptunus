// Host-only scenarios for src/automation/fill_progress.h.
//
// Build and run:
//   g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
//       test/fill_progress_scenarios.cpp -o /tmp/fill_progress_test && \
//       /tmp/fill_progress_test
//
// This file lives outside src/ so PlatformIO never compiles it into firmware.

#include <cassert>
#include <cmath>
#include <cstdint>
#include <cstdio>
#include <limits>

#include "../src/automation/fill_progress.h"

namespace
{
    constexpr int64_t SEC_US = 1000000;
    constexpr uint32_t WINDOW_SEC = 360;
    constexpr float_t DELTA_M = 0.02f;

    bool update(
        Neptunus::FillProgressState& state,
        bool valveOpen,
        bool levelValid,
        float_t level,
        int64_t nowUs)
    {
        return Neptunus::updateFillProgress(state, valveOpen, levelValid, level, DELTA_M, WINDOW_SEC, nowUs);
    }

    void assertNear(float_t actual, float_t expected)
    {
        assert(std::fabs(actual - expected) < 0.000001f);
    }

    void testGraceAtOpenProgressesUntilWindowElapses()
    {
        // Opening starts progress immediately; a flat level stays progressing
        // until the full window has elapsed without a ratchet.
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.70f, 0));
        assertNear(state.baseline, 0.70f);
        assert(state.lastProgressUs == 0);

        assert(update(state, true, true, 0.70f, static_cast<int64_t>(WINDOW_SEC) * SEC_US));
        assert(!update(state, true, true, 0.70f, static_cast<int64_t>(WINDOW_SEC) * SEC_US + 1));
    }

    void testRiseBelowDeltaDoesNotRatchetOrRestartTimer()
    {
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.70f, 0));

        // +1.5 cm is below the 2 cm delta: no ratchet, timer unchanged.
        assert(update(state, true, true, 0.715f, 100 * SEC_US));
        assertNear(state.baseline, 0.70f);
        assert(state.lastProgressUs == 0);

        // Still at the original window boundary, not a restarted one.
        assert(update(state, true, true, 0.715f, static_cast<int64_t>(WINDOW_SEC) * SEC_US));
        assert(!update(state, true, true, 0.715f, static_cast<int64_t>(WINDOW_SEC) * SEC_US + 1));
    }

    void testRiseAtExactlyDeltaRatchets()
    {
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.70f, 0));

        assert(update(state, true, true, 0.72f, 50 * SEC_US));
        assertNear(state.baseline, 0.72f);
        assert(state.lastProgressUs == 50 * SEC_US);

        // The timer restarted at the ratchet: exactly one window later is still
        // progressing, one microsecond more is stalled.
        assert(update(state, true, true, 0.72f, (50 + static_cast<int64_t>(WINDOW_SEC)) * SEC_US));
        assert(!update(state, true, true, 0.72f, (50 + static_cast<int64_t>(WINDOW_SEC)) * SEC_US + 1));
    }

    void testProgressedThenStalledAfterLastProgress()
    {
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.70f, 0));

        // Ratchet once, then hold flat: stalled one window after the ratchet.
        assert(update(state, true, true, 0.72f, 60 * SEC_US));
        assert(update(state, true, true, 0.72f, (60 + static_cast<int64_t>(WINDOW_SEC)) * SEC_US));
        assert(!update(state, true, true, 0.72f, (60 + static_cast<int64_t>(WINDOW_SEC)) * SEC_US + 1));
    }

    void testFillStartingAfterFallProgressesImmediately()
    {
        // The level fell from 1.056 to 0.701 before the fill valve opened. The
        // baseline is captured at the open level, so the first +2 cm rise is
        // progress even though the old pre-fall level was much higher.
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.701f, 0));
        assertNear(state.baseline, 0.701f);

        assert(update(state, true, true, 0.721f, 30 * SEC_US));
        assertNear(state.baseline, 0.721f);
    }

    void testValveCloseResetsAndReopenRebaselines()
    {
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.70f, 0));
        assert(update(state, true, true, 0.72f, 10 * SEC_US));
        assertNear(state.baseline, 0.72f);

        // Closing resets; the old baseline is gone.
        assert(!update(state, false, true, 0.72f, 20 * SEC_US));
        assert(!state.valid);
        assert(!update(state, false, true, 0.72f, 30 * SEC_US));

        // Reopening at the CURRENT lower level re-baselines there and is
        // progressing again.
        assert(update(state, true, true, 0.60f, 40 * SEC_US));
        assert(state.valid);
        assertNear(state.baseline, 0.60f);
        assert(state.lastProgressUs == 40 * SEC_US);
        assert(update(state, true, true, 0.62f, 50 * SEC_US));
        assertNear(state.baseline, 0.62f);
    }

    void testInvalidAndNonFiniteLevelResets()
    {
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.70f, 0));

        // A known-invalid level cannot assert progress and resets the state.
        assert(!update(state, true, false, 0.70f, 10 * SEC_US));
        assert(!state.valid);

        assert(update(state, true, true, 0.70f, 20 * SEC_US));
        assert(!update(state, true, true, std::numeric_limits<float_t>::quiet_NaN(), 30 * SEC_US));
        assert(!state.valid);

        assert(update(state, true, true, 0.70f, 40 * SEC_US));
        assert(!update(state, true, true, std::numeric_limits<float_t>::infinity(), 50 * SEC_US));
        assert(!state.valid);

        // The next open re-baselines normally.
        assert(update(state, true, true, 0.70f, 60 * SEC_US));
        assertNear(state.baseline, 0.70f);
    }

    void testNonPositiveDeltaRejects()
    {
        Neptunus::FillProgressState state;
        assert(!Neptunus::updateFillProgress(state, true, true, 0.70f, 0.0f, WINDOW_SEC, 0));
        assert(!state.valid);

        assert(!Neptunus::updateFillProgress(state, true, true, 0.70f, -0.02f, WINDOW_SEC, 10 * SEC_US));
        assert(!state.valid);

        // A previously valid state is reset by a non-positive delta.
        assert(update(state, true, true, 0.70f, 20 * SEC_US));
        assert(!Neptunus::updateFillProgress(state, true, true, 0.72f, 0.0f, WINDOW_SEC, 30 * SEC_US));
        assert(!state.valid);
    }

    void testWindowBoundaryExactlyWindowSec()
    {
        Neptunus::FillProgressState state;
        assert(update(state, true, true, 0.50f, 0));
        assert(update(state, true, true, 0.50f, static_cast<int64_t>(WINDOW_SEC) * SEC_US));
        assert(!update(state, true, true, 0.50f, static_cast<int64_t>(WINDOW_SEC) * SEC_US + 1));
    }
} // namespace

int main()
{
    testGraceAtOpenProgressesUntilWindowElapses();
    testRiseBelowDeltaDoesNotRatchetOrRestartTimer();
    testRiseAtExactlyDeltaRatchets();
    testProgressedThenStalledAfterLastProgress();
    testFillStartingAfterFallProgressesImmediately();
    testValveCloseResetsAndReopenRebaselines();
    testInvalidAndNonFiniteLevelResets();
    testNonPositiveDeltaRejects();
    testWindowBoundaryExactlyWindowSec();

    std::printf("fill_progress scenarios passed: 9\n");
    return 0;
}
