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
      .addField("**Bot**","```yml\nName: @Olivia ✨#1700[924588675155755039]\nDiscord.js: v13.5.0\nNode.js: 16.6.1\n```")
     .addField("**General**","```yml\nServers: " + client.guilds.cache.size+" Servers\nUsers: " + mcount+" Users\n```")
     .addField("**Developers**","```yml\nName: gzR41N#9332 [755566952449310842] \nName: @Aurel#3353 [915956372204552233]```")
      await interaction.followUp({embeds: [embed]})
    }
}
