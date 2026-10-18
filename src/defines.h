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

#define RELAY_CHANNEL_FILLING_BARREL        0
#define RELAY_CHANNEL_BYPASS                1
#define RELAY_CHANNEL_HOME_PUMP_STATION     2
#define RELAY_CHANNEL_DRAINAGE_PUMP         3
#define RELAY_CHANNEL_FILLING_RAINWATER_PIT 4
#define RELAY_CHANNEL_OUTDOOR_PUMP_STATION  5

const char deviceName[] = CONTROLLER_NAME;
const char deviceModel[] = "KC868-A6";
const char deviceManufacturer[] = "Kincony";
const char deviceHWVersion[] = "1.0.0";
const char deviceFWVersion[] = "0.1.0";
