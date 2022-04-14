const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "node",
    category: "Information",
    description: "Check node information",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
  
  
     const all = client.manager.nodes.map(node => 
            `Node ${(node.options.identifier)} Connected` +
            `\nPlayer: ${node.stats.players}` +
            `\nPlaying Players: ${node.stats.playingPlayers}` +
            `\nUptime: ${new Date(node.stats.uptime).toISOString().slice(11, 19)}`
        ).join('\n\n----------------------------\n');

        const memory = client.manager.nodes.map(node =>
        `Reservable Memory: ${Math.round(node.stats.memory.reservable / 1024 / 1024)}mb` +
            `\nUsed Memory: ${Math.round(node.stats.memory.used / 1024 / 1024)}mb` +
            `\nFree Memory: ${Math.round(node.stats.memory.free / 1024 / 1024)}mb` +
            `\nAllocated Memory: ${Math.round(node.stats.memory.allocated / 1024 / 1024)}mb`
        ).join('\n\n----------------------------\n');

        const cpu = client.manager.nodes.map(node =>
        `\nCores: ${node.stats.cpu.cores}` +
            `\nSystem Load: ${(Math.round(node.stats.cpu.systemLoad * 100) / 100).toFixed(2)}%` +
            `\nLavalink Load: ${(Math.round(node.stats.cpu.lavalinkLoad * 100) / 100).toFixed(2)}%`
        ).join('\n\n----------------------------\n');
        

        const embed = new MessageEmbed()
            .setAuthor({ name: `Olivia ✨#1700's Node`, iconURL: client.user.displayAvatarURL()})
            .setDescription(`**Node Stats**`)
            .addFields(
              { name: `**Node**`, value: `\n\`\`\`${all}\`\`\`` },
              { name: '**Memory**', value: `\n\`\`\`${memory}\`\`\`` },
              { name: '**CPU**', value: `\n\`\`\`${cpu}\`\`\`` },
            )
            .setColor(client.embedColor)
            .setTimestamp()
        message.reply({embeds: [embed]})
    }
                                          }
