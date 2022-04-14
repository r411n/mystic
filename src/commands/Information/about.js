//////const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "ffjfjfjfjabout",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Source Code")
    .setStyle("LINK")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/35QdxGX8se")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Rexo Music', 'https://cdn.discordapp.com/avatars/910792227591163945/3bb282a8f43c062a8490222a96d3dde3.webp?size=1024')
            .setThumbnail('https://cdn.discordapp.com/avatars/910792227591163945/3bb282a8f43c062a8490222a96d3dde3.webp?size=1024')
            .setColor('#303236')
            .addField('Creator', `\` </JARVIS>#0001, \n IMMORTAL [senpai]#0001 \``, true)
            .addField('Made Using', 'Node.js <a:nodejs:939391431158665276>', true)
            .addField('\u200b',
                `Rexo Music is a 24/7 Music Bot`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}////
