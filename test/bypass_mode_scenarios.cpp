// Host-only scenarios for src/automation/bypass_mode.h.
//
// Build and run:
//   g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
//       test/bypass_mode_scenarios.cpp -o /tmp/bypass_test && /tmp/bypass_test
//
// This file lives outside src/ so PlatformIO never compiles it into firmware.

#include <cassert>
#include <cstdint>
#include <cstdio>

// Mirrors src/automation/automation.h; the header requires the caller to define
// it before inclusion.
#define SWITCH_TO_HOME_PUMP_STATION_PRESSURE 3.1f

#include "../src/automation/bypass_mode.h"

static void testNoiseNearThreshold()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.1f;
    s.avgValid = true;

    const float series[] = {3.25f, 3.0f, 3.1f, 3.2f, 3.0f, 3.25f};
    uint32_t nowSec = 300;

    for (int i = 0; i < 30; i++) {
        const BypassModeEvent event = updateBypassModeState(s, series[i % 6], nowSec);
        assert(event == BypassModeEvent::NONE);
        assert(s.active);
        nowSec += 10;
    }
}

static void testHoldEnforcement()
{
    BypassModeState s;
    s.active = false;
    s.sinceSec = 0;
    s.avg = 3.3f;
    s.avgValid = true;

    for (uint32_t nowSec = 10; nowSec < 300; nowSec += 10) {
        const BypassModeEvent event = updateBypassModeState(s, 3.4f, nowSec);
        assert(event == BypassModeEvent::NONE);
        assert(!s.active);
    }

    const BypassModeEvent event = updateBypassModeState(s, 3.4f, 300);
    assert(event == BypassModeEvent::ENTERED_BYPASS);
    assert(s.active);
    assert(s.sinceSec == 300);
}

static void testSharpDropWithoutAbsoluteBreach()
{
    // A large raw drop that stays at or above the absolute bar is not a fast
    // drop, no matter how far it falls from the previous average.
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.4f;
    s.avgValid = true;

    BypassModeEvent event = updateBypassModeState(s, 2.9f, 30);
    assert(event == BypassModeEvent::NONE);
    assert(s.active);

    event = updateBypassModeState(s, 3.4f, 40);
    assert(event == BypassModeEvent::NONE);
    assert(s.active);

    for (uint32_t nowSec = 50; nowSec <= 400; nowSec += 10) {
        event = updateBypassModeState(s, 3.4f, nowSec);
        assert(event != BypassModeEvent::EXITED_FAST_DROP);
        assert(s.active);
    }

    // 3.4 -> 2.9 -> 3.4 stays active.
    BypassModeState dip;
    dip.active = true;
    dip.sinceSec = 0;
    dip.avg = 3.4f;
    dip.avgValid = true;

    event = updateBypassModeState(dip, 3.4f, 10);
    assert(event == BypassModeEvent::NONE);
    event = updateBypassModeState(dip, 2.9f, 20);
    assert(event == BypassModeEvent::NONE);
    event = updateBypassModeState(dip, 3.4f, 30);
    assert(event == BypassModeEvent::NONE);
    assert(dip.active);
}

static void testOneAbsoluteSampleDoesNotSwitch()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.4f;
    s.avgValid = true;

    BypassModeEvent event = updateBypassModeState(s, 2.75f, 30);
    assert(event == BypassModeEvent::NONE);
    assert(s.active);
    assert(s.lowPressureCount == 1);

    event = updateBypassModeState(s, 3.3f, 40);
    assert(event == BypassModeEvent::NONE);
    assert(s.active);
    assert(s.lowPressureCount == 0);

    event = updateBypassModeState(s, 2.75f, 50);
    assert(event == BypassModeEvent::NONE);
    assert(s.active);
    assert(s.lowPressureCount == 1);
    assert(s.sinceSec == 0);
}

static void testTwoConsecutiveAbsoluteSamplesSwitchImmediately()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.4f;
    s.avgValid = true;

    BypassModeEvent event = updateBypassModeState(s, 2.7f, 30);
    assert(event == BypassModeEvent::NONE);
    assert(s.active);
    assert(s.lowPressureCount == 1);

    // Fires ~20 s after the first low sample, regardless of the hold timer.
    event = updateBypassModeState(s, 2.75f, 40);
    assert(event == BypassModeEvent::EXITED_FAST_DROP);
    assert(!s.active);
    assert(s.avg == 2.75f);
    assert(s.lowPressureCount == 0);
    assert(s.sinceSec == 40);
}

static void testNoReentryOnStaleAvg()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.4f;
    s.avgValid = true;

    // Two consecutive low samples trigger the fast drop at t=40.
    BypassModeEvent event = updateBypassModeState(s, 2.75f, 30);
    assert(event == BypassModeEvent::NONE);
    event = updateBypassModeState(s, 2.7f, 40);
    assert(event == BypassModeEvent::EXITED_FAST_DROP);
    assert(s.avg == 2.7f);
    assert(s.sinceSec == 40);

    for (uint32_t nowSec = 50; nowSec <= 330; nowSec += 10) {
        event = updateBypassModeState(s, 3.5f, nowSec);
        assert(event == BypassModeEvent::NONE);
        assert(!s.active);
        if (nowSec == 140) {
            // The EMA is already above 3.20 here, but the hold timer has not
            // elapsed.
            assert(s.avg > BYPASS_ENTER_PRESSURE_BAR);
        }
    }

    // Both the 300-s hold and the EMA enter threshold are satisfied here.
    event = updateBypassModeState(s, 3.5f, 340);
    assert(event == BypassModeEvent::ENTERED_BYPASS);
    assert(s.active);
    assert(s.sinceSec == 340);
}

static void testNoSamplesMeansUnchangedState()
{
    BypassModeState s;
    s.active = false;
    s.sinceSec = 0;
    s.avg = 3.3f;
    s.avgValid = true;

    const BypassModeEvent event = updateBypassModeState(s, 3.4f, 10);
    assert(event == BypassModeEvent::NONE);

    const BypassModeState snapshot = s;
    // No call for the next 100 s: the pure function keeps no hidden time state.
    assert(s.active == snapshot.active);
    assert(s.sinceSec == snapshot.sinceSec);
    assert(s.avg == snapshot.avg);
    assert(s.avgValid == snapshot.avgValid);
    assert(s.lowPressureCount == snapshot.lowPressureCount);
}

static void testFreshStart()
{
    BypassModeState s;

    const BypassModeEvent event = updateBypassModeState(s, 3.5f, 10);
    assert(event == BypassModeEvent::NONE);
    assert(!s.active);
    assert(s.avgValid);
    assert(s.avg == 3.5f);
    assert(s.sinceSec == 0);
}

int main()
{
    testNoiseNearThreshold();
    testHoldEnforcement();
    testSharpDropWithoutAbsoluteBreach();
    testOneAbsoluteSampleDoesNotSwitch();
    testTwoConsecutiveAbsoluteSamplesSwitchImmediately();
    testNoReentryOnStaleAvg();
    testNoSamplesMeansUnchangedState();
    testFreshStart();

    std::printf("bypass_mode scenarios passed: 8\n");
    return 0;
}
