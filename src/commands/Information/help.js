//bye i have work
const { MessageEmbed} = require("discord.js");
const{ Discord, MessageActionRow,MessageButton, MessageSelectMenu} = require("discord.js")
module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "help join, help play",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
   const name = client.user.username
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.reply("There is no command in the bot with name **" + args[0] + "**.");
      }

      let embedh = new MessageEmbed()
        .setTitle(command.name[0].toUpperCase() + command.name.slice(1) + " Command")
       
        .addField("Command Description", command.description ? "`[ " +command.description + " ]`" : "Not Provided")
        .addField("Command usage", command.usage ? "`[ " +prefix+command.usage + " ]`" : "Not Provided")
        .setColor("WHITE")


      if(command.aliases && command.aliases.length) embedh.addField("Aliases", command.aliases.map(x => "`[ " + x +" ]`").join(", "))
      if(command.botPermission && command.botPermission.length) embedh.addField("Bot Permissions", command.botPermission.map(x => "`" + x +"`").join(", "), true)
      if(command.authorPermission && command.authorPermission.length) embedh.addField("Author Permissions", command.authorPermission.map(x => "`" + x +"`").join(", "), true)

      return message.channel.send({embeds: [embedh]});
    } else {


 const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Rexo Music Help Menu")
      .addOptions([
        {
          label: "Home",
          description: "",
          value: "home",
          emoji: "936563650561462312",//add comma otherwis it will not work
        },
        {
          label: "Music",
          description: "",
          value: "music",
          emoji: "936560999350284298",
        },
        {
          label: "Filters",
          description: "",
          value: "filters",
          emoji: "939182602206732348",//add comma otherwis it will not work
        }, {
          label: "Info",
          description: "",
          value: "Info",
          emoji: "935131554810855424",
        },
        {
          label: "Settings",
          description: "",
          value: "setting",
          emoji: "936560998146515004",
        },
        {
          label: "All Commands",
          description: "",
          value: "cmds",
          emoji: "936566566173167656",
        },
      ])
    )
   


    let embedm = new MessageEmbed()
    .setTitle("Help Menu")
    .setDescription(`**Hey <@${message.author.id}>, This is <@!955746407472594944> We Provide Quality Music My Prefix In**\n**This Server is \`${prefix}\`**\n**A Discord Music Bot With Many Awesome Features, Support Many Sources.**\n \n**Commands Categories Are Listed Below**\n \n<a:music:948231411712798781> \`:\` **Music**\n<a:filter2:937596938805706784> \`:\` **Filters**\n<a:infor22:937596933168578590> \`:\` **Information**\n<a:setting2:937596943297810443> \`:\` **Settings**\n<:Commands:937596931973189652> \`:\` **All Commands**\n \n**● Select Category From Below Menu**\n \n`)//dont do anythin
    .addField("<:invite:940480668834627614> Important links",`[Invite me](https://discord.com/oauth2/authorize?client_id=955746407472594944&permissions=8&scope=bot%20applications.commands) - [Support Server](https://discord.gg/6udBqAnM8X)`)
    .setImage("")
    .setThumbnail('')
    .setColor("WHITE")

    let sendmsg = await message.channel.send({embeds : [embedm], components:[row]})


    
let embed1 = new MessageEmbed()
    .setTitle("Music commands!")
    .setDescription("`clearqueue`, `filters`, `grab`, `join`, `leave`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `remove`, `resume`, `search`, `seek`, `shuffle`, `skip`, `skipto`, `stop`, `volume`, `lyrics`")
    .setColor("WHITE")
    .setImage("")
    .setThumbnail("")
let embed2 = new MessageEmbed()
.setTitle("Info Commands!")
.setImage("")
.setDescription('`about`, `help`, `invite`, `node`, `ping`, `status`, `botinfo`,`uptime`')
.setColor("WHITE")
.setThumbnail("")

let embed3 = new MessageEmbed()
.setTitle("Filters")
.setImage("")
.setDescription('`Bass`, `Nightcore`, `Pitch`,`Distort`, `Equalizer`, `8D`, `Bass Boost`, `Speed`, `Vaporwave`')
.setThumbnail("")
.setColor("WHITE")

let embed4 = new MessageEmbed()
.setTitle("Settings")
.setImage("")
.setDescription('`24/7`, `setprefix`, `eval`')
.setThumbnail("")
.setColor("WHITE")

let embed5 = new MessageEmbed()
.setTitle("All Commands")
.setImage("")
.setDescription('<a:music:948231411712798781> **Music commands! [19]**\n`clearqueue`, `filters`, `grab`, `join`, `leave`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `remove`, `resume`, `search`, `seek`, `shuffle`, `skip`, `skipto`, `stop`, `volume`, `lyrics`\n \n<a:filter2:937596938805706784> **Filters [9]**\n`Bass`, `Nightcore`, `Pitch`,`Distort`, `Equalizer`, `8D`, `Bass Boost`, `Speed`, `Vaporwave`\n \n<a:infor22:937596933168578590> **Info Commands [7]**\n`about`, `help`, `invite`, `node`, `ping`, `status`, `botinfo`, `uptime`\n \n<a:setting2:937596943297810443> **Settings [3]**\n`24/7`, `setprefix`, `eval`')
.setThumbnail("")
.setColor("WHITE")



const collector = message.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})

collector.on("collect", async (collected) => {
const value = collected.values[0]

if(value === "home") {
  collected.update({embeds:[embedm]})
}

if(value === "music") {
  collected.update({embeds:[embed1]})
}

if(value === "Info") {
  collected.update({embeds:[embed2]})
}

if(value === "filters") {
  collected.update({embeds:[embed3]})
}

if(value === "setting") {
  collected.update({embeds:[embed4]})
}

if(value === "cmds") {
  collected.update({embeds:[embed5]})
}


})

  
 
 
    }
 
 }}