#include <ArduinoJson.h>
#include <Json.h>

#include "command.h"

bool Command::unmarshalJSON(const char* data)
{
    return EDUtils::parseJson(data, [this](JsonObject root) {
        if (root.containsKey(F("autoMode"))) {
            _autoMode = std::make_pair(root[F("autoMode")].as<std::string>() == "true", true);
        }

        if (root.containsKey(F("fillingBarrelValve"))) {
            _fillingBarrelValve = std::make_pair(root[F("fillingBarrelValve")].as<std::string>() == "true", true);
        }

        if (root.containsKey(F("bypassValve"))) {
            _bypassValve = std::make_pair(root[F("bypassValve")].as<std::string>() == "true", true);
        }

        if (root.containsKey(F("pumpStation"))) {
            _pumpStation = std::make_pair(root[F("pumpStation")].as<std::string>() == "true", true);
        }

        if (root.containsKey(F("drainagePump"))) {
            _drainagePump = std::make_pair(root[F("drainagePump")].as<std::string>() == "true", true);
        }

        return true;
    });
}
