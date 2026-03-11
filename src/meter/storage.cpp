#include <EEPROM.h>
#include <log/log.h>

#include "defines.h"
#include "storage.h"

void RingStorage::init()
{
    uint32_t prevValue = _dataMgr->getData()->values[0];
    bool maxValueHasLock = (prevValue & 0x80000000) > 0;
    if (maxValueHasLock) {
        prevValue &= 0x7FFFFFFF;
    }

    uint32_t maxValue = prevValue;
    bool needClear = false;
    int maxAddress = 0;

    if (maxValue == 0xFFFFFFFF) {
        needClear = true;
    }

    for (int i = 1; i < RING_STORAGE_SIZE; i++) {
        uint32_t value = _dataMgr->getData()->values[i];
        bool lock = (value & 0x80000000) > 0;
        if (lock) {
            value &= 0x7FFFFFFF;
        }

        LOGD("ring-storage", "%d: %d", i, value);

        if (value == 0xFFFFFFFF) {
            needClear = true;
        }

        if (value > maxValue && prevValue + 1 == value) {
            LOGD("ring-storage", "found new max value (%d). address: %d", value, i);
            maxValue = value;
            maxValueHasLock = lock;
            maxAddress = i;
        }

        prevValue = value;
    }

    _ptr = (maxAddress + 1) % RING_STORAGE_SIZE;
    _currentValue = maxValue;

    if (maxValueHasLock) {
        _currentValue |= 0x80000000;
    }

    if (needClear) {
        clear();
    }

    LOGD("ring-storage", "load ptr: %d, current value: %d", _ptr, _currentValue);
}

void RingStorage::writeValue(uint32_t value, bool hasLock)
{
    if (hasLock) {
        value |= 0x80000000;
    }

    _dataMgr->getData()->values[_ptr] = value;
    if (_dataMgr->store()) {
        int newPtr = (_ptr + 1) % 100;
        LOGD("ring-storage", "successful write. value: %d, ptr: %d, new ptr: %d", value, _ptr, newPtr);
        _ptr = newPtr;
        _currentValue = value;
    } else {
        LOGE("ring-storage", "failed to EEPROM commit");
    }
}

void RingStorage::clear()
{
    for (int i = 0; i < RING_STORAGE_SIZE; i++) {
        _dataMgr->getData()->values[i] = 0;
    }

    if (!_dataMgr->store()) {
        LOGE("ring-storage", "failed to clear storage");
    } else {
        LOGD("ring-storage", "successful clear storage");
        _ptr = 0;
        _currentValue = 0;
    }
}
