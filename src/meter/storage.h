#pragma once

#include <Arduino.h>
#include <data_mgr.h>

#include "state.h"

#define RING_STORAGE_SIZE 100

class RingStorage
{
public:
    RingStorage(EDConfig::DataMgr<MeterState>* dataMgr) : _dataMgr(dataMgr) {}

    void init();
    void writeValue(uint32_t value, bool hasLock);
    uint32_t getCurrentValue() { return _currentValue & 0x7FFFFFFF; }
    bool hasLock() { return (_currentValue & 0x80000000) > 0; }
    void clear();

private:
    int _ptr = 0;
    uint32_t _currentValue = 0;
    EDConfig::DataMgr<MeterState>* _dataMgr;
};
