/**
 * Response and request shapes for the Neptunus device HTTP API.
 *
 * These mirror the firmware contracts in `src/web/handler.cpp` and
 * `src/meter/handler.cpp` (and the network/MQTT/config structs they persist).
 * GET response interfaces match the JSON the device actually emits; request
 * payload interfaces are always the *full* set of fields because the firmware
 * replaces whole config entries and some handlers dereference fields that were
 * never presence-checked.
 */

/**
 * GET /api/settings.
 *
 * Note the request/response field-name asymmetry for the MQTT values: the GET
 * emits `mqttHADiscoveryPrefix` / `mqttCommandTopic` / `mqttStateTopic` /
 * `mqttTopicPrefix`, while POST /api/settings/mqtt reads `haDiscoveryPrefix`,
 * `stateTopic`, `commandTopic` and `mqttTopicPrefix`.
 */
export interface Settings {
  wifiSSID: string;
  wifiPassword: string;
  mqttHost: string;
  mqttPort: number;
  mqttLogin: string;
  mqttPassword: string;
  mqttIsHADiscovery: boolean;
  mqttHADiscoveryPrefix: string;
  mqttCommandTopic: string;
  mqttStateTopic: string;
  mqttTopicPrefix: string;
}

/** GET /api/status. `uptime` is seconds since boot. */
export interface DeviceStatus {
  wifiStatus: 'connected' | 'disconnected';
  freeHeap: number;
  uptime: number;
  lastResetReason: string;
}

/** GET /healthcheck/healty (misspelled intentionally by the firmware lib). */
export interface HealthResponse {
  healty: boolean;
}

/** GET /healthcheck/ready. */
export interface ReadyResponse {
  ready: boolean;
  message: string;
}

/** GET /api/settings/modbus and POST /api/settings/modbus. */
export interface ModbusPayload {
  modbusSpeed: number;
  addressQDY30A: number;
  addressWBMAI6: number;
}

/**
 * GET /api/settings/rainwater and POST /api/settings/rainwater.
 *
 * An empty `rainwaterPitLevelTopic` disables the feature; the max fill level
 * must stay strictly above the firmware's fill-start threshold (10%).
 */
export interface RainwaterPayload {
  rainwaterPitLevelTopic: string;
  rainwaterPitMaxHeight: number;
  rainwaterPitMaxFillLevel: number;
}

/**
 * GET /api/settings/meter and POST /api/settings/meter.
 *
 * These are the current cumulative counter values, not deltas.
 */
export interface MeterPayload {
  homeWaterInitialValue: number;
  yardWaterInitialValue: number;
}

/**
 * POST /api/settings/wifi.
 *
 * Into the fixed `wifiSSID[33]` / `wifiPassword[65]` buffers; an empty password
 * is valid for open networks.
 */
export interface WifiPayload {
  wifiSSID: string;
  wifiPassword: string;
}

/**
 * POST /api/settings/mqtt.
 *
 * All nine fields are mandatory at runtime: the firmware presence-checks only
 * `host`, `port`, `login`, `password`, `haDiscoveryPrefix` and `mqttTopicPrefix`
 * and reads `mqttIsHADiscovery`, `stateTopic` and `commandTopic` without a
 * presence check, so the client always sends them.
 */
export interface MqttPayload {
  host: string;
  port: number;
  login: string;
  password: string;
  haDiscoveryPrefix: string;
  mqttIsHADiscovery: boolean;
  stateTopic: string;
  commandTopic: string;
  mqttTopicPrefix: string;
}

/** Device kinds exposed by GET /api/controls. */
export type ControlDeviceKind = 'valve' | 'pump' | 'auto';

/**
 * One controllable device in GET /api/controls.
 *
 * `value` semantics depend on `kind`: valve → `true` means open, pump → `true`
 * means running, auto → `true` means enabled. When `available` is `false` the
 * state is unknown and `value` is always `false`.
 */
export interface ControlDeviceState {
  id: string;
  name: string;
  kind: ControlDeviceKind;
  value: boolean;
  available: boolean;
}

/** One read-only sensor reading in GET /api/controls. */
export interface ControlSensorState {
  id: string;
  name: string;
  unit: string;
  value: number;
  available: boolean;
}

/** GET /api/controls payload: device states, sensor snapshot, emergency flag. */
export interface ControlsSnapshot {
  devices: ControlDeviceState[];
  sensors: ControlSensorState[];
  emergencyMode: boolean;
}

/** Successful response data for mutating endpoints (the device replies `{}`). */
export type EmptyObject = Record<string, never>;
