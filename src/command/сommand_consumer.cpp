#include <Arduino.h>
#include <esp_log.h>

#include "command_consumer.h"
#include "command.h"
#include "log/log.h"

void CommandConsumer::consume(std::string payload)
{
    LOGD("command_consumer", "handle");

    Command command;
    if (!command.unmarshalJSON(payload.c_str())) {
        LOGE("command_consumer", "cant unmarshal command");
        return;
    }

    auto isAutoModeEnable = command.isAutoModeEnable();
    if (isAutoModeEnable.second) {
        _automation->changeAutoModeEnable(isAutoModeEnable.first);
    }

    auto isFillingBarrelValveOpen = command.isFillingBarrelValveOpen();
    if (isFillingBarrelValveOpen.second) {
        _automation->changeFillingBarrelValveOpen(isFillingBarrelValveOpen.first);
    }

    auto isBypassValveOpen = command.isBypassValveOpen();
    if (isBypassValveOpen.second) {
        _automation->changeBypassValveOpen(isBypassValveOpen.first);
    }

    auto isPumpStationEnable = command.isPumpStationEnable();
    if (isPumpStationEnable.second) {
        _automation->changePumpStationEnable(isPumpStationEnable.first);
    }

    auto isDrainagePumpEnable = command.isDrainagePumpEnable();
    if (isDrainagePumpEnable.second) {
        _automation->changeDrainagePumpEnable(isDrainagePumpEnable.first);
    }
}
