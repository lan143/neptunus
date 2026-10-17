#include <ArduinoJson.h>
#include <Json.h>

#include "command.h"

bool Command::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        if (root.containsKey(F("autoMode"))) {
            _autoMode = std::make_pair(root[F("autoMode")].as<std::string>() == "true", true);
        }

        return true;
    });
}
