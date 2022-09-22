const {
  EmbedBuilder,
  PermissionFlagsBits,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalBuilder,
} = require("discord.js");

module.exports = {
  id: "feedback",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("feedbackfinale")
      .setTitle("Send us Feedback");

    const ratepeep = new TextInputBuilder()
      .setCustomId("ratepeep")
      .setLabel("Rate peep from 1-10 (1-Bad, 5-Okay, 10-Good)")
      .setPlaceholder("1-10")
      .setRequired(true)
      .setMaxLength(2)
      .setMinLength(1)
      .setStyle(TextInputStyle.Short);
    const whatrank = new TextInputBuilder()
      .setCustomId("whatrank")
      .setLabel("As what did you find Peep")
      .setPlaceholder("Member, Moderator, Server Owner, or anything else")
      .setRequired(true)
      .setMaxLength(50)
      .setMinLength(1)
      .setStyle(TextInputStyle.Paragraph);
    const recommend = new TextInputBuilder()
      .setCustomId("recommend")
      .setLabel("Do you recommend using Peep?")
      .setPlaceholder("Yes / No and why?")
      .setRequired(true)
      .setMaxLength(100)
      .setMinLength(1)
      .setStyle(TextInputStyle.Paragraph);
    const anythingelse = new TextInputBuilder()
      .setCustomId("anythingelse")
      .setLabel("Do you have anything else do say?")
      .setPlaceholder("I have used this bot since blah blah blah")
      .setMaxLength(500)
      .setMinLength(1)
      .setStyle(TextInputStyle.Paragraph);

    const ratepeepComponent = new ActionRowBuilder().addComponents(ratepeep);
    const whatrankComponent = new ActionRowBuilder().addComponents(whatrank);
    const recommendComponent = new ActionRowBuilder().addComponents(recommend);
    const anythingelseComponent = new ActionRowBuilder().addComponents(anythingelse);

    modal.addComponents(ratepeepComponent, whatrankComponent, recommendComponent, anythingelseComponent);

    await interaction.showModal(modal);
  },
};
