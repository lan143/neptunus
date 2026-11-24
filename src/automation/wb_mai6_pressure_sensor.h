#pragma once

#include <device/wb_mai6.h>
#include <sensor/wb_mai6_pressure.h>

namespace Neptunus
{
    // WB-MAI6 pressure sensor that rejects channel error sentinels/out-of-range
    // raw values and exposes a last-poll timestamp so consumers can refuse stale
    // readings. Derives from the ed-common sensor to reuse its init/MQTT/
    // discovery plumbing unchanged; only the raw read path is replaced.
    //
    // Base getValueInternal() is protected and the base's calibration fields are
    // private, so this class keeps its own copies of what it needs to validate.
    class ValidatedWBMAI6Pressure : public EDCommon::Sensor::WBMAI6Pressure
    {
    public:
        ValidatedWBMAI6Pressure(
            EDWB::MAI6* device,
            uint8_t channel,
            float_t maxPhysicalValue = 10.0f,
            uint16_t sensorType = 0x1302,
            uint16_t minCalculatedValue = 0,
            uint16_t maxCalculatedValue = 1000
        )
            : EDCommon::Sensor::WBMAI6Pressure(
                device,
                channel,
                maxPhysicalValue,
                sensorType,
                minCalculatedValue,
                maxCalculatedValue
            )
            , _device(device)
            , _channel(channel)
            , _maxPhysicalValue(maxPhysicalValue)
            , _minCalculatedValue(minCalculatedValue)
            , _maxCalculatedValue(maxCalculatedValue)
        {
        }

        // Last reading only if it is valid and no older than maxAgeUs. Used by
        // automation consumers so a stalled poll degrades to invalid instead of
        // freezing a stale pressure.
        std::pair<float_t, bool> getFreshReading(int64_t maxAgeUs) const;

    protected:
        std::pair<float_t, bool> getValueInternal() override;

    private:
        void recordReading(float_t value, bool valid);

    private:
        EDWB::MAI6* _device = nullptr;
        uint8_t _channel = 0;
        float_t _maxPhysicalValue = 10.0f;
        uint16_t _minCalculatedValue = 0;
        uint16_t _maxCalculatedValue = 1000;

        // Written on the loop task by getValueInternal(); read by the same task
        // and by the async web task. The base sensor already exposes its
        // unsynchronized cached value the same way.
        std::pair<float_t, bool> _lastReading = {0.0f, false};
        int64_t _lastReadingTimeUs = 0;
    };
} // namespace Neptunus
