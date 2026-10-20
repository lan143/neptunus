import { useCallback, useEffect, useRef } from 'preact/hooks';
import type { ControlDeviceState, ControlsSnapshot } from '../api/types';
import dashboardSvgRaw from '../assets/water-dashboard.svg?raw';

/**
 * Raw SVG with the XML prolog, inline script and C2PA metadata removed. The
 * script would not run after `innerHTML` injection anyway, and the metadata is
 * a large signing blob that is irrelevant to the panel.
 */
const MARKUP = dashboardSvgRaw
  .replace(/^\s*<\?xml[\s\S]*?\?>/i, '')
  .replace(/<script\b[\s\S]*?<\/script>/gi, '')
  .replace(/<metadata\b[\s\S]*?<\/metadata>/gi, '');

const WATER_MIN_LEVEL = 0.37;
const WATER_MAX_LEVEL = 1.2;

const WATER_TOP = 62;
const WATER_HEIGHT = 186;
const WATER_BOTTOM = WATER_TOP + WATER_HEIGHT;

type SchematicState = 'open' | 'closed' | 'on' | 'off' | 'unknown';

const STATE_LABELS: Record<SchematicState, string> = {
  open: 'ОТКРЫТ',
  closed: 'ЗАКРЫТ',
  on: 'ВКЛЮЧЕН',
  off: 'ВЫКЛЮЧЕН',
  unknown: 'НЕТ ДАННЫХ',
};

/** SVG group id → firmware device id. */
const SVG_TO_DEVICE: Record<string, string> = {
  'valve-home-fill': 'fillingBarrelValve',
  'valve-bypass': 'bypassValve',
  'valve-street-fill': 'rainwaterPitValve',
  'pump-home': 'homePumpStation',
  'pump-street': 'outdoorPumpStation',
};

/** SVG group id → device kind (drives open/closed vs on/off labels). */
const DEVICE_KIND: Record<string, 'valve' | 'pump'> = {
  'valve-home-fill': 'valve',
  'valve-bypass': 'valve',
  'valve-street-fill': 'valve',
  'pump-home': 'pump',
  'pump-street': 'pump',
};

const MAPPED_SVG_IDS = Object.keys(SVG_TO_DEVICE);

function findElement(root: ParentNode, id: string): Element | null {
  return root.querySelector(`[id="${id}"]`);
}

function setState(
  root: ParentNode,
  id: string,
  state: SchematicState,
): void {
  const group = findElement(root, id);
  if (group) {
    group.setAttribute('data-state', state);
  }
  const text = findElement(root, `${id}-state`);
  if (text) {
    text.textContent = STATE_LABELS[state];
  }
}

function setLevel(
  root: ParentNode,
  tankId: string,
  pct: number | null,
): void {
  const water = findElement(root, `${tankId}-water`);
  const level = findElement(root, `${tankId}-level`);
  const group = findElement(root, tankId);

  if (pct === null) {
    if (water) {
      water.setAttribute('y', String(WATER_BOTTOM));
      water.setAttribute('height', '0');
    }
    if (level) {
      level.textContent = '— %';
    }
    if (group) {
      group.setAttribute('data-state', 'unknown');
    }
    return;
  }

  const clamped = Math.max(0, Math.min(100, pct));
  const height = (WATER_HEIGHT * clamped) / 100;
  if (water) {
    water.setAttribute('y', String(WATER_BOTTOM - height));
    water.setAttribute('height', String(height));
  }
  if (level) {
    level.textContent = `${Math.round(clamped)} %`;
  }
  if (group) {
    group.setAttribute('data-state', clamped < 15 ? 'alarm' : 'ok');
  }
}

function setPressure(
  root: ParentNode,
  bar: number | null,
  alarm: boolean,
): void {
  const value = findElement(root, 'sensor-city-pressure-value');
  const group = findElement(root, 'sensor-city-pressure');

  if (bar === null) {
    if (value) {
      value.textContent = '— бар';
    }
    if (group) {
      group.setAttribute('data-state', 'unknown');
    }
    return;
  }

  if (value) {
    value.textContent = `${bar.toFixed(1)} бар`;
  }
  if (group) {
    group.setAttribute('data-state', alarm ? 'alarm' : 'ok');
  }
}

function setMeter(
  root: ParentNode,
  meterId: string,
  total: number | null,
): void {
  const flow = findElement(root, `${meterId}-flow`);
  const totalText = findElement(root, `${meterId}-total`);
  const group = findElement(root, meterId);

  if (total === null) {
    if (flow) {
      flow.textContent = '— л/мин';
    }
    if (totalText) {
      totalText.textContent = '— м³';
    }
    if (group) {
      group.setAttribute('data-state', 'unknown');
    }
    return;
  }

  // The controls API exposes only cumulative counters, not instantaneous flow.
  if (flow) {
    flow.textContent = '— л/мин';
  }
  if (totalText) {
    totalText.textContent = `${total.toFixed(2)} м³`;
  }
  if (group) {
    group.setAttribute('data-state', 'off');
  }
}

function setFlow(root: ParentNode, pipeId: string, on: boolean): void {
  const pipe = findElement(root, pipeId);
  if (pipe) {
    pipe.setAttribute('data-flow', on ? 'on' : 'off');
  }
}

function deviceFor(
  snapshot: ControlsSnapshot,
  svgId: string,
): ControlDeviceState | null {
  return snapshot.devices.find((d) => d.id === SVG_TO_DEVICE[svgId]) ?? null;
}

function sensorValue(snapshot: ControlsSnapshot, id: string): number | null {
  const sensor = snapshot.sensors.find((s) => s.id === id);
  return sensor && sensor.available ? sensor.value : null;
}

function isDeviceOn(snapshot: ControlsSnapshot, id: string): boolean {
  const device = snapshot.devices.find((d) => d.id === id);
  return device !== undefined && device.available && device.value;
}

interface WaterSchematicProps {
  snapshot: ControlsSnapshot;
  disabled: boolean;
  pendingId: string | null;
  onToggle: (deviceId: string, value: 'on' | 'off') => void;
}

/**
 * Inline water-process schematic driven by the current controls snapshot.
 *
 * The SVG's own script does not execute after `innerHTML` injection, so the
 * equivalent imperative API is applied here after every snapshot/pending
 * update. Taps are delegated to the mapped valve/pump groups and posted with
 * the same `onToggle` callback as the plain Controls buttons.
 */
export function WaterSchematic({
  snapshot,
  disabled,
  pendingId,
  onToggle,
}: WaterSchematicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const latest = useRef<WaterSchematicProps>({
    snapshot,
    disabled,
    pendingId,
    onToggle,
  });

  // Keep the delegated click handler's view of the props current without
  // re-binding the listener on every 5 s poll.
  latest.current = { snapshot, disabled, pendingId, onToggle };

  useEffect(() => {
    const root = rootRef.current;
    const container = containerRef.current;

    if (container) {
      if (disabled) {
        container.setAttribute('data-disabled', 'true');
      } else {
        container.removeAttribute('data-disabled');
      }
    }

    if (!root) {
      return;
    }

    for (const svgId of MAPPED_SVG_IDS) {
      const device = deviceFor(snapshot, svgId);
      const state: SchematicState =
        !device || !device.available
          ? 'unknown'
          : DEVICE_KIND[svgId] === 'valve'
            ? device.value
              ? 'open'
              : 'closed'
            : device.value
              ? 'on'
              : 'off';

      setState(root, svgId, state);

      const group = findElement(root, svgId);
      if (group) {
        if (pendingId === SVG_TO_DEVICE[svgId]) {
          group.setAttribute('data-pending', 'true');
        } else {
          group.removeAttribute('data-pending');
        }
      }
    }

    const barrelLevel = sensorValue(snapshot, 'barrelWaterLevel');
    setLevel(
      root,
      'tank-home',
      barrelLevel === null
        ? null
        : ((barrelLevel - WATER_MIN_LEVEL) /
            (WATER_MAX_LEVEL - WATER_MIN_LEVEL)) *
            100,
    );

    const pitLevel = sensorValue(snapshot, 'rainwaterPitLevel');
    setLevel(root, 'tank-street', pitLevel);

    const pressure = sensorValue(snapshot, 'supplierPressure');
    setPressure(root, pressure, snapshot.emergencyMode);

    setMeter(
      root,
      'meter-home',
      sensorValue(snapshot, 'homeWaterConsumption'),
    );
    setMeter(
      root,
      'meter-street',
      sensorValue(snapshot, 'yardWaterConsumption'),
    );

    const v1Open = isDeviceOn(snapshot, 'fillingBarrelValve');
    const v2Open = isDeviceOn(snapshot, 'bypassValve');
    const v3Open = isDeviceOn(snapshot, 'rainwaterPitValve');
    const p1On = isDeviceOn(snapshot, 'homePumpStation');
    const p2On = isDeviceOn(snapshot, 'outdoorPumpStation');

    setFlow(root, 'pipe-city', v1Open || v3Open);
    setFlow(root, 'pipe-trunk', v1Open);
    setFlow(root, 'pipe-home-fill', v1Open);
    setFlow(root, 'pipe-trunk-down', v3Open);
    setFlow(root, 'pipe-street-fill', v3Open);
    setFlow(root, 'pipe-bypass', v2Open);
    setFlow(root, 'pipe-home-suction', p1On);
    setFlow(root, 'pipe-home-out', p1On || v2Open);
    setFlow(root, 'pipe-street-suction', p2On);
    setFlow(root, 'pipe-street-out', p2On);
  }, [snapshot, pendingId, disabled]);

  const handleClick = useCallback((event: MouseEvent) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const group = event.target.closest('g[id]');
    const svgId = group?.id;
    if (!svgId || !Object.prototype.hasOwnProperty.call(SVG_TO_DEVICE, svgId)) {
      return;
    }

    const current = latest.current;
    if (current.disabled) {
      return;
    }

    const deviceId = SVG_TO_DEVICE[svgId];
    const device = current.snapshot.devices.find((d) => d.id === deviceId);
    if (
      !device ||
      !device.available ||
      current.pendingId === device.id
    ) {
      return;
    }

    current.onToggle(device.id, device.value ? 'off' : 'on');
  }, []);

  return (
    <div
      class="schematic-scroll"
      ref={containerRef}
      onClick={handleClick}
    >
      <p class="hint">Tap a valve or pump on the schematic to toggle it.</p>
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />
    </div>
  );
}
