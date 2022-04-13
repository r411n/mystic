const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "replay",
    aliases: ["rp"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
        const msg = await message.channel.send(`<a:loading:937596949211783168> **Loading please wait...**`);

		const player = client.manager.get(message.guild.id);
		if (!player) return msg.edit("No song/s currently playing within this guild.");
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        await player.seek(0);

        const embed = new MessageEmbed()
            .setDescription("\`⏮\` | **Song has been:** `Replay`")
            .setColor('#000001');

        msg.edit({ content: " ", embeds: [embed] });
            console.log(chalk.magenta(`[COMMAND] Replay used by ${message.author.tag} from ${message.guild.name}`));
    }
}