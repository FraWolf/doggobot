const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const informations = new SlashCommandBuilder()
  .setName("info")
  .setDescription("Informative command.");

module.exports = {
  data: informations,
  async execute(interaction, client) {
    // Get owner
    const owner = await client.users.fetch(process.env.OWNER_ID);

    // Generate the embed
    const embed = new MessageEmbed();
    embed.setAuthor(client.user.tag, client.user.avatarURL());
    embed.setDescription(
      [
        `*Woof*! I'm **${client.user.username}** a bot created by **${owner.username}#${owner.discriminator}** with the only purpose of sending cute doggos photos.`,
        `That's all, thanks for using **${client.user.username}**! *mlem*`,
      ].join("\n")
    );
    embed.addField(
      "Credits",
      "Thanks to [shibe.online](https://shibe.online/) for the incredible doggos!"
    );
    embed.setThumbnail(client.user.avatarURL());
    embed.setColor(`RANDOM`);

    // Generating invite buttons
    const row = new MessageActionRow();
    row.addComponents(
      new MessageButton()
        .setLabel("Invite me! :)")
        .setStyle(`LINK`)
        .setURL(
          `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot%20applications.commands`
        )
    );

    return interaction.reply({ embeds: [embed], components: [row] });
  },
};
