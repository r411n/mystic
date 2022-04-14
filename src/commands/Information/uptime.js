const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "uptime",
    category: "Information",
    description: "Check Bot's Uptime",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      await message.reply({ content: "Sending..." }).then(async (msg) => {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
      const embed = new MessageEmbed()
      .setAuthor({ name: "", iconURL: client.user.displayAvatarURL()})
    .setColor(client.embedColor)
      .addField("Olivia's Uptime", `\`\`\`yml\n${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\n\`\`\``, true)
      .setColor("WHITE")
      .setDescription("")
          .setFooter({ text: `Requested by ${message.author.username}`, iconURL:  message.author.avatarURL({ dynamic: true })})
      .setTimestamp();
      await msg.edit({
        content: ":chart_with_downwards_trend Here Is The Uptime Of The Bot",
    embeds: [embed]
      })
    })
    }
}

    
    
