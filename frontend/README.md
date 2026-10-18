# Neptunus frontend

Single-page Preact + TypeScript web panel for the Neptunus ESP32 water-metering and
rainwater-controller device. The production build is written straight into the
repository's `data/` folder, which PlatformIO uploads to the device's LittleFS
partition.

## Build

```sh
cd frontend
npm install
npm run build          # typecheck + vite build -> ../data
```

The build is destructive: `vite` uses `emptyOutDir: true` and `outDir: ../data`, so the
old `data/` contents are replaced. Then flash the filesystem (PlatformIO target name
comes from `platformio.ini`):

```sh
pio run -t uploadfs
```

A firmware-only `pio run -t upload` does not flash the web assets.

Other scripts:

- `npm run dev` — Vite dev server for layout work (no device proxy; open the device
  origin for real API calls).
- `npm run typecheck` — `tsc --noEmit`.
- `npm run preview` — preview the production build locally.

## Architecture

- Preact SPA, no client-side router. A single `index.html` plus hashed assets under
  `/assets/` are served verbatim by the firmware's `serveStatic("/", LittleFS, "/")`.
- Device API is same-origin under `/api/*` and `/healthcheck/*`. The frontend must never
  emit files at those paths — Vite's asset directory stays `/assets/`.
- `src/api/` holds the typed client for every device endpoint, including the firmware's
  known quirks (see below). Pages consume it; there is no state library.
- `edn-network-ui` (shared web components in the sibling `ed-network` repo) is imported
  once in `src/main.tsx` so its custom elements register globally.

## Build layout

- Entry: `src/main.tsx` → `src/App.tsx`.
- Output: `../data/index.html` plus `../data/assets/*.{js,css}`. JS/CSS are never
  inlined into the HTML.

## Hard constraints

- **No external resources.** The browser talks to a device with no internet access.
  No CDN scripts, web fonts, prefetch/preconnect hints, or remote images. Only bundled
  assets are referenced from `index.html`.
- **Device is memory-constrained.** Keep the bundle dependency-light and poll status at
  a modest interval (>= 5 s).
- **Off-by-one string caps.** The firmware validates most strings against
  `BUFFER_LEN - 1`, so the client enforces the same stricter limits. See
  `src/api/client.ts` (`LIMITS`).
- **MQTT settings crash.** `POST /api/settings/mqtt` reads `mqttIsHADiscovery`,
  `stateTopic` and `commandTopic` without presence checks and crashes if any is missing.
  The client always sends all nine fields.
- **Config changes require a reboot.** Wi-Fi/MQTT/Modbus writes are persisted
  immediately but only take effect after `POST /api/reboot`, because the firmware reads
  the config once at boot. The UI must show a reboot-required notice after every save.
