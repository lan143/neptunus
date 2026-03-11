#include <log/log.h>

#include "relay_pcf8574.h"

bool RelayPCF8574P::changeState(bool enable)
{
    _driver->write(_channel, enable ? LOW : HIGH);

    return true;
}

std::pair<bool, bool> RelayPCF8574P::isEnabled() const
{
    assert(_driver != nullptr);
    LOGD("isEnabled", "driver ptr: %p, channel: %d\n", _driver, _channel);

    return std::make_pair(_driver->read(_channel), true);
}
