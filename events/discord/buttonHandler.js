module.exports = {
  name: "interactionCreate",
  async execute(client, MessageEmbed, interaction) {
    // Check if the interaction is a button
    if (!interaction.isButton()) return;

    // Describing action
    const executor = interaction.member;
    const action = interaction.customId.split("_")[0];
    const userId = interaction.customId.split("_")[1];

    // Ban action
    if (action === "next") {
      // Check if the user has not the permissions
      if (executor.user.id !== userId) {
        return await interaction.reply({
          ephemeral: true,
          content: "You don't have permissions to use this button",
        });
      }

      const newDoggo = await client.Utils.getDoggo();

      // Change the embed properties
      const embed = new MessageEmbed();
      embed.setImage(newDoggo);
      embed.setColor(`RANDOM`);

      // Edit the button
      await interaction.message.edit({ embeds: [embed] });
      await interaction.deferUpdate();
    }
  },
};
