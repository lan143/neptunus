import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import {
  getModbusSettings,
  getRainwaterSettings,
  postModbusSettings,
  postRainwaterSettings,
  LIMITS,
} from '../api/client';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Field } from '../components/Field';
import { NeedsRebootNotice } from '../components/NeedsRebootNotice';
import { Select, type SelectOption } from '../components/Select';

function parseNumber(raw: string): number | null {
  if (raw.trim() === '') {
    return null;
  }
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function hasErrors(errors: object): boolean {
  return Object.keys(errors).length > 0;
}

// --- Modbus card ------------------------------------------------------------

interface ModbusForm {
  modbusSpeed: string;
  addressQDY30A: string;
  addressWBMAI6: string;
}

interface ModbusErrors {
  addressQDY30A?: string;
  addressWBMAI6?: string;
}

const EMPTY_MODBUS: ModbusForm = {
  modbusSpeed: '9600',
  addressQDY30A: '',
  addressWBMAI6: '',
};

function speedOptions(current: string): SelectOption[] {
  const options: SelectOption[] = LIMITS.modbus.speeds.map((speed) => ({
    value: String(speed),
    label: `${speed} baud`,
  }));
  const value = parseNumber(current);
  if (value !== null && !(LIMITS.modbus.speeds as readonly number[]).includes(value)) {
    options.unshift({ value: current, label: `${current} (current)` });
  }
  return options;
}

function validateModbusAddress(
  raw: string,
  label: string,
): string | undefined {
  const value = parseNumber(raw);
  if (
    value === null ||
    !Number.isInteger(value) ||
    value < LIMITS.modbus.addressMin ||
    value > LIMITS.modbus.addressMax
  ) {
    return `${label} must be an integer between ${LIMITS.modbus.addressMin} and ${LIMITS.modbus.addressMax}.`;
  }
  return undefined;
}

function ModbusCard() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [form, setForm] = useState<ModbusForm>(EMPTY_MODBUS);
  const [errors, setErrors] = useState<ModbusErrors>({});

  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const options = useMemo(() => speedOptions(form.modbusSpeed), [form.modbusSpeed]);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getModbusSettings();
    if (result.ok) {
      setForm({
        modbusSpeed: String(result.data.modbusSpeed),
        addressQDY30A: String(result.data.addressQDY30A),
        addressWBMAI6: String(result.data.addressWBMAI6),
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const update = (patch: Partial<ModbusForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const nextErrors: ModbusErrors = {
        addressQDY30A: validateModbusAddress(form.addressQDY30A, 'QDY30A address'),
        addressWBMAI6: validateModbusAddress(form.addressWBMAI6, 'WB-MAI6 address'),
      };
      setErrors(nextErrors);
      setNotice(null);
      setSaveError(null);
      if (hasErrors(nextErrors)) {
        return;
      }

      setSaving(true);
      try {
        const result = await postModbusSettings({
          modbusSpeed: Number(form.modbusSpeed),
          addressQDY30A: Number(form.addressQDY30A),
          addressWBMAI6: Number(form.addressWBMAI6),
        });
        if (result.ok) {
          setNotice('Modbus settings saved to flash.');
        } else {
          setSaveError(result.message);
        }
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : String(error));
      } finally {
        setSaving(false);
      }
    },
    [form],
  );

  if (!loaded) {
    return (
      <Card title="Modbus">
        <p class="muted">Loading Modbus settings&hellip;</p>
      </Card>
    );
  }

  return (
    <Card title="Modbus">
      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}
      <form onSubmit={handleSubmit}>
        <Select
          label="Bus speed"
          value={form.modbusSpeed}
          options={options}
          onChange={(value) => update({ modbusSpeed: value })}
          help="Only the speeds supported by the firmware are listed."
          disabled={saving}
        />
        <Field
          label="QDY30A address"
          value={form.addressQDY30A}
          onInput={(value) => update({ addressQDY30A: value })}
          type="number"
          min={LIMITS.modbus.addressMin}
          max={LIMITS.modbus.addressMax}
          inputMode="numeric"
          error={errors.addressQDY30A}
          disabled={saving}
        />
        <Field
          label="WB-MAI6 address"
          value={form.addressWBMAI6}
          onInput={(value) => update({ addressWBMAI6: value })}
          type="number"
          min={LIMITS.modbus.addressMin}
          max={LIMITS.modbus.addressMax}
          inputMode="numeric"
          error={errors.addressWBMAI6}
          disabled={saving}
        />
        {notice ? (
          <Banner
            kind="success"
            message={notice}
            onClose={() => setNotice(null)}
          />
        ) : null}
        {saveError ? (
          <Banner
            kind="error"
            message={saveError}
            onClose={() => setSaveError(null)}
          />
        ) : null}
        <div class="form-actions">
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? 'Saving\u2026' : 'Save Modbus'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

// --- Rainwater card ---------------------------------------------------------

interface RainwaterForm {
  rainwaterPitLevelTopic: string;
  rainwaterPitMaxHeight: string;
  rainwaterPitMaxFillLevel: string;
}

interface RainwaterErrors {
  rainwaterPitLevelTopic?: string;
  rainwaterPitMaxHeight?: string;
  rainwaterPitMaxFillLevel?: string;
}

const EMPTY_RAINWATER: RainwaterForm = {
  rainwaterPitLevelTopic: '',
  rainwaterPitMaxHeight: '',
  rainwaterPitMaxFillLevel: '',
};

function RainwaterCard() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [form, setForm] = useState<RainwaterForm>(EMPTY_RAINWATER);
  const [errors, setErrors] = useState<RainwaterErrors>({});

  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getRainwaterSettings();
    if (result.ok) {
      setForm({
        rainwaterPitLevelTopic: result.data.rainwaterPitLevelTopic,
        rainwaterPitMaxHeight: String(result.data.rainwaterPitMaxHeight),
        rainwaterPitMaxFillLevel: String(result.data.rainwaterPitMaxFillLevel),
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const update = (patch: Partial<RainwaterForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const nextErrors: RainwaterErrors = {};

      if (form.rainwaterPitLevelTopic.length > LIMITS.rainwater.topicMax) {
        nextErrors.rainwaterPitLevelTopic = `At most ${LIMITS.rainwater.topicMax} characters.`;
      }

      const maxHeight = parseNumber(form.rainwaterPitMaxHeight);
      if (
        maxHeight === null ||
        maxHeight <= LIMITS.rainwater.maxHeightMinExclusive ||
        maxHeight > LIMITS.rainwater.maxHeightMax
      ) {
        nextErrors.rainwaterPitMaxHeight = `Height must be greater than 0 and at most ${LIMITS.rainwater.maxHeightMax} m.`;
      }

      const maxFillLevel = parseNumber(form.rainwaterPitMaxFillLevel);
      if (
        maxFillLevel === null ||
        maxFillLevel <= LIMITS.rainwater.fillLevelStartPercent ||
        maxFillLevel > LIMITS.rainwater.maxFillLevelMax
      ) {
        nextErrors.rainwaterPitMaxFillLevel = `Fill level must be greater than ${LIMITS.rainwater.fillLevelStartPercent} and at most ${LIMITS.rainwater.maxFillLevelMax}.`;
      }

      setErrors(nextErrors);
      setNotice(null);
      setSaveError(null);
      if (hasErrors(nextErrors)) {
        return;
      }

      setSaving(true);
      try {
        const result = await postRainwaterSettings({
          rainwaterPitLevelTopic: form.rainwaterPitLevelTopic,
          rainwaterPitMaxHeight: Number(form.rainwaterPitMaxHeight),
          rainwaterPitMaxFillLevel: Number(form.rainwaterPitMaxFillLevel),
        });
        if (result.ok) {
          setNotice('Rainwater settings saved to flash.');
        } else {
          setSaveError(result.message);
        }
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : String(error));
      } finally {
        setSaving(false);
      }
    },
    [form],
  );

  if (!loaded) {
    return (
      <Card title="Rainwater pit">
        <p class="muted">Loading rainwater settings&hellip;</p>
      </Card>
    );
  }

  return (
    <Card title="Rainwater pit">
      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}
      <form onSubmit={handleSubmit}>
        <Field
          label="Pit level topic"
          value={form.rainwaterPitLevelTopic}
          onInput={(value) => update({ rainwaterPitLevelTopic: value })}
          maxLength={LIMITS.rainwater.topicMax}
          placeholder="Leave empty to disable auto-filling"
          help="MQTT topic that reports the pit level; empty disables auto-filling."
          error={errors.rainwaterPitLevelTopic}
          autoComplete="off"
          disabled={saving}
        />
        <Field
          label="Pit max height"
          value={form.rainwaterPitMaxHeight}
          onInput={(value) => update({ rainwaterPitMaxHeight: value })}
          type="number"
          min={LIMITS.rainwater.maxHeightMinExclusive}
          max={LIMITS.rainwater.maxHeightMax}
          step={0.1}
          inputMode="decimal"
          help={`Height of the pit in metres (greater than 0, at most ${LIMITS.rainwater.maxHeightMax}).`}
          error={errors.rainwaterPitMaxHeight}
          disabled={saving}
        />
        <Field
          label="Pit max fill level"
          value={form.rainwaterPitMaxFillLevel}
          onInput={(value) => update({ rainwaterPitMaxFillLevel: value })}
          type="number"
          min={LIMITS.rainwater.fillLevelStartPercent}
          max={LIMITS.rainwater.maxFillLevelMax}
          step={1}
          inputMode="numeric"
          help={`Percentage that stops filling; must be greater than ${LIMITS.rainwater.fillLevelStartPercent}% and at most ${LIMITS.rainwater.maxFillLevelMax}%.`}
          error={errors.rainwaterPitMaxFillLevel}
          disabled={saving}
        />
        {notice ? (
          <Banner
            kind="success"
            message={notice}
            onClose={() => setNotice(null)}
          />
        ) : null}
        {saveError ? (
          <Banner
            kind="error"
            message={saveError}
            onClose={() => setSaveError(null)}
          />
        ) : null}
        <div class="form-actions">
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? 'Saving\u2026' : 'Save rainwater'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export function SettingsPage() {
  return (
    <div class="stack">
      <NeedsRebootNotice />
      <ModbusCard />
      <RainwaterCard />
    </div>
  );
}
