import { useCallback, useEffect, useState } from 'preact/hooks';
import { getControls, postControlSet } from '../api/client';
import type { ControlDeviceState, ControlsSnapshot } from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { WaterSchematic } from '../components/WaterSchematic';

const CONTROLS_REFRESH_MS = 5_000;

interface DeviceActions {
  on: string;
  off: string;
  onBadge: string;
  offBadge: string;
}

const AUTO_ACTIONS: DeviceActions = {
  on: 'Turn on',
  off: 'Turn off',
  onBadge: 'Enabled',
  offBadge: 'Disabled',
};

interface DeviceRowProps {
  device: ControlDeviceState;
  actions: DeviceActions;
  disabled: boolean;
  onToggle: (id: string, value: 'on' | 'off') => void;
}

/** One controllable device: name, state badge and on/off buttons. */
function DeviceRow({ device, actions, disabled, onToggle }: DeviceRowProps) {
  const badge = !device.available
    ? { label: 'Unknown', className: 'badge badge-off' }
    : device.value
      ? { label: actions.onBadge, className: 'badge badge-on' }
      : { label: actions.offBadge, className: 'badge badge-off' };

  return (
    <li class="valve-row">
      <div class="row">
        <span>{device.name}</span>
        <span class={badge.className}>{badge.label}</span>
      </div>
      <div class="form-actions">
        <Button
          variant="primary"
          disabled={disabled}
          onClick={() => onToggle(device.id, 'on')}
        >
          {actions.on}
        </Button>
        <Button disabled={disabled} onClick={() => onToggle(device.id, 'off')}>
          {actions.off}
        </Button>
      </div>
    </li>
  );
}

/**
 * Controls tab: auto-mode toggle plus the live water schematic.
 *
 * Polls GET /api/controls every 5 s and posts commands to /api/controls/set.
 * The device is LAN-only with no auth, so commands are sent immediately (parity
 * with Home Assistant) and the snapshot is reloaded after every attempt because
 * a command may have partially applied.
 */
export function ControlsPage() {
  const [snapshot, setSnapshot] = useState<ControlsSnapshot | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    const result = await getControls();
    if (result.ok) {
      // The firmware can answer 200 with a truncated body (e.g. "{}" on heap
      // exhaustion), so validate the shape before trusting it; snapshot.devices
      // is dereferenced unconditionally during render.
      const data = result.data;
      if (
        Array.isArray(data.devices) &&
        Array.isArray(data.sensors) &&
        typeof data.emergencyMode === 'boolean'
      ) {
        setSnapshot(data);
        setLoadError(null);
      } else {
        setLoadError('Device returned an invalid controls response');
      }
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => {
      void load();
    }, CONTROLS_REFRESH_MS);
    return () => window.clearInterval(timer);
  }, [load]);

  const toggle = useCallback(
    async (id: string, value: 'on' | 'off') => {
      setActionError(null);
      setPendingId(id);
      try {
        const result = await postControlSet(id, value);
        if (!result.ok) {
          setActionError(result.message);
        }
      } catch (error) {
        setActionError(error instanceof Error ? error.message : String(error));
      } finally {
        setPendingId(null);
        // Reload regardless: the command may have partially applied. Wait for
        // the firmware loop task to drain the command queue and refresh its
        // HTTP device cache (~100 ms cadence) before reading the state back.
        await new Promise((resolve) => window.setTimeout(resolve, 300));
        await load();
      }
    },
    [load],
  );

  if (!loaded) {
    return (
      <div class="stack">
        <Card title="Controls">
          <p class="muted">Loading controls&hellip;</p>
        </Card>
      </div>
    );
  }

  if (!snapshot) {
    return (
      <div class="stack">
        {loadError ? <Banner kind="error" message={loadError} /> : null}
        <div class="form-actions">
          <Button onClick={() => void load()}>Retry</Button>
        </div>
      </div>
    );
  }

  const autoDevice =
    snapshot.devices.find((device) => device.kind === 'auto') ?? null;

  // A snapshot that failed to load cannot be trusted as a command base state.
  const controlsDisabled = loadError !== null;
  const isDisabled = (device: ControlDeviceState) =>
    controlsDisabled || !device.available || pendingId === device.id;

  return (
    <div class="stack">
      {autoDevice && autoDevice.available && autoDevice.value ? (
        <Banner
          kind="info"
          message="Automation is enabled and may revert manual valve/pump changes shortly after you toggle them."
        />
      ) : null}

      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}

      {actionError ? (
        <Banner
          kind="error"
          message={actionError}
          onClose={() => setActionError(null)}
        />
      ) : null}

      <Card title="Auto mode">
        {autoDevice ? (
          <ul class="valve-list">
            <DeviceRow
              device={autoDevice}
              actions={AUTO_ACTIONS}
              disabled={isDisabled(autoDevice)}
              onToggle={toggle}
            />
          </ul>
        ) : (
          <p class="muted">Auto mode is not reported by the device.</p>
        )}
      </Card>

      <Card title="Water schematic">
        <WaterSchematic
          snapshot={snapshot}
          disabled={controlsDisabled}
          pendingId={pendingId}
          onToggle={toggle}
        />
      </Card>
    </div>
  );
}
