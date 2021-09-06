const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const informations = new SlashCommandBuilder()
  .setName("doggo")
  .setDescription("Send a doggo photo.");

module.exports = {
  data: informations,
  async execute(interaction, client) {
    // Generate the embed
    const embed = new MessageEmbed();
    embed.setImage(await client.Utils.getDoggo());
    embed.setColor(`RANDOM`);

    // Generate the button
    const row = new MessageActionRow();
    row.addComponents(
      new MessageButton()
        .setCustomId(`next_${interaction.member.id}`)
        .setLabel(`Next ▶️`)
        .setStyle(`PRIMARY`)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
      ephemeral: false,
    });
  },
};
