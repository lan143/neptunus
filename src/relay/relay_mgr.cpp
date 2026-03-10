#include "relay_mgr.h"

#include "relay_pcf8574.h"

void RelayMgr::init()
{
    for (uint8_t i = RELAY_TYPE_FILLING_BARREL; i < RELAY_TYPE_MAX; i++) {
        uint8_t channel;
        switch (i) {
            case RELAY_TYPE_FILLING_BARREL:
                channel = RELAY_CHANNEL_FILLING_BARREL;
                break;
            case RELAY_TYPE_BYPASS:
                channel = RELAY_CHANNEL_BYPASS;
                break;
            case RELAY_TYPE_PUMP_STATION:
                channel = RELAY_CHANNEL_PUMP_STATION;
                break;
            case RELAY_TYPE_DRAINAGE_PUMP:
                channel = RELAY_CHANNEL_DRAINAGE_PUMP;
                break;
        }

        RelayPCF8574P* relay = new RelayPCF8574P(_driver);
        relay->init(channel);
        _relays[i] = relay;
    }
}
