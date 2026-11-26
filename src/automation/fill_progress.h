#pragma once

#include <cmath>
#include <cstdint>

// Per-fill progress detector with a ratcheting baseline.
//
// Owner's rule (Russian): "идет набор = уровень вырос от базы на delta за
// последние windowSec; база подтягивается при каждом росте; закрытый клапан
// сбрасывает".
//
// When a fill valve opens, the current level becomes the baseline and progress
// starts immediately. Every time the level reaches baseline+delta the baseline
// ratchets up to the new level and the progress timer restarts. A fill that
// never moves is stalled windowSec after opening; a fill that stalls mid-rise is
// stalled windowSec after its last progress. Because the baseline is captured at
// valve-open, a fill that starts right after a level fall is progressing from
// the start (unlike a window-vs-oldest check, which still sees the higher
// pre-fall level). An unknown level cannot assert progress.
//
// No Arduino/ESP dependencies: host-testable in isolation.
namespace Neptunus
{
    struct FillProgressState
    {
        bool valid = false;
        float_t baseline = 0.0f;
        int64_t lastProgressUs = 0;
    };

    // Advances one fill's progress state and returns whether it is progressing.
    // A closed valve, an unknown/non-finite level, or a non-positive delta
    // resets the state (the next open re-baselines at the current level).
    inline bool updateFillProgress(
        FillProgressState& state,
        bool valveOpen,
        bool levelValid,
        float_t level,
        float_t delta,
        uint32_t windowSec,
        int64_t nowUs)
    {
        if (!valveOpen || !levelValid || !std::isfinite(level) || delta <= 0) {
            state.valid = false;
            return false;
        }

        if (!state.valid) {
            // Valve just opened: baseline at the current level and treat the
            // fill as progressing immediately (grace before the first ratchet).
            state.valid = true;
            state.baseline = level;
            state.lastProgressUs = nowUs;
            return true;
        }

        if (level >= state.baseline + delta) {
            // Ratchet the baseline up to the current level and restart the
            // progress timer; jitter below delta never reaches this branch.
            state.baseline = level;
            state.lastProgressUs = nowUs;
        }

        return (nowUs - state.lastProgressUs) <= static_cast<int64_t>(windowSec) * 1000000;
    }
} // namespace Neptunus
