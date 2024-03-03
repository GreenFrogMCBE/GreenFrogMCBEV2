import { ServerConfig } from "./src/config/Config.mjs"
import { Language } from "./src/config/Language.mjs"
import { Address } from "./src/network/Address.mjs"
import { Logger } from "./src/logger/Logger.mjs"
import { Server } from "./src/Server.mjs"

if (parseFloat(process.versions.node) < 14) {
    throw new Error("Your Node.JS version is too old, please update to the latest one from https://nodejs.org/")
}

ServerConfig.create()
ServerConfig.init()

Language.init()

Logger.info(Language.get_key("server.loading"))

const server = new Server(
    new Address(
        ServerConfig.get("host"),
        ServerConfig.get("port")    
    )
)

server.start()