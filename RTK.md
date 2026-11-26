# RTK.md — project usage notes

`rtk` is a CLI output-condensing proxy (installed via Homebrew at
`/opt/homebrew/bin/rtk`). The global `~/.claude/RTK.md` defines the general
contract: condensed output is complete, truncated output states its recovery
path, and a command whose result is unusable is re-run with `rtk proxy <cmd>`.
This file only adds recipes that are useful in this repository; do not duplicate
the global rules.

## Common commands here

| Command | Use |
| --- | --- |
| `rtk git status` | Compact working-tree state. |
| `rtk git diff` | Condensed diff of uncommitted changes. |
| `rtk git log --oneline -10` | Recent commit history and message style. |
| `rtk grep <pattern>` | Compact repo-wide literal/regex search, grouped by file. |
| `rtk rg <pattern> src` | Native ripgrep scoped to `src/` with the compact filter. |
| `rtk read src/automation/automation.cpp` | Filtered read of a source file (drop boilerplate). |
| `rtk find -name "*.h"` | Locate headers while keeping a compact tree. |
| `rtk ls` / `rtk tree` | Inspect `src/`, `test/` and `data/` layout. |
| `rtk err pio run -e kc868a6` | Build, surfacing only errors/warnings. |
| `rtk read platformio.ini` | Review pinned dependency versions (`rtk deps` does not summarize this file). |

Example workflow:

```sh
rtk git status
rtk rg "RELAY_SAFE_BOOT_MASK" src
rtk read src/automation/wb_mai6_pressure_validation.h
rtk err pio run -e kc868a6
```

## Host scenario suites

Every suite in `test/` is compiled and run on the host with the exact g++
command in its file header (AddressSanitizer + UBSan):

```sh
rtk err g++ -std=c++17 -Wall -Wextra -Werror -fsanitize=address,undefined \
    test/emergency_mode_scenarios.cpp -o /tmp/emergency_mode_test
/tmp/emergency_mode_test
```

Run the resulting binary plainly, without `rtk`: its stdout is the test verdict,
and CI (`build.yml`, `host-tests` job) executes the same commands unwrapped.

## Getting full output

- A line like `[+N hidden: rtk recall <hash>]` means output was elided. Run
  `rtk recall <hash>` to print the omitted part.
- If output is empty when it clearly should not be, contradicts the exit code,
  or is garbled, bypass filtering with `rtk proxy <original cmd>` (tracked) or
  `rtk run <cmd>` (raw, no tracking).

## Repo-specific warnings

- Never wrap interactive sessions: run `pio device monitor -b 115200` plainly,
  without `rtk`, or the live serial stream and exception decoder are unusable.
- Do not hide build/upload failures: `pio run` exit code is the contract, and
  `rtk err` / `rtk summary` results must still be checked against it.
- Flashing and OTA are owner actions (`pio run -e kc868a6 -t upload`,
  `-t uploadfs`, `pio run -e kc868a6_ota -t upload`): never run them as part of
  a change, wrapped or not.
- `pio run -e kc868a6 -t uploadfs` erases the LittleFS partition, including
  `/config.bin`, `/meter.bin` and `/yard_meter.bin` — the device loses its
  config and meter history and must be reconfigured. A successful compile says
  nothing about the filesystem image being flashed.
- For commands with no dedicated filter (for example unusual `pio` subcommands
  or the g++ suite builds above), use `rtk run` or `rtk proxy` rather than
  guessing at a filter.
