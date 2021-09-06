const { Client } = require("discord.js");

const CommandHandler = require("./CommandHandler");
const EventHandler = require("./EventHandler");
const CommandLoader = require("./CommandLoader");

const Utils = require("./Utils");
const Settings = require("./Settings");

const { OWNER_ID, ADMINS_ID } = process.env;

module.exports = class DoggoClient extends Client {
  constructor({ ownerId, admins, intents }) {
    super({
      ownerId: ownerId || OWNER_ID,
      admins: admins || ADMINS_ID,
      intents,
    });
  }

  async login(token) {
    this.Settings = new Settings(this);
    this.Utils = new Utils(this);

    new CommandLoader(this, token);
    new CommandHandler(this);
    new EventHandler(this);

    // Login on Discord
    return super.login(token);
  }
};
