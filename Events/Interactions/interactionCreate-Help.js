const {
  Client,
  ChatInputCommandInteraction,
  InteractionType,
  EmbedBuilder,
} = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "interactionCreate",
  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (interaction.isSelectMenu) {
      if (interaction.customId === "helpMenu") {
        const selection = interaction.values[0];
        const commands = fs
          .readdirSync(`./Commands/${selection}`)
          .filter((file) => file.endsWith(".js"))
          .join(" ")
          .split(".js");

        function capitalizeFL(str) {
          const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
          return capitalized;
        }

        const embed = new EmbedBuilder()
          .setTitle(`Command list for ${selection}`)
          .setDescription(`\`\`\`${commands}\`\`\``)
          .setColor("Blurple")
          .addFields({
            name: `${config.emoji_StarIcon} Command Count`,
            value: `${commands.length - 1} command(s)`,
          });

        await interaction.reply({
          embeds: [embed],
          ephemeral: true,
        });
      }
    }
  },
};
