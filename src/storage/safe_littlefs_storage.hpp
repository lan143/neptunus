#pragma once

#include <esp_log.h>
#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>

#include <string>
#include <utility>

#include <storage/littlefs_storage.hpp>

namespace Neptunus
{
    namespace storage_detail
    {
        // Deliberately NOT a function-local static inside the class template: a
        // template member's static would be one mutex per T, so the Config store
        // and the MeterState store would still race. An inline function's local
        // static has a single instance for the whole firmware, shared by every
        // SafeStorageLittleFS instantiation across translation units.
        inline SemaphoreHandle_t littlefsMutex()
        {
            static SemaphoreHandle_t mutex = xSemaphoreCreateMutex();
            return mutex;
        }
    }

    // Serializes every LittleFS store() in the firmware and gives each storage
    // its own temp file, so the web/async task saving the config cannot
    // interleave with the main loop task writing meter or automation state.
    // File content and layout are byte-for-byte identical to
    // EDConfig::StorageLittleFS; data is still published only by rename.
    template<class T>
    class SafeStorageLittleFS : public EDConfig::StorageLittleFS<T>
    {
    public:
        explicit SafeStorageLittleFS(std::string fileName)
            : EDConfig::StorageLittleFS<T>(fileName), _storageFileName(fileName)
        {
        }

        bool store(std::pair<T*, uint16_t> entity) override
        {
            // One mutex shared by every storage instance serializes config saves
            // from the web/async task against meter and automation writes from the
            // main loop task. The per-file temp name below makes cross-file
            // interleaving impossible even without the lock; together they mean a
            // store failure can never leave a partially written target file.
            // Hold time is one small flash write, milliseconds.
            SemaphoreGuard guard(storage_detail::littlefsMutex());
            if (!guard.locked())
            {
                ESP_LOGE("storage", "failed to take storage mutex");
                return false;
            }

            T* data = entity.first;
            uint16_t checksum = entity.second;

            std::string tmp = _storageFileName + ".tmp";

            File file = LittleFS.open(tmp.c_str(), "wb");
            if (!file)
            {
                ESP_LOGE("storage", "failed to open tmp file for write");
                return false;
            }

            if (file.write(reinterpret_cast<uint8_t*>(data), sizeof(T)) != sizeof(T))
            {
                ESP_LOGE("storage", "failed to write data to file");
                file.close();
                return false;
            }

            if (file.write(reinterpret_cast<uint8_t*>(&checksum), sizeof(uint16_t)) != sizeof(uint16_t))
            {
                ESP_LOGE("storage", "failed to write checksum to file");
                file.close();
                return false;
            }

            file.close();

            if (!LittleFS.rename(tmp.c_str(), _storageFileName.c_str()))
            {
                ESP_LOGE("storage", "failed to rename tmp file to %s", _storageFileName.c_str());
                return false;
            }

            return true;
        }

    private:
        struct SemaphoreGuard
        {
            explicit SemaphoreGuard(SemaphoreHandle_t mutex)
                : _mutex(mutex)
            {
                _locked = (_mutex != nullptr && xSemaphoreTake(_mutex, portMAX_DELAY) == pdTRUE);
            }

            ~SemaphoreGuard()
            {
                if (_locked)
                {
                    xSemaphoreGive(_mutex);
                }
            }

            SemaphoreGuard(const SemaphoreGuard&) = delete;
            SemaphoreGuard& operator=(const SemaphoreGuard&) = delete;

            bool locked() const { return _locked; }

            SemaphoreHandle_t _mutex;
            bool _locked = false;
        };

        // Own copy of the target name: the base member is private. Named
        // differently to avoid shadowing it (-Wshadow is enabled).
        std::string _storageFileName;
    };
}
