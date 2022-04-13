const Discord = require("discord.js");

module.exports = {
 name: "say",
 aliases: [],
 description: "Send a message using bot",
 category: "Moderation",
 usage: "say <channel> <message>",
 run: async (client, message, args, prefix) => {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
   message.delete();
   const taggedChannel = await message.mentions.channels.first();
   if (taggedChannel) {
    await taggedChannel.send(args.join(" ").replace(taggedChannel, ""));
   } else {
    const saymessage = await args.join(" ");
    if (saymessage.length >= 1) {
     await message.channel.send(saymessage + "\n\n~Message sent by <@" + message.author + ">");
    } else {
     await message.channel.send({
      embed: {
       color: 16734039,
       description: "✨ | You need to enter a message!",
      },
     });
    }
   }
  } else {
   message.channel.send({
    embed: {
     color: 16734039,
     description: "<:error:860884617770303519> | You don't have permission to send this message by me!",
    },
   });
  }
 },
};