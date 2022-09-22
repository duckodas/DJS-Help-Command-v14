const {
  EmbedBuilder,
  CommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  id: "feedbackfinale",
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const input1 = interaction.fields.getTextInputValue("ratepeep");
    const input2 = interaction.fields.getTextInputValue("whatrank");
    const input3 = interaction.fields.getTextInputValue("recommend");
    const input4 = interaction.fields.getTextInputValue("anythingelse");

    const channel = client.channels.cache.get("1004835588677058650")

    await channel.send({
      content: `Sent By **${interaction.user.username}**`,
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .addFields(
            { name: `What do you rate Peep:`, value: `${input1}` },
            { name: `As what did you find Peep?:`, value: `${input2}` },
            { name: `Do you recommend Peep?:`, value: `${input3}` },
            { name: `anything else?:`, value: `${input4 ? input4 : "Nothing else..."}` }
          ),
      ],
    });

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setDescription(
            `Successfully sent the feedback to the support server!`
          ),
      ],
      ephemeral: true,
    });
  },
};
