#pragma once

#include <counter/storage.h>

#include "storage.h"

class RingStoragePersistence : public EDCommon::Counter::CounterPersistence
{
public:
    RingStoragePersistence(RingStorage* ringStorage) : _ringStorage(ringStorage) {}

    void load(uint32_t& value, bool& lock) override
    {
        value = _ringStorage->getCurrentValue();
        lock = _ringStorage->hasLock();
    }

    void save(uint32_t value, bool lock) override
    {
        _ringStorage->writeValue(value, lock);
    }

    void clear() override
    {
        _ringStorage->clear();
    }

private:
    RingStorage* _ringStorage = nullptr;
};
