import { useCallback, useEffect, useState } from 'preact/hooks';
import { getMeterSettings, postMeterSettings } from '../api/client';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Field } from '../components/Field';

interface MeterForm {
  homeWaterInitialValue: string;
  yardWaterInitialValue: string;
}

interface MeterErrors {
  homeWaterInitialValue?: string;
  yardWaterInitialValue?: string;
}

const EMPTY_FORM: MeterForm = {
  homeWaterInitialValue: '',
  yardWaterInitialValue: '',
};

function parseNumber(raw: string): number | null {
  if (raw.trim() === '') {
    return null;
  }
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function hasErrors(errors: object): boolean {
  return Object.values(errors).some((message) => Boolean(message));
}

function hasTooManyDecimals(raw: string): boolean {
  return /^-?\d*(\.\d{4,})$/.test(raw.trim());
}

function validateMeter(form: MeterForm): MeterErrors {
  const errors: MeterErrors = {};

  const home = parseNumber(form.homeWaterInitialValue);
  if (home === null || home < 0) {
    errors.homeWaterInitialValue = 'Enter a value of 0 or more.';
  } else if (hasTooManyDecimals(form.homeWaterInitialValue)) {
    errors.homeWaterInitialValue = 'At most 3 decimal places.';
  }

  const yard = parseNumber(form.yardWaterInitialValue);
  if (yard === null || yard < 0) {
    errors.yardWaterInitialValue = 'Enter a value of 0 or more.';
  } else if (hasTooManyDecimals(form.yardWaterInitialValue)) {
    errors.yardWaterInitialValue = 'At most 3 decimal places.';
  }

  return errors;
}

type MeterTarget = 'home' | 'yard';

/**
 * Meter calibration page. The GET endpoint returns the current cumulative
 * counter values; setting an initial value recalibrates the pulse counter to
 * that reading and is persisted immediately, so there is no reboot notice here.
 */
export function MetersPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [form, setForm] = useState<MeterForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<MeterErrors>({});

  const [savingTarget, setSavingTarget] = useState<MeterTarget | null>(null);
  const [homeNotice, setHomeNotice] = useState<string | null>(null);
  const [homeError, setHomeError] = useState<string | null>(null);
  const [yardNotice, setYardNotice] = useState<string | null>(null);
  const [yardError, setYardError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getMeterSettings();
    if (result.ok) {
      setForm({
        homeWaterInitialValue: String(result.data.homeWaterInitialValue),
        yardWaterInitialValue: String(result.data.yardWaterInitialValue),
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const save = useCallback(
    async (target: MeterTarget) => {
      const nextErrors = validateMeter(form);
      setErrors(nextErrors);

      const setNotice = target === 'home' ? setHomeNotice : setYardNotice;
      const setSaveError = target === 'home' ? setHomeError : setYardError;
      setNotice(null);
      setSaveError(null);
      if (hasErrors(nextErrors)) {
        return;
      }

      setSavingTarget(target);
      try {
        // Both counters are always sent: the firmware replaces them together.
        const result = await postMeterSettings({
          homeWaterInitialValue: Number(form.homeWaterInitialValue),
          yardWaterInitialValue: Number(form.yardWaterInitialValue),
        });
        if (result.ok) {
          setNotice('Counter recalibrated to the entered reading.');
        } else {
          setSaveError(result.message);
        }
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : String(error));
      } finally {
        setSavingTarget(null);
      }
    },
    [form],
  );

  if (!loaded) {
    return (
      <div class="stack">
        <Card title="Meters">
          <p class="muted">Loading meter values&hellip;</p>
        </Card>
      </div>
    );
  }

  const busy = savingTarget !== null;

  const renderCard = (target: MeterTarget, title: string, label: string) => {
    const isHome = target === 'home';
    const fieldKey = isHome
      ? ('homeWaterInitialValue' as const)
      : ('yardWaterInitialValue' as const);
    const value = form[fieldKey];
    const fieldError = errors[fieldKey];
    const notice = isHome ? homeNotice : yardNotice;
    const saveError = isHome ? homeError : yardError;

    return (
      <Card title={title}>
        {/* novalidate: JS validators own error rendering; native constraint validation would silently block submit. */}
        <form
          novalidate
          onSubmit={(event) => {
            event.preventDefault();
            void save(target);
          }}
        >
          <Field
            label={label}
            value={value}
            onInput={(next) =>
              setForm((current) => ({ ...current, [fieldKey]: next }))
            }
            type="number"
            min={0}
            step={0.001}
            inputMode="decimal"
            error={fieldError}
            help="Cumulative counter reading in m³ (up to 3 decimals)."
            disabled={busy}
          />
          {notice ? (
            <Banner
              kind="success"
              message={notice}
              onClose={() => (isHome ? setHomeNotice(null) : setYardNotice(null))}
            />
          ) : null}
          {saveError ? (
            <Banner
              kind="error"
              message={saveError}
              onClose={() => (isHome ? setHomeError(null) : setYardError(null))}
            />
          ) : null}
          <div class="form-actions">
            <Button
              type="submit"
              variant="primary"
              disabled={busy}
            >
              {savingTarget === target ? 'Saving\u2026' : 'Save'}
            </Button>
          </div>
        </form>
      </Card>
    );
  };

  return (
    <div class="stack">
      <Banner
        kind="info"
        message="Setting an initial value recalibrates the pulse counter to that reading. It is persisted immediately and needs no reboot."
      />

      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}

      {renderCard('home', 'Home water', 'Home water counter')}
      {renderCard('yard', 'Yard water', 'Yard water counter')}
    </div>
  );
}
