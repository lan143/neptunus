#pragma once

#include <ETH.h>

#define SERIAL_SPEED 115200

#define RS485RX  14
#define RS485TX  27

#define I2CSDA 4
#define I2CSCL 15

#define INPUT_I2C_ADDRESS  0x22
#define RELAYS_I2C_ADDRESS 0x24

#ifndef CONTROLLER_NAME
#define CONTROLLER_NAME "Neptunus"
#endif

// Home and outdoor pump channels are swapped to match the physical wiring
// (an entity ON was observed energizing the opposite pump).
#define RELAY_CHANNEL_FILLING_BARREL        0
#define RELAY_CHANNEL_BYPASS                1
#define RELAY_CHANNEL_HOME_PUMP_STATION     5
#define RELAY_CHANNEL_DRAINAGE_PUMP         3
#define RELAY_CHANNEL_FILLING_RAINWATER_PIT 4
#define RELAY_CHANNEL_OUTDOOR_PUMP_STATION  2

// Safe state written to the relay expander as early as possible at boot and
// during OTA. For this wiring a HIGH bit means the relay is de-energized
// (pump OFF); the three normally-open valves therefore need a LOW bit to be
// energized and physically CLOSED.
//   bit 0 filling barrel valve  -> 0 (energized, closed)
//   bit 1 bypass valve          -> 0 (energized, closed)
//   bit 2 outdoor pump          -> 1 (off)
//   bit 3 drainage pump         -> 1 (off)
//   bit 4 rainwater pit valve   -> 0 (energized, closed)
//   bit 5 home pump             -> 1 (off)
//   bits 6,7 unused             -> 1
// = 0b11101100 = 0xEC. (The wave brief quoted 0xED, but that sets bit 0 HIGH
// and would leave the filling-barrel valve OPEN; 0xEC is the all-valves-closed
// mask implied by the stated bit layout.)
#define RELAY_SAFE_BOOT_MASK 0xEC

const char deviceName[] = CONTROLLER_NAME;
const char deviceModel[] = "KC868-A6";
const char deviceManufacturer[] = "Kincony";
const char deviceHWVersion[] = "1.0.0";
const char deviceFWVersion[] = "0.1.0";
