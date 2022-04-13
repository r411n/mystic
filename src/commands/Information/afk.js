const Discord = require('discord.js')
const afkSchema = require('../../schema/afkSchema')

module.exports = {
    name: "afk",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      const reason = args.join(" ") || 'No Reason Provided'
      const params = {
        Guild: message.guild.id,
        User: message.author.id
      }

      afkSchema.findOne({params}, async(err, data) => {
        if(data) {
            data.delete()
            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription(`<a:gtick:937596950881132605> You are no longer AFK!`).setColor(client.csuccess)]})
        } else {
            new afkSchema({
                Guild: message.guild.id,
                User: message.author.id,
                Reason: reason,
                Date: Date.now()
            }).save()

            message.channel.send({embeds: [new Discord.MessageEmbed().setDescription(`<a:gtick:937596950881132605> You are now AFK for: __**${reason}**__`).setColor(client.csuccess)]})
        }
      })

    }
}