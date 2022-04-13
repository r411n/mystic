const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "botinfo",
    description: "check lavalink server information",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
          ephemeral: false
        });

        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
      const embed = new MessageEmbed()
      .setTitle("About Me")
      .addField("**Bot**","```yml\nName: Mystic Music#9773[910792227591163945]\nDiscord.js: v13.5.0\nNode.js: 16.6.1\n```")
     .addField("**General**","```yml\nServers: " + client.guilds.cache.size+" Servers\nUsers: " + mcount+" Users\n```")
     .addField("**Developers**","```yml\nName: IMMORTAL [senpai]#0001 [928158667017191454] \nName: </JARVIS>#0773 [902883391421153290]```")
      await interaction.followUp({embeds: [embed]})
    }
}