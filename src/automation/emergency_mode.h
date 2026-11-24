#pragma once

#include <cmath>
#include <cstdint>

// Emergency-mode decision for the water station. The caller must define
// EMERGENCY_PRESSURE before including this header (see
// src/automation/automation.h).
#ifndef EMERGENCY_PRESSURE
#error "EMERGENCY_PRESSURE must be defined before including emergency_mode.h"
#endif

// Bad-pressure clock, advanced once per 10-s pressure sample. The count is the
// number of consecutive-ish 10-s samples where supplier pressure was below
// EMERGENCY_PRESSURE or invalid. Engaging is strictly ABOVE the threshold
// (~2+ min held below 1 bar); the max caps the increment.
constexpr uint32_t EMERGENCY_BAD_PRESSURE_COUNT_MAX = 24;
constexpr uint32_t EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD = 12;

// Advances the bad-pressure clock by one 10-s sample. A supplier draw (bypass
// open with house flow) explains a pressure dip, so the clock is held: neither
// increment nor decay happens. Otherwise an invalid or below-threshold reading
// increments up to the cap, a reading strictly above the threshold decays by
// one (floor 0), and exact equality is a no-op. Never gated by yard flow: the
// yard branch does not draw through the supplier pressure sensor.
inline void updateEmergencyBadPressureCount(
    uint32_t& badCount,
    bool pressureValid,
    float_t pressureValue,
    bool supplierDrawExcuse)
{
    if (supplierDrawExcuse) {
        return;
    }

    if (!pressureValid || pressureValue < EMERGENCY_PRESSURE) {
        if (badCount < EMERGENCY_BAD_PRESSURE_COUNT_MAX) {
            badCount++;
        }
    } else if (pressureValue > EMERGENCY_PRESSURE) {
        if (badCount > 0) {
            badCount--;
        }
    }
}

// Caller precomputes the level booleans: this module has no access to the
// sensors or the trend windows. bypassValveOpen must be false when the relay
// state is invalid (an unknown valve is treated as closed).
struct EmergencyModeInput
{
    uint32_t badPressureCount = 0;
    bool bypassValveOpen = false;
    bool homeFlowActive = false;
    bool barrelValveOpen = false;
    bool barrelLevelRising = false;
    bool barrelLevelNearMax = false;
    bool pitValveOpen = false;
    bool pitLevelRising = false;
    bool pitLevelNearMax = false;
};

struct EmergencyModeResult
{
    bool active = false;
    bool fillStalled = false;
    bool fillProgressing = false;
    bool bypassDrawExcuse = false;
};

// Pure emergency-mode decision. Plumbing rationale:
// - A fill whose storage level rises is real filling and explains a pressure
//   dip, so it blocks emergency. A fill whose level cannot move because it is
//   near maximum cannot assert progress either; flatness there proves nothing.
// - An open fill valve with a flat level is a stalled fill on a dead supply:
//   water is not coming through, so the fill does not explain the bad line.
// - The bypass branch feeds the home pump line directly, so bypass open plus
//   house meter flow is a real supplier draw and explains the dip. House flow
//   behind a CLOSED bypass never touches the supplier line (it comes from the
//   drinking tank), so it must not excuse anything.
// - With no fill valve open and no bypass draw, a bad line has no explanation.
inline EmergencyModeResult evaluateEmergencyMode(const EmergencyModeInput& in)
{
    EmergencyModeResult result;

    const bool barrelProgressing = in.barrelValveOpen && in.barrelLevelRising && !in.barrelLevelNearMax;
    const bool pitProgressing = in.pitValveOpen && in.pitLevelRising && !in.pitLevelNearMax;
    result.fillProgressing = barrelProgressing || pitProgressing;

    const bool barrelStalled = in.barrelValveOpen && !in.barrelLevelRising && !in.barrelLevelNearMax;
    const bool pitStalled = in.pitValveOpen && !in.pitLevelRising && !in.pitLevelNearMax;
    result.fillStalled = barrelStalled || pitStalled;

    // Only a bypass draw reaches the supplier pressure path; house consumption
    // behind the closed bypass comes from the drinking tank.
    result.bypassDrawExcuse = in.bypassValveOpen && in.homeFlowActive;

    // The clock must have held bad pressure for more than the threshold. Any
    // open fill that is progressing is excluded from being stalled; if no fill
    // is open at all, only a bypass draw can explain the bad line.
    if (in.badPressureCount <= EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD) {
        return result;
    }

    result.active = result.fillStalled
        || (!in.barrelValveOpen && !in.pitValveOpen && !result.bypassDrawExcuse);

    return result;
}
