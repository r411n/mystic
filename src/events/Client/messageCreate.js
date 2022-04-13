const { MessageEmbed, Permissions, MessageActionRow, MessageButton } = require("discord.js");
const db = require("../../schema/prefix.js");

module.exports = {
    name: "messageCreate",
    run: async (client, message) => {
   
   if (message.author.bot) return;
   if (!message.guild) return;
    let prefix = client.prefix;
    const channel = message?.channel;
    const ress =  await db.findOne({Guild: message.guildId})
   if(ress && ress.Prefix)prefix = ress.Prefix;

    const invite = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=924588675155755039&permissions=8&scope=bot%20applications.commands`)
      );
    const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(mention)) {
      const embed = new MessageEmbed()
        .setColor('87fdea')
        .setAuthor({ name: 'Mystic Music', iconURL: 'https://cdn.discordapp.com/avatars/910792227591163945/3bb282a8f43c062a8490222a96d3dde3.webp?size=4096', url: 'https://discord.com/api/oauth2/authorize?client_id=910792227591163945&permissions=8&scope=bot%20applications.commands' })
        .setDescription(`**Prefix: \`${prefix}\`**\n**Developer: \gzR41N#9332, Aurel#3353\`**\n**Servers: \`${client.guilds.cache.size}\`**\n \n**Support Server:** If You Need Help Related Me Join My [Support Server](https://discord.gg/35QdxGX8se)
        **Invite:** Invite Me By Clicking [Here](https://discord.com/api/oauth2/authorize?client_id=910792227591163945&permissions=8&scope=bot%20applications.commands) `);
      message.channel.send({embeds: [embed], components: [invite]})
    };
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [ matchedPrefix ] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    if(!message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES)) return await message.author.dmChannel.send({ content: `I don't have **\`SEND_MESSAGES\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.` }).catch(() => {});

    if(!message.guild.me.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)) return;

    if(!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return await message.channel.send({ content: `I don't have **\`EMBED_LINKS\`** permission to execute this **\`${command.name}\`** command.` }).catch(() => {});
    
    const embed = new MessageEmbed()
        .setColor("RED");

    // args: true,
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        
        // usage: '',
        if (command.usage) {
        	reply += `\nUsage: \`${prefix}${command.name} ${command.usage}\``;
        }
        
        embed.setDescription(reply);
        return message.channel.send({embeds: [embed]});
    }

    if (command.permission && !message.member.permissions.has(command.permission)) {
        embed.setDescription("You can't use this command.");
        return message.channel.send({embeds: [embed]});
    }
   if (!channel.permissionsFor(message.guild.me)?.has(Permissions.FLAGS.EMBED_LINKS) && client.user.id !== userId) {
        return channel.send({ content: `Error: I need \`EMBED_LINKS\` permission to work.` });
      }
    if (command.owner && message.author.id !== `${client.owner}`) {
        embed.setDescription("Only <@902883391421153290> And <@928158667017191454> can use this command!");
        return message.channel.send({embeds: [embed]});
    }

    const player = message.client.manager.get(message.guild.id);

    if (command.player && !player) {
        embed.setDescription("There is no player for this guild.");
        return message.channel.send({embeds: [embed]});
    }

    if (command.inVoiceChannel && !message.member.voice.channelId) {
        embed.setDescription("You must be in a voice channel!");
        return message.channel.send({embeds: [embed]});
    }

    if (command.sameVoiceChannel) {
    if(message.guild.me.voice.channel) {
        if (message.guild.me.voice.channelId !== message.member.voice.channelId) {
            embed.setDescription(`You must be in the same channel as ${message.client.user}!`);
            return message.channel.send({embeds: [embed]});
        }
    }
}

    try {
        command.execute(message, args, client, prefix);
    } catch (error) {
        console.log(error);
        embed.setDescription("There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.");
        return message.channel.send({embeds: [embed]});
    }
  }
};
