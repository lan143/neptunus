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
}
