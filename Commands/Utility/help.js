const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SelectMenuBuilder,
  Client,
} = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Sends the command list!"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client, args) {
    const dirs = fs.readdirSync("./Commands");
    const slashCommands = await client.application.commands.fetch();

    const Buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("feedback")
        .setLabel("Feedback")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setLabel("Vote")
        .setStyle(ButtonStyle.Link)
        .setURL("https://top.gg/bot/804914348778717255/vote"),
      new ButtonBuilder()
        .setLabel("ToS")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/guidelines"),
      new ButtonBuilder()
        .setLabel("Privacy")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/guidelines")
    );

    const embedMsg = new EmbedBuilder()
      .setTitle("Help Command")
      .setDescription("Select an option to get the command list of. Only one option can be selected.")
      .addFields(
        {
          name: `Total Command Categories`,
          value: `${dirs.length}`,
          inline: true,
        },
        {
          name: `Global Slash Commands`,
          value: `${slashCommands.size}`,
          inline: true,
        }
      )
      .setColor("Blurple");

    let helpMenu = new ActionRowBuilder().addComponents(
      new SelectMenuBuilder()
        .setCustomId("helpMenu")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("Select a category")
    );

    fs.readdirSync("./Commands").forEach((command) => {
      helpMenu.components[0].addOptions({
        label: `${command}`,
        description: `Command list for ${command}`,
        value: `${command}`,
      });
    });

    // for (const folders of commandFolder) {
    //   helpMenu.components[0].addOptions({
    //     label: `${folders}`,
    //     description: `Command list for ${folders}`,
    //     value: `${folders}`,
    //   });
    // }

    interaction.reply({
      embeds: [embedMsg],
      components: [helpMenu, Buttons],
    });
  },
};
