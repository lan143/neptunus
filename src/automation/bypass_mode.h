#pragma once

#include <cstdint>

// Bypass mode decision for the home pump station. The caller must define
// SWITCH_TO_HOME_PUMP_STATION_PRESSURE before including this header (see
// src/automation/automation.h).
#ifndef SWITCH_TO_HOME_PUMP_STATION_PRESSURE
#error "SWITCH_TO_HOME_PUMP_STATION_PRESSURE must be defined before including bypass_mode.h"
#endif

// Minimum time a mode decision is held before the opposite transition may fire.
constexpr uint32_t BYPASS_MIN_HOLD_SEC = 300;

// EMA smoothing factor for the supplier pressure.
constexpr float BYPASS_PRESSURE_EMA_ALPHA = 0.1f;

// Hysteresis around the switch pressure: enter above ENTER, exit below EXIT.
constexpr float BYPASS_ENTER_PRESSURE_BAR = SWITCH_TO_HOME_PUMP_STATION_PRESSURE + 0.10f; // 3.20
constexpr float BYPASS_EXIT_PRESSURE_BAR = SWITCH_TO_HOME_PUMP_STATION_PRESSURE - 0.10f;  // 3.00

// Immediate escape from bypass mode on an absolute fast pressure drop. A single
// dip is ignored as noise; two consecutive valid 10-s samples below the bar
// (~20 s) confirm it.
constexpr float BYPASS_FAST_DROP_ABS_BAR = SWITCH_TO_HOME_PUMP_STATION_PRESSURE - 0.30f;   // 2.80
constexpr uint8_t BYPASS_FAST_DROP_CONFIRM_SAMPLES = 2;

// active=true means bypass valve mode (home pump station off).
struct BypassModeState
{
    bool active = false;
    uint32_t sinceSec = 0;
    float avg = 0.0f;
    bool avgValid = false;
    // Consecutive valid samples below BYPASS_FAST_DROP_ABS_BAR, counted in
    // both modes; reset when the streak breaks or a fast drop triggers.
    uint8_t lowPressureCount = 0;
};

enum class BypassModeEvent : uint8_t
{
    NONE,
    ENTERED_BYPASS,
    EXITED_LOW_AVG,
    EXITED_FAST_DROP,
};

// Pure state-machine step. Call at most once per 10-second pressure sample; the
// hold time and EMA are tuned for that cadence. Bypass exit on a fast drop is
// absolute-only (below BYPASS_FAST_DROP_ABS_BAR) and must be confirmed by
// BYPASS_FAST_DROP_CONFIRM_SAMPLES consecutive valid samples. No Arduino or
// logging symbols.
inline BypassModeEvent updateBypassModeState(BypassModeState& s, float p, uint32_t nowSec)
{
    if (s.avgValid) {
        s.avg += BYPASS_PRESSURE_EMA_ALPHA * (p - s.avg);
    } else {
        s.avg = p;
        s.avgValid = true;
    }

    if (p < BYPASS_FAST_DROP_ABS_BAR) {
        if (s.lowPressureCount < 255) {
            s.lowPressureCount++;
        }
    } else {
        s.lowPressureCount = 0;
    }

    const uint32_t held = nowSec - s.sinceSec;

    if (s.active) {
        const bool fastDrop = (s.lowPressureCount >= BYPASS_FAST_DROP_CONFIRM_SAMPLES);
        if (fastDrop) {
            s.avg = p;
            s.lowPressureCount = 0;
            s.active = false;
            s.sinceSec = nowSec;
            return BypassModeEvent::EXITED_FAST_DROP;
        }

        if (held >= BYPASS_MIN_HOLD_SEC && s.avg < BYPASS_EXIT_PRESSURE_BAR) {
            s.active = false;
            s.sinceSec = nowSec;
            return BypassModeEvent::EXITED_LOW_AVG;
        }
    } else {
        if (held >= BYPASS_MIN_HOLD_SEC && s.avg > BYPASS_ENTER_PRESSURE_BAR) {
            s.active = true;
            s.sinceSec = nowSec;
            return BypassModeEvent::ENTERED_BYPASS;
        }
    }

    return BypassModeEvent::NONE;
}
