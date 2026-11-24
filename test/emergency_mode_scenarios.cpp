// Host-only scenarios for src/automation/emergency_mode.h.
//
// Build and run:
//   g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
//       test/emergency_mode_scenarios.cpp -o /tmp/emergency_mode_test && \
//       /tmp/emergency_mode_test
//
// This file lives outside src/ so PlatformIO never compiles it into firmware.

#include <cassert>
#include <cstdint>
#include <cstdio>

// Mirrors src/automation/automation.h; the header requires the caller to define
// it before inclusion.
#define EMERGENCY_PRESSURE 1.0f

#include "../src/automation/emergency_mode.h"

static void testCountIncrementsOnInvalidAndBelowThreshold()
{
    uint32_t badCount = 0;

    updateEmergencyBadPressureCount(badCount, false, 0.0f, false);
    assert(badCount == 1);

    updateEmergencyBadPressureCount(badCount, true, 0.5f, false);
    assert(badCount == 2);

    // A valid reading strictly above the threshold decays by one.
    updateEmergencyBadPressureCount(badCount, true, 1.5f, false);
    assert(badCount == 1);

    updateEmergencyBadPressureCount(badCount, true, 2.0f, false);
    assert(badCount == 0);

    // Decay floors at zero.
    updateEmergencyBadPressureCount(badCount, true, 2.0f, false);
    assert(badCount == 0);
}

static void testCountExactEqualityIsNoOp()
{
    uint32_t badCount = 7;

    updateEmergencyBadPressureCount(badCount, true, EMERGENCY_PRESSURE, false);
    assert(badCount == 7);
}

static void testCountCapStopsIncrement()
{
    uint32_t badCount = EMERGENCY_BAD_PRESSURE_COUNT_MAX - 1;

    updateEmergencyBadPressureCount(badCount, true, 0.2f, false);
    assert(badCount == EMERGENCY_BAD_PRESSURE_COUNT_MAX);

    // Invalid pressure at the cap must not overflow.
    updateEmergencyBadPressureCount(badCount, false, 0.0f, false);
    assert(badCount == EMERGENCY_BAD_PRESSURE_COUNT_MAX);
}

static void testExcuseFreezesIncrementAndDecay()
{
    uint32_t badCount = 5;

    updateEmergencyBadPressureCount(badCount, false, 0.0f, true);
    assert(badCount == 5);

    updateEmergencyBadPressureCount(badCount, true, 0.0f, true);
    assert(badCount == 5);

    updateEmergencyBadPressureCount(badCount, true, 2.0f, true);
    assert(badCount == 5);
}

static void testEngageBoundary()
{
    EmergencyModeInput in;
    in.bypassValveOpen = false;
    in.homeFlowActive = false;

    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD;
    EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(!result.active);

    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    result = evaluateEmergencyMode(in);
    assert(result.active);
    assert(!result.fillStalled);
    assert(!result.fillProgressing);
    assert(!result.bypassDrawExcuse);
}

static void testNoFillNoExcuseEngages()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(result.active);
}

static void testBypassOpenWithHouseFlowIsExcused()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.bypassValveOpen = true;
    in.homeFlowActive = true;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(result.bypassDrawExcuse);
    assert(!result.active);
}

static void testBypassOpenWithoutHouseFlowEngages()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.bypassValveOpen = true;
    in.homeFlowActive = false;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(!result.bypassDrawExcuse);
    assert(result.active);
}

static void testBypassClosedWithHouseFlowEngages()
{
    // House consumption behind a CLOSED bypass comes from the drinking tank and
    // never touches the supplier pressure sensor, so it explains nothing.
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.bypassValveOpen = false;
    in.homeFlowActive = true;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(!result.bypassDrawExcuse);
    assert(result.active);
}

static void testInvalidBypassStateTreatedAsClosedByCaller()
{
    // Caller contract: an invalid relay state is passed as bypassValveOpen=false.
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.bypassValveOpen = false;
    in.homeFlowActive = true;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(!result.bypassDrawExcuse);
    assert(result.active);
}

static void testFillProgressingIsInactive()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.barrelValveOpen = true;
    in.barrelLevelRising = true;
    in.barrelLevelNearMax = false;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(result.fillProgressing);
    assert(!result.fillStalled);
    assert(!result.active);
}

static void testFillStalledEngages()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.barrelValveOpen = true;
    in.barrelLevelRising = false;
    in.barrelLevelNearMax = false;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(result.fillStalled);
    assert(!result.fillProgressing);
    assert(result.active);
}

static void testFillStalledNearMaxIsInactive()
{
    // At the physical maximum the level cannot move, so a flat trend proves
    // nothing and must not be read as a stalled fill.
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.barrelValveOpen = true;
    in.barrelLevelRising = false;
    in.barrelLevelNearMax = true;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(!result.fillStalled);
    assert(!result.fillProgressing);
    assert(!result.active);
}

static void testPitStalledWithBarrelClosedEngages()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.barrelValveOpen = false;
    in.pitValveOpen = true;
    in.pitLevelRising = false;
    in.pitLevelNearMax = false;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(result.fillStalled);
    assert(result.active);
}

static void testStalledWinsWhenBothFillsAreStalled()
{
    EmergencyModeInput in;
    in.badPressureCount = EMERGENCY_BAD_PRESSURE_COUNT_THRESHOLD + 1;
    in.barrelValveOpen = true;
    in.barrelLevelRising = false;
    in.barrelLevelNearMax = false;
    in.pitValveOpen = true;
    in.pitLevelRising = false;
    in.pitLevelNearMax = false;

    const EmergencyModeResult result = evaluateEmergencyMode(in);
    assert(result.fillStalled);
    assert(result.active);
}

int main()
{
    testCountIncrementsOnInvalidAndBelowThreshold();
    testCountExactEqualityIsNoOp();
    testCountCapStopsIncrement();
    testExcuseFreezesIncrementAndDecay();
    testEngageBoundary();
    testNoFillNoExcuseEngages();
    testBypassOpenWithHouseFlowIsExcused();
    testBypassOpenWithoutHouseFlowEngages();
    testBypassClosedWithHouseFlowEngages();
    testInvalidBypassStateTreatedAsClosedByCaller();
    testFillProgressingIsInactive();
    testFillStalledEngages();
    testFillStalledNearMaxIsInactive();
    testPitStalledWithBarrelClosedEngages();
    testStalledWinsWhenBothFillsAreStalled();

    std::printf("emergency_mode scenarios passed: 15\n");
    return 0;
}
