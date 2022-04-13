const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "Invite Mystic Music",
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
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Source Code")
    .setStyle("LINK")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/6udBqAnM8X")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('Rexo Music')
            .setThumbnail('')
             .setColor('#303236')
            .addField('Invite Rexo Music', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
				}