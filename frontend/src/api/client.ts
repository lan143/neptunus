import type {
  ControlsSnapshot,
  DeviceStatus,
  ElectricityPayload,
  EmptyObject,
  HealthResponse,
  MeterPayload,
  ModbusPayload,
  MqttPayload,
  RainwaterPayload,
  ReadyResponse,
  Settings,
  WifiPayload,
} from './types';

/**
 * Client-side safety limits derived from the firmware contract.
 *
 * The firmware `strcpy`s into fixed char buffers with weak length checks, only
 * accepts a fixed Modbus speed enum, and rejects some ranges with HTTP 422, so
 * pages must enforce the same (or stricter) caps before a request is sent.
 * Every string cap is `BUFFER_LEN - 1`, matching the firmware checks.
 */
export const LIMITS = {
  wifi: {
    /** `wifiSSID[33]` (WIFI_SSID_LEN 33). */
    ssidMax: 32,
    /** `wifiPassword[65]` (WIFI_PWD_LEN 65); empty is allowed (open network). */
    passwordMax: 64,
  },
  mqtt: {
    /** `host[64]` (HOST_LEN 64); must be non-empty. */
    hostMin: 1,
    hostMax: 63,
    portMin: 1,
    portMax: 65535,
    /** `login[32]` / `password[32]`; may be empty but must be present. */
    loginMax: 31,
    passwordMax: 31,
    /** `mqttHADiscoveryPrefix[64]` (MQTT_TOPIC_LEN 64); must be non-empty. */
    haDiscoveryPrefixMin: 1,
    haDiscoveryPrefixMax: 63,
    /** `stateTopic`/`commandTopic`/`mqttTopicPrefix[64]`; must be non-empty. */
    topicMin: 1,
    topicMax: 63,
  },
  modbus: {
    /** The only speeds the firmware switch statement accepts. */
    speeds: [1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200],
    addressMin: 1,
    addressMax: 254,
  },
  rainwater: {
    /** `rainwaterPitLevelTopic[64]`; empty disables the feature. */
    topicMax: 63,
    /** 0 < maxHeight <= 10 (metres). */
    maxHeightMinExclusive: 0,
    maxHeightMax: 10,
    /** maxFillLevel must be strictly greater than the fill-start threshold. */
    fillLevelStartPercent: 10,
    /** ...and <= 100. */
    maxFillLevelMax: 100,
  },
  electricity: {
    /** `electricityTopic[64]` (MQTT_TOPIC_LEN 64); empty disables the feature. */
    topicMax: 63,
  },
  meter: {
    /** Firmware uint32 counter stores value*1000/cost (cost=1 m³-per-pulse) -> cap at ~4,294,967 m³. */
    valueMin: 0,
    valueMax: 4_294_967,
  },
} as const;

/** Failure side of every API call. */
export interface ApiFailure {
  ok: false;
  /** HTTP status when a response was received; absent for network failures. */
  status?: number;
  message: string;
}

/** Result of every API call. */
export type ApiResult<T> = { ok: true; data: T } | ApiFailure;

/** Result of a mutating call; the device replies `{}` on success. */
export type ActionResult = ApiResult<EmptyObject>;

const EMPTY_CONFIG_MESSAGE =
  'Device returned an empty response. Check the device logs and try again.';
const EMPTY_BODY_MESSAGE = 'Device returned an empty response.';
const NETWORK_MESSAGE =
  'Could not reach the device. Check that you are connected to its network and try again.';

const EMPTY_OBJECT: EmptyObject = {};

function networkFailure(): ApiFailure {
  return { ok: false, message: NETWORK_MESSAGE };
}

function messageFromBody(text: string): string | undefined {
  try {
    const parsed: unknown = JSON.parse(text);
    if (parsed && typeof parsed === 'object' && 'message' in parsed) {
      const value = (parsed as { message?: unknown }).message;
      if (typeof value === 'string' && value) {
        return value;
      }
    }
  } catch {
    // Not JSON; caller falls back to a generic message.
  }
  return undefined;
}

async function failureFromResponse(res: Response): Promise<ApiFailure> {
  let message = `Request failed (HTTP ${res.status}).`;
  try {
    const text = await res.text();
    if (text) {
      message = messageFromBody(text) ?? message;
    }
  } catch {
    // Keep the generic message.
  }
  return { ok: false, status: res.status, message };
}

