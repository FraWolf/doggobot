module.exports = {
  name: "ready",
  async execute(client, MessageEmbed) {
    // Starting debug
    console.log(
      `[DISCORD] Ready as ${client.user.tag} - Loaded ${client.commands.size} commands and ${client.events.size} events`
    );

    // Setup bot presence
    client.user.setPresence({
      activities: [{ type: "PLAYING", name: "with a doggo" }],
      status: "online",
    });
  },
};
