const { Client, Message, MessageEmbed } = require("discord.js");
const Color = ("2F3136");

module.exports = {
  name: "bug",
  description: "send bug report to owner",
  aliases: ["report"],
  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String{}} args
  */
  run: async(client, message, args) => {
    const owner = client.channels.cache.get('958190055950778438');

    const query = args.join(" ");
    if(!query) return message.reply('Please specify a query/bug');

const reportEmbed = new MessageEmbed()
    .setTitle('New Bug Report!!')
    .addField('Author', message.author.toString(), true)
    .addField('Guild', message.guild.name, true)
  .addField('Report', query)
  .setColor(Color)

    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp();

    owner.send(reportEmbed);

      }
} 

 bug report command