/** GET a JSON endpoint. `emptyMessage` is used for empty/unparseable 200s. */
async function getJson<T>(
  path: string,
  emptyMessage: string,
): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(path, { headers: { Accept: 'application/json' } });
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let text: string;
  try {
    text = await res.text();
  } catch {
    return { ok: false, status: res.status, message: NETWORK_MESSAGE };
  }

  if (!text.trim()) {
    return { ok: false, status: res.status, message: emptyMessage };
  }

  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: res.status, message: emptyMessage };
  }
}

/** Send a mutating request; a 200 is success even with an empty body. */
async function send(path: string, init: RequestInit): Promise<ActionResult> {
  let res: Response;
  try {
    res = await fetch(path, init);
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let text = '';
  try {
    text = await res.text();
  } catch {
    return { ok: true, data: EMPTY_OBJECT };
  }

  if (!text.trim()) {
    return { ok: true, data: EMPTY_OBJECT };
  }

  try {
    const parsed = JSON.parse(text) as unknown;
    return {
      ok: true,
      data:
        parsed && typeof parsed === 'object'
          ? (parsed as EmptyObject)
          : EMPTY_OBJECT,
    };
  } catch {
    return { ok: true, data: EMPTY_OBJECT };
  }
}

function sendForm(path: string, body: URLSearchParams): Promise<ActionResult> {
  return send(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}

// --- runtime guards ---------------------------------------------------------
// These throw before a request can reach the device with a payload that would
// overflow a firmware buffer, be silently malformed, or crash the device.

function requireString(
  value: unknown,
  field: string,
  max: number,
  allowEmpty = false,
): string {
  if (typeof value !== 'string') {
    throw new Error(`${field} is required.`);
  }
  if (!allowEmpty && value.length === 0) {
    throw new Error(`${field} must not be empty.`);
  }
  if (value.length > max) {
    throw new Error(`${field} must be at most ${max} characters.`);
  }
  return value;
}

function requireNumber(
  value: unknown,
  field: string,
  min: number,
  max: number,
): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`${field} must be a number.`);
  }
  if (value < min || value > max) {
    throw new Error(`${field} must be between ${min} and ${max}.`);
  }
  return value;
}

function requireBoolean(value: unknown, field: string): boolean {
  if (typeof value !== 'boolean') {
    throw new Error(`${field} must be true or false.`);
  }
  return value;
}

function requireEnum(
  value: unknown,
  field: string,
  allowed: readonly number[],
): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`${field} must be a number.`);
  }
  if (!allowed.includes(value)) {
    throw new Error(`${field} must be one of: ${allowed.join(', ')}.`);
  }
  return value;
}

// --- reads ------------------------------------------------------------------

/** GET /api/settings */
export function getSettings(): Promise<ApiResult<Settings>> {
  return getJson<Settings>('/api/settings', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/status */
export function getStatus(): Promise<ApiResult<DeviceStatus>> {
  return getJson<DeviceStatus>('/api/status', EMPTY_BODY_MESSAGE);
}

/** GET /healthcheck/healty (misspelled path and key intentionally). */
export function getHealth(): Promise<ApiResult<HealthResponse>> {
  return getJson<HealthResponse>('/healthcheck/healty', EMPTY_BODY_MESSAGE);
}

/**
 * GET /healthcheck/ready. Returns HTTP 500 with `{ready:false,message}` while
 * the device is not ready; that surfaces here as `ok:false` with the reason.
 */
export function getReady(): Promise<ApiResult<ReadyResponse>> {
  return getJson<ReadyResponse>('/healthcheck/ready', EMPTY_BODY_MESSAGE);
}

/** GET /api/settings/modbus */
export function getModbusSettings(): Promise<ApiResult<ModbusPayload>> {
  return getJson<ModbusPayload>('/api/settings/modbus', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/settings/rainwater */
export function getRainwaterSettings(): Promise<ApiResult<RainwaterPayload>> {
  return getJson<RainwaterPayload>(
    '/api/settings/rainwater',
    EMPTY_CONFIG_MESSAGE,
  );
}

/** GET /api/settings/electricity */
export function getElectricitySettings(): Promise<ApiResult<ElectricityPayload>> {
  return getJson<ElectricityPayload>(
    '/api/settings/electricity',
    EMPTY_CONFIG_MESSAGE,
  );
}

/** GET /api/settings/meter (current cumulative counter values). */
export function getMeterSettings(): Promise<ApiResult<MeterPayload>> {
  return getJson<MeterPayload>('/api/settings/meter', EMPTY_CONFIG_MESSAGE);
}

/** GET /api/controls (device states, sensor snapshot and emergency flag). */
export function getControls(): Promise<ApiResult<ControlsSnapshot>> {
  return getJson<ControlsSnapshot>('/api/controls', EMPTY_BODY_MESSAGE);
}

// --- writes -----------------------------------------------------------------

/**
 * POST /api/settings/modbus — applies after reboot.
 *
 * `modbusSpeed` must be one of the firmware's statically supported speeds and
 * both addresses must be 1..254, otherwise the device answers HTTP 422.
 * Invalid input throws client-side instead of being sent.
 */
export function postModbusSettings(
  payload: ModbusPayload,
): Promise<ActionResult> {
  const modbusSpeed = requireEnum(
    payload.modbusSpeed,
    'Modbus speed',
    LIMITS.modbus.speeds,
  );
  const addressQDY30A = requireNumber(
    payload.addressQDY30A,
    'QDY30A address',
    LIMITS.modbus.addressMin,
    LIMITS.modbus.addressMax,
  );
  const addressWBMAI6 = requireNumber(
    payload.addressWBMAI6,
    'WB-MAI6 address',
    LIMITS.modbus.addressMin,
    LIMITS.modbus.addressMax,
  );

  const body = new URLSearchParams();
  body.set('modbusSpeed', String(modbusSpeed));
  body.set('addressQDY30A', String(addressQDY30A));
  body.set('addressWBMAI6', String(addressWBMAI6));
  return sendForm('/api/settings/modbus', body);
}

/**
 * POST /api/settings/rainwater — applies after reboot.
 *
 * An empty topic disables the feature (allowed). `maxHeight` must satisfy
 * 0 < x <= 10 and `maxFillLevel` must satisfy 10 < x <= 100 (strictly greater
 * than the firmware's fill-start threshold), matching the 422 checks.
 */
export function postRainwaterSettings(
  payload: RainwaterPayload,
): Promise<ActionResult> {
  const topic = requireString(
    payload.rainwaterPitLevelTopic,
    'Pit level topic',
    LIMITS.rainwater.topicMax,
    true,
  );
  const maxHeight = requireNumber(
    payload.rainwaterPitMaxHeight,
    'Pit max height',
    LIMITS.rainwater.maxHeightMinExclusive,
    LIMITS.rainwater.maxHeightMax,
  );
  if (maxHeight <= LIMITS.rainwater.maxHeightMinExclusive) {
    throw new Error('Pit max height must be greater than 0.');
  }
  const maxFillLevel = requireNumber(
    payload.rainwaterPitMaxFillLevel,
    'Pit max fill level',
    LIMITS.rainwater.fillLevelStartPercent,
    LIMITS.rainwater.maxFillLevelMax,
  );
  if (maxFillLevel <= LIMITS.rainwater.fillLevelStartPercent) {
    throw new Error(
      `Pit max fill level must be greater than ${LIMITS.rainwater.fillLevelStartPercent}.`,
    );
  }

  const body = new URLSearchParams();
  body.set('rainwaterPitLevelTopic', topic);
  body.set('rainwaterPitMaxHeight', String(maxHeight));
  body.set('rainwaterPitMaxFillLevel', String(maxFillLevel));
  return sendForm('/api/settings/rainwater', body);
}

/**
 * POST /api/settings/electricity — applies after reboot.
 *
 * An empty topic disables the feature (allowed). The firmware rejects a topic
 * longer than 63 characters with HTTP 422; invalid input throws client-side
 * instead of being sent.
 */
export function postElectricitySettings(
  payload: ElectricityPayload,
): Promise<ActionResult> {
  const topic = requireString(
    payload.electricityTopic,
    'Grid state topic',
    LIMITS.electricity.topicMax,
    true,
  );

  const body = new URLSearchParams();
  body.set('electricityTopic', topic);
  return sendForm('/api/settings/electricity', body);
}

/**
 * POST /api/settings/meter — takes effect immediately (no reboot needed).
 *
 * Sets both cumulative counters to the given initial values. The firmware only
 * checks that each value parses as a finite non-negative float.
 */
export function postMeterSettings(
  payload: MeterPayload,
): Promise<ActionResult> {
  const homeWaterInitialValue = requireNumber(
    payload.homeWaterInitialValue,
    'Home water initial value',
    LIMITS.meter.valueMin,
    LIMITS.meter.valueMax,
  );
  const yardWaterInitialValue = requireNumber(
    payload.yardWaterInitialValue,
    'Yard water initial value',
    LIMITS.meter.valueMin,
    LIMITS.meter.valueMax,
  );

  const body = new URLSearchParams();
  body.set('homeWaterInitialValue', String(homeWaterInitialValue));
  body.set('yardWaterInitialValue', String(yardWaterInitialValue));
  return sendForm('/api/settings/meter', body);
}

/**
 * POST /api/settings/wifi — applies after reboot.
 *
 * Sends both fields (the firmware requires both to be present) and enforces the
 * `wifiSSID[33]` / `wifiPassword[65]` caps. A non-empty SSID is required; an
 * empty password is valid for open networks. The firmware also switches the
 * device out of AP mode.
 */
export function postWifi(payload: WifiPayload): Promise<ActionResult> {
  const wifiSSID = requireString(
    payload.wifiSSID,
    'Wi-Fi SSID',
    LIMITS.wifi.ssidMax,
  );
  const wifiPassword = requireString(
    payload.wifiPassword,
    'Wi-Fi password',
    LIMITS.wifi.passwordMax,
    true,
  );

  const body = new URLSearchParams();
  body.set('wifiSSID', wifiSSID);
  body.set('wifiPassword', wifiPassword);
  return sendForm('/api/settings/wifi', body);
}

/**
 * POST /api/settings/mqtt — applies after reboot.
 *
 * Always sends all nine parameters. The firmware dereferences
 * `mqttIsHADiscovery`, `stateTopic` and `commandTopic` without presence checks,
 * so missing values would crash the device; invalid input throws client-side
 * instead of being sent. `mqttTopicPrefix` and `haDiscoveryPrefix` must be
 * non-empty.
 */
export function postMqtt(payload: MqttPayload): Promise<ActionResult> {
  const host = requireString(payload.host, 'MQTT host', LIMITS.mqtt.hostMax);
  const port = requireNumber(
    payload.port,
    'MQTT port',
    LIMITS.mqtt.portMin,
    LIMITS.mqtt.portMax,
  );
  const login = requireString(
    payload.login,
    'MQTT login',
    LIMITS.mqtt.loginMax,
    true,
  );
  const password = requireString(
    payload.password,
    'MQTT password',
    LIMITS.mqtt.passwordMax,
    true,
  );
  const haDiscoveryPrefix = requireString(
    payload.haDiscoveryPrefix,
    'HA discovery prefix',
    LIMITS.mqtt.haDiscoveryPrefixMax,
  );
  const mqttIsHADiscovery = requireBoolean(
    payload.mqttIsHADiscovery,
    'HA discovery flag',
  );
  const stateTopic = requireString(
    payload.stateTopic,
    'State topic',
    LIMITS.mqtt.topicMax,
  );
  const commandTopic = requireString(
    payload.commandTopic,
    'Command topic',
    LIMITS.mqtt.topicMax,
  );
  const mqttTopicPrefix = requireString(
    payload.mqttTopicPrefix,
    'MQTT topic prefix',
    LIMITS.mqtt.topicMax,
  );

  const body = new URLSearchParams();
  body.set('host', host);
  body.set('port', String(port));
  body.set('login', login);
  body.set('password', password);
  body.set('haDiscoveryPrefix', haDiscoveryPrefix);
  body.set('mqttIsHADiscovery', mqttIsHADiscovery ? 'true' : 'false');
  body.set('stateTopic', stateTopic);
  body.set('commandTopic', commandTopic);
  body.set('mqttTopicPrefix', mqttTopicPrefix);
  return sendForm('/api/settings/mqtt', body);
}

/**
 * POST /api/controls/set — turns a device on/off (open/close, enable/disable).
 *
 * `value` is `on`/`off` for every kind; the firmware maps `on` to `true`
 * (open/enable/run) and inverts valves internally.
 */
export function postControlSet(
  id: string,
  value: 'on' | 'off',
): Promise<ActionResult> {
  const body = new URLSearchParams();
  body.set('id', id);
  body.set('value', value);
  return sendForm('/api/controls/set', body);
}

/** POST /api/reboot — the device replies `{}` then restarts. */
export function reboot(): Promise<ActionResult> {
  return send('/api/reboot', { method: 'POST' });
}
