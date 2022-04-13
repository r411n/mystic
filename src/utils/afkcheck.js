const client = require('../../index.js')
const afkSchema = require('../../schema/afkSchema')
const Discord = require('discord.js')

client.on('messageCreate', async(message) => {
    if(message.author.bot) return;



        const data = await afkSchema.findOne({
          Guild: message.guild.id
        });

        if(data) {
          const mentionedUser = message.mentions.users.first()

          if(mentionedUser.user.id == data.User)
            const embed = new Discord.MessageEmbed()
            .setTitle(`${mentionedUser.user.tag} is currently AFK!`)
            .setColor("RANDOM")
            .setDescription(`Reason: ${data.Reason} \n Since: <t:${Math.round(data.Date / 1000)}:R>`)

            return message.channel.send({embeds: [embed]})
        }
    
})