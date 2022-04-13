const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const fetch = require("node-fetch");
const Discord = require('discord.js')

module.exports = {
    name: "lyrics",
    category: "Information",
    aliases: [ "ly" ],
    description: "Lyrics Of Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     const getsong = args.join(" ")
    const NoSong = new Discord.MessageEmbed()
.setTitle(`❌Error.exe❌`)
.setDescription(`Give Me A Song Name To Search The Lyrics \n Use Like This =  <prefix>lyrics Faded`)
.setColor(`RED`)
.setTimestamp()
    if(!getsong) return message.channel.send({embeds :[NoSong]})
    fetch(
      `https://some-random-api.ml/lyrics?title=${encodeURIComponent(getsong)}`
    ).then((res) => {
      res.json().then((resulut) => {
        message.channel.send({
          embeds: [
            new MessageEmbed()
              .setColor("AQUA")
              .setTitle(`${resulut.title}`)
              .setURL(resulut.links.genius)
              .setThumbnail(resulut.thumbnail.genius)
              .setDescription(`>>> ${String(resulut.lyrics).substr(0, 4000)}`)
              .setTimestamp()
              .setFooter({
                text: `Thank You ${message.author.username} For Staying With Me`,
                iconURL: message.guild.iconURL({ dynamic: true }),
              })
          ]
        });
      });
    });
    }
}