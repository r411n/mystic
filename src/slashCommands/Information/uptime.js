const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "uptime",
    description: "Sends Olivia's Uptime",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
        await interaction.editReply({ content: "Sending Uptime..." }).then(async () => {
          let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  await interaction.editReply({
                content: "<a:uptime:937596957856243722> **Here Is The Uptime Of The Bot**",
                embeds: [new MessageEmbed().setColor(client.embedColor).setFooter({text: `Requested by ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })}).addField("**Mystic's Uptime**", `\`\`\`yml\n${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\n\`\`\``, true).setTimestamp()]
  })
        })
    }
}
