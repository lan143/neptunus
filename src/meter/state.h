#pragma once

#include <Arduino.h>

#define RING_STORAGE_SIZE 100

struct MeterState
{
    uint32_t values[RING_STORAGE_SIZE] = {0};
};
