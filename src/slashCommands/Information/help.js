const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "help",
    description: "Return all commands, or one specific command",
    owner: false,

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction, prefix) => {
        await interaction.deferReply({
          ephemeral: false
        });
  const embed = new MessageEmbed()
    .setTitle(`${client.user.username} Help`)
    .setDescription(`**Hey <@${message.author.id}>, This is <@!924588675155755039> We Provide Quality Music My Prefix In**\n**This Server is \`${prefix}\`**\n**A Discord Music Bot With Many Awesome Features, Support Many Sources.**\n \n**Commands Categories Are Listed Below**\n \n<:music:953027631765422100> \`:\` **Music**\n🎛️ \`:\` **Filters**\n<:op_question:953199712448700456> \`:\` **Information**\n<:setingg:930041536488538182> \`:\` **Settings**\n:open_file_folder: \`:\` **All Commands**\n \n**● Select Category From Below Menu**\n \n`)//dont do anythin
    .addField("Important links",`[Invite me](https://discord.com/api/oauth2/authorize?client_id=924588675155755039&permissions=8&scope=bot%20applications.commands) || [Support Server](https://discord.gg/UybeVq66hF)`)
    .setImage("https://share.creavite.co/vuzr39a1JLR1Tg3h.gif")
    .setThumbnail('https://cdn.discordapp.com/avatars/910792227591163945/3bb282a8f43c062a8490222a96d3dde3.webp')
    .setColor("WHITE")
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
    
    let but1 = new MessageButton().setCustomId("home").setLabel("Home").setStyle("SUCCESS").setEmoji('🏠')
  
    let but2 = new MessageButton().setCustomId("music").setLabel("Music").setStyle("PRIMARY").setEmoji('953027631765422100')
  
    let but3 = new MessageButton().setCustomId("info").setLabel("Info").setStyle("PRIMARY").setEmoji('937596933168578590');

    let but4 = new MessageButton().setCustomId("config").setLabel("Config").setStyle("PRIMARY").setEmoji('930041536488538182');

     let _commands;
     let editEmbed = new MessageEmbed();
     
     await interaction.editReply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] });

    const collector = interaction.channel.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === interaction.member.user.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${interaction.member.user.tag}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
        await interaction.editReply({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true))] }).catch(() => {});
     });
    collector.on('collect', async (b) => {
      if(!b.deferred) await b.deferUpdate()
         if(b.customId === "home") {
           return await interaction.editReply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        if(b.customId === "music") {
         _commands = client.commands.filter((x) => x.category && x.category === "Music").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Music Commands").setFooter(`Total ${_commands.length} music commands.`);
 
           return await interaction.editReply({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
         if(b.customId == "info") {
         _commands = client.commands.filter((x) => x.category && x.category === "Information").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Information Commands").setFooter(`Total ${_commands.length} Information commands.`)
          return await interaction.editReply({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         }
         if(b.customId == "config") {
         _commands = client.commands.filter((x) => x.category && x.category === "Config").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Config Commands").setFooter(`Total ${_commands.length} Config commands.`)
          return await interaction.editReply({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         
        }
     });
   }
 }
