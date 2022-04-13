const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
  await message.reply({ content: "<a:loading:920666789459951656> Pinging..." }).then(async (msg) => {
  const ping = msg.createdAt - message.createdAt;
  const api_ping = client.ws.ping;

  const PingEmbed = new MessageEmbed()
    .setAuthor({ name: "Pong", iconURL: client.user.displayAvatarURL()})
    .setColor(client.embedColor)
    .addField("Bot Latency <a:nping:936881101656444938>", `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, true)
    .addField("API Latency <a:nping:936881101656444938>", `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, true)
    .setFooter({ text: `Requested by ${message.author.username}`, iconURL:  message.author.avatarURL({ dynamic: true })})
    .setTimestamp();

  await msg.edit({
    content: "**Here The Mytic's Ping **\<a:nping:936881101656444938>",
    embeds: [PingEmbed]
  })
 })
 }
}