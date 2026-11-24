# AGENTS.md — Neptunus

Orientation for coding agents. Read this first; user-facing docs are in `README.md`.
`RTK.md` is not present in this repo, so there is no condensed-output override to follow.

## What this is

ESP32 firmware (PlatformIO, Arduino framework, KinCony KC868-A6) for a private home water
station: a city-water inlet feeding a pressure-buffer drinking-water tank and a rainwater tank
for yard watering, with a bypass. It reads supplier pressure and tank levels, drives three
normally-closed valves and three pumps, runs fill/emergency/bypass automation, publishes to
MQTT + Home Assistant discovery, and serves a LittleFS web panel.

```
city inlet -> meter(navier) -> pressure sensor -> collector
  branch 1 -> valve -> drinking tank (QDY30A level) -> home pump -> house meter -> house
  branch 2 -> valve -> rainwater tank (Evelyn level via MQTT) -> outdoor pump -> yard meter -> yard
  branch 3 -> bypass straight to the home line
```

House and yard meters sit DOWNSTREAM of the tanks: with the bypass closed, house consumption
draws from the drinking tank and yard consumption from the rainwater tank, so neither touches
the inlet pressure line. Only tank fills and an open bypass reach the pressure sensor.

## Layout

- `src/automation/` — decision logic. Pure, host-testable headers (no Arduino/ESP includes):
  `bypass_mode.h`, `level_trend.h`, `emergency_mode.h`, `wb_mai6_pressure_validation.h`.
  `automation.cpp` / `automation.h` wire them to relays, sensors, MQTT, config.
- `src/controls/` — web API for manual device control and status.
- `src/meter/` — pulse counters and their LittleFS ring-storage persistence.
- `src/storage/` — `safe_littlefs_storage.hpp`: atomic store (temp file + rename) behind one
  firmware-wide mutex.
- `src/web/` — ESPAsyncWebServer routes, config backup/restore, `/api/status`, `/api/reboot`.
- `src/main.cpp` — `setup()`/`loop()`, task-watchdog subscription, OTA safe state.
- `test/` — host scenario suites; never compiled by PlatformIO (they live outside `src/`).
- `.github/workflows/build.yml` — CI: cold-cache `pio run -e kc868a6` plus the host suites.

## Core runtime pattern

- Two ticks: a 10-second pressure tick (bad-pressure clock, debounced bypass mode, level
  trends) and a 1-second decision tick (everything else).
- Sensors are read with freshness windows (pressure 30 s over a 10 s poll, barrel level 30 s
  over a 1 s poll). Stale data must degrade to a conservative safe action, never to "keep
  going".
- `Relay::setState()` only enqueues; it is drained by `Relay::update()` on the loop task. A
  command issued this tick is NOT visible to `isEnabled()` until the next update, so overlay
  same-tick intent manually (see the barrel-valve pattern in `automation.cpp`).
- I2C is main-loop-only. The async web task must read the device cache snapshot
  (`_deviceCache`), never `PCF8574P::isEnabled()` live.
- Fields written from the MQTT task callbacks are `volatile`; compare their timestamps with
  signed diffs (`static_cast<int32_t>(now - last)`) because the writer may run after the
  reader sampled `now`.

## Invariants — do not break

- Valves are normally-closed with open semantics: relay OFF = valve OPEN, relay ON/energized =
  CLOSED. Keep `RELAY_SAFE_BOOT_MASK` (0xEC) consistent with this; the PCF8574 powers up all-
  HIGH, which is physically OPEN, so the mask must be written as early as possible.
- Safe state at boot and during OTA: all three valves closed, all pumps off. OTA must not run
  `automation.update()`.
- WB-MAI6 validation sentinels (`0x7FFF`, `0xFFFF`, `0xFFFE`) and the calibrated-range check
  are load-bearing; never loosen them. A raw 0x7FFF once scaled to 327 bar and poisoned the
  automation.
- House and yard meters are downstream of the tanks: they never draw through the pressure-
  sensor path, so they may never gate emergency mode or the bad-pressure clock. The one
  exception is bypass open + house flow, which is a real supplier draw.
- `isFlowOfWaterActive()` keeps a 120-second tail after the last pulse; bypass entry is
  suppressed for that whole tail.
- `LevelTrendTracker` holds 64 samples ≈ 10.6 min at the 10 s cadence; its freshness window is
  30 s. Do not change the cadence assumptions without revisiting the fill/pressure logic.
- Persisted state (config, meter rings, auto mode, drainage pump) survives reboot and must stay
  backward-compatible. Config changes use the version + `static_assert` layout pattern in
  `src/config.h` (and the legacy-struct migration in `main.cpp`).

## How to validate a change

1. Run the four host suites with the `g++ -std=c++17 -Wall -Wextra -Werror
   -fsanitize=address,undefined` command in each file's header, e.g.:

   ```sh
   g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
       test/emergency_mode_scenarios.cpp -o /tmp/emergency_mode_test && /tmp/emergency_mode_test
   ```

2. Build the firmware: `pio run -e kc868a6`.
3. Never flash or upload as part of a change (`pio run -e kc868a6_ota` is an owner action).
   CI builds `kc868a6`; the OTA env is exercised only by the owner.

## Conventions

- 4-space indent, Allman braces, `#pragma once`, English comments.
- `camelCase` functions/methods, `PascalCase` types, private members `_camelCase`.
- Constants as named `#define`/`constexpr` with a comment explaining WHY the value exists.
- Commit messages: a single long imperative line, no body, no prefixes.

## Non-goals / don't

- No umbrella headers; include the specific module header.
- No loosening of validation or freshness gates to "make it work".
- No device writes outside the safe-state rules, and no I2C access from the async web task.
- No new dependencies without pinning exact versions/SHAs in `platformio.ini`.
