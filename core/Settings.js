module.exports = class Settings {
  constructor(client) {
    this.client = client;
  }

  // Basic bot required informations
  client_id = "726497084059942933";
  default_guild_id = "868169366259257365"; // @Note: The default guild id is for testing slash commands before you set it to global
};
