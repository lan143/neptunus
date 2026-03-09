#include <ArduinoJson.h>
#include <Json.h>

#include "command.h"

bool Command::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        return true;
    });
}
