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
      .setPlaceholder("Olivia Help Menu")
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
          emoji: "953027631765422100",
        },
        {
          label: "Filters",
          description: "",
          value: "filters",
          emoji: "🎛️",//add comma otherwis it will not work
        }, {
          label: "Info",
          description: "",
          value: "Info",
          emoji: "953199712448700456",
        },
        {
          label: "Settings",
          description: "",
          value: "setting",
          emoji: "930041536488538182",
        },
        {
          label: "All Commands",
          description: "",
          value: "cmds",
          emoji: "📁",
        },
      ])
    )
   


    let embedm = new MessageEmbed()
    .setTitle("Help Menu")
    .setDescription(`**Hey <@${message.author.id}>, This is <@!924588675155755039> We Provide Quality Music My Prefix In**\n**This Server is \`${prefix}\`**\n**A Discord Music Bot With Many Awesome Features, Support Many Sources.**\n \n**Commands Categories Are Listed Below**\n \n<:music:953027631765422100> \`:\` **Music**\n🎛️ \`:\` **Filters**\n<:op_question:953199712448700456> \`:\` **Information**\n<:setingg:930041536488538182> \`:\` **Settings**\n:open_file_folder: \`:\` **All Commands**\n \n**● Select Category From Below Menu**\n \n`)//dont do anythin
    .addField(":link: Important links",`[Invite me](https://discord.com/api/oauth2/authorize?client_id=924588675155755039&permissions=8&scope=bot%20applications.commands) - [Support Server](https://discord.gg/UybeVq66hF)`)
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
.setDescription('`help`, `invite`, `node`, `ping`, `status`, `botinfo`,`uptime`')
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
.setDescription('<:music:953027631765422100> **Music commands! [19]**\n`clearqueue`, `filters`, `grab`, `join`, `leave`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `remove`, `resume`, `search`, `seek`, `shuffle`, `skip`, `skipto`, `stop`, `volume`, `lyrics`\n \n🎛️ **Filters [9]**\n`Bass`, `Nightcore`, `Pitch`,`Distort`, `Equalizer`, `8D`, `Bass Boost`, `Speed`, `Vaporwave`\n \n<:op_question:953199712448700456> **Info Commands [7]**\n`about`, `help`, `invite`, `node`, `ping`, `status`, `botinfo`, `uptime`\n \n<:setingg:930041536488538182> **Settings [3]**\n`24/7`, `setprefix`, `eval`')
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
