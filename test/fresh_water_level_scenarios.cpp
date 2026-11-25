// Host-only scenarios for src/automation/last_good_reading.h.
//
// Build and run:
//   g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
//       test/fresh_water_level_scenarios.cpp -o /tmp/fresh_water_level_test \
//       && /tmp/fresh_water_level_test
//
// This file lives outside src/ so PlatformIO never compiles it into firmware.
// It exercises LastGoodReading directly; the FreshWaterLevelSensor wrapper is
// Arduino-dependent and is not included here.

#include <cassert>
#include <cstdint>
#include <cstdio>

#include "../src/automation/last_good_reading.h"

// Mirrors WATER_LEVEL_READING_MAX_AGE_US: a 5-minute window over a 1 s poll.
static constexpr int64_t kMaxAgeUs = 300000000;
// One poll period.
static constexpr int64_t kPollUs = 1000000;

static void testInvalidBeforeFirstRecord()
{
    Neptunus::LastGoodReading reading;
    auto current = reading.get(0, kMaxAgeUs);
    assert(!current.second);
}

static void testValidImmediatelyAfterRecord()
{
    Neptunus::LastGoodReading reading;
    reading.record(0.75f, 0);

    auto current = reading.get(0, kMaxAgeUs);
    assert(current.second);
    assert(current.first == 0.75f);
}

static void testTransientFailureKeepsValueWithinWindow()
{
    // Failed polls never call record(); simulate three of them by advancing
    // the clock without recording and confirm the level stays fresh.
    Neptunus::LastGoodReading reading;
    reading.record(0.5f, 0);

    auto current = reading.get(3 * kPollUs, kMaxAgeUs);
    assert(current.second);
    assert(current.first == 0.5f);
}

static void testInvalidAfterWindowElapses()
{
    Neptunus::LastGoodReading reading;
    reading.record(0.5f, 0);

    auto current = reading.get(kMaxAgeUs + 1, kMaxAgeUs);
    assert(!current.second);
}

static void testNonPositiveWindowIsInvalid()
{
    Neptunus::LastGoodReading reading;
    reading.record(0.5f, 0);

    auto current = reading.get(0, 0);
    assert(!current.second);

    current = reading.get(0, -1);
    assert(!current.second);
}

static void testRecordUpdatesValueAndResetsAge()
{
    Neptunus::LastGoodReading reading;
    reading.record(0.5f, 0);
    reading.record(0.8f, kMaxAgeUs + 5 * kPollUs);

    // The first record's age exceeds the window, but the second record
    // resets the clock: the new value is visible and measured from the second
    // record's timestamp.
    auto current = reading.get(kMaxAgeUs + 40 * kPollUs, kMaxAgeUs);
    assert(current.second);
    assert(current.first == 0.8f);

    // And it ages out from the reset timestamp too.
    current = reading.get(kMaxAgeUs + 5 * kPollUs + kMaxAgeUs + 1, kMaxAgeUs);
    assert(!current.second);
}

static void testExactBoundaryIsStillValid()
{
    // The window is inclusive: age == maxAgeUs is still fresh, matching the
    // ">" comparison that the previous implementation used.
    Neptunus::LastGoodReading reading;
    reading.record(0.5f, 0);

    auto current = reading.get(kMaxAgeUs, kMaxAgeUs);
    assert(current.second);
    assert(current.first == 0.5f);
}

int main()
{
    testInvalidBeforeFirstRecord();
    testValidImmediatelyAfterRecord();
    testTransientFailureKeepsValueWithinWindow();
    testInvalidAfterWindowElapses();
    testNonPositiveWindowIsInvalid();
    testRecordUpdatesValueAndResetsAge();
    testExactBoundaryIsStillValid();

    std::printf("fresh_water_level scenarios passed: 7\n");
    return 0;
}
