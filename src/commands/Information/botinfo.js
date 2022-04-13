const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "botinfo",
    category: "Information",
    aliases: [ "binfo" ],
    description: "See description about this project",
    args: false,
    usage: "<prefix>botinfo",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

      let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
      const embed = new MessageEmbed()
      .setTitle("About Me")
      .addField("**Bot**","```yml\nName: Rexo Music#6135[955746407472594944]\nDiscord.js: v13.5.0\nNode.js: 16.6.1\n```")
     .addField("**General**","```yml\nServers: " + client.guilds.cache.size+" Servers\nUsers: " + mcount+" Users\n```")
     .addField("**Developers**","```yml\nName: IMMORTAL [senpai]#0001 [928158667017191454] \nName: </JARVIS>#0773 [902883391421153290]```")
      message.channel.send({embeds: [embed]})
    }}



    //suno
    // jo bollna ho yaha bolna
    // dc cut kar diya
    //ok
    //i will go soon