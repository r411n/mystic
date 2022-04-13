const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "stopbot",
    category: "Owner",
    description: "Eval Code",
    args: false,
    usage: "<string>",
    permission: [],
    owner: true,
 execute: async (message, args, client, prefix) => {
    
    const restart = new MessageEmbed()
        .setDescription("**Account has been**: `Shutting down...`")
        .setColor("#000001");

    await message.channel.send({ embeds: [restart] });
        console.log(chalk.red(`[CLIENT] Restarting...`));
            
    process.end();
    }
};