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

static void testFastDropByDelta()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.4f;
    s.avgValid = true;

    BypassModeEvent event = updateBypassModeState(s, 2.9f, 30);
    assert(event == BypassModeEvent::EXITED_FAST_DROP);
    assert(!s.active);
    assert(s.avg == 2.9f);
    assert(s.sinceSec == 30);

    // 3.5 bar raw samples: no re-entry until both the 300-s hold elapses and
    // the EMA is above the enter threshold.
    for (uint32_t nowSec = 40; nowSec <= 320; nowSec += 10) {
        event = updateBypassModeState(s, 3.5f, nowSec);
        assert(event == BypassModeEvent::NONE);
        assert(!s.active);
    }

    event = updateBypassModeState(s, 3.5f, 330);
    assert(event == BypassModeEvent::ENTERED_BYPASS);
    assert(s.active);
    assert(s.sinceSec == 330);
}

static void testFastDropByAbsoluteBound()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    // prevAvg - 0.4 = 2.6, so the delta rule does not fire; the absolute
    // 2.80 bar bound still does.
    s.avg = 3.0f;
    s.avgValid = true;

    const BypassModeEvent event = updateBypassModeState(s, 2.75f, 30);
    assert(event == BypassModeEvent::EXITED_FAST_DROP);
    assert(!s.active);
    assert(s.avg == 2.75f);
    assert(s.sinceSec == 30);
}

static void testNoReentryOnStaleAvg()
{
    BypassModeState s;
    s.active = true;
    s.sinceSec = 0;
    s.avg = 3.4f;
    s.avgValid = true;

    BypassModeEvent event = updateBypassModeState(s, 2.9f, 30);
    assert(event == BypassModeEvent::EXITED_FAST_DROP);
    assert(s.avg == 2.9f);

    for (uint32_t nowSec = 40; nowSec <= 130; nowSec += 10) {
        event = updateBypassModeState(s, 3.5f, nowSec);
        assert(event == BypassModeEvent::NONE);
        assert(!s.active);
    }

    // The EMA is already above 3.20 here, but the hold timer has not elapsed.
    event = updateBypassModeState(s, 3.5f, 140);
    assert(event == BypassModeEvent::NONE);
    assert(!s.active);
    assert(s.avg > BYPASS_ENTER_PRESSURE_BAR);

    for (uint32_t nowSec = 150; nowSec <= 320; nowSec += 10) {
        event = updateBypassModeState(s, 3.5f, nowSec);
        assert(event == BypassModeEvent::NONE);
        assert(!s.active);
    }

    event = updateBypassModeState(s, 3.5f, 330);
    assert(event == BypassModeEvent::ENTERED_BYPASS);
    assert(s.active);
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
    testFastDropByDelta();
    testFastDropByAbsoluteBound();
    testNoReentryOnStaleAvg();
    testNoSamplesMeansUnchangedState();
    testFreshStart();

    std::printf("bypass_mode scenarios passed: 7\n");
    return 0;
}
