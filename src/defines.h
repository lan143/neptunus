#pragma once

#include <ETH.h>

#define SERIAL_SPEED 115200

#define RS485RX  14
#define RS485TX  27

#define I2CSDA 4
#define I2CSCL 15

#define INPUT_I2C_ADDRESS  0x22
#define RELAYS_I2C_ADDRESS 0x24

#define GPIO_METER 32

#ifndef CONTROLLER_NAME
#define CONTROLLER_NAME "Neptunus"
#endif

const char deviceName[] = CONTROLLER_NAME;
const char deviceModel[] = "KC868-A6";
const char deviceManufacturer[] = "Kincony";
const char deviceHWVersion[] = "1.0.0";
const char deviceFWVersion[] = "0.1.0";
