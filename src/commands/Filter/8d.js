const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "8d",
    category: "Music",
    aliases: ["8D"],
    description: "Set EqualizerBand",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

       const player = message.client.manager.get(message.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.reply({ embeds: [thing] });
        }
        const emojiequalizer = message.client.emoji.filter;
        const embed = new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription(`<a:beats:922386542448742470> Choose what filter you want in the button`)

            const but = new MessageButton().setCustomId("clear_but").setLabel("Clear").setStyle("DANGER").setEmoji("936854059615391794");
            const but2 = new MessageButton().setCustomId("8d_but").setLabel("8D").setStyle("PRIMARY").setEmoji("936854066485669928");

            const row = new MessageActionRow().addComponents(but, but2);

             const m = await message.reply({ embeds: [embed], components: [row] });

             const embed1 = new MessageEmbed().setColor(client.embedColor);
        const collector = m.createMessageComponentCollector({
            filter: (f) => f.user.id === message.author.id ? true : false && f.deferUpdate().catch(() => { }),
            time: 60000,
            idle: 60000 / 2
        });
        collector.on("end", async () => {
            if (!m) return;
            await m.edit({ embeds: [embed1.setDescription(`Time is Out type again \`${prefix}filters\``)] });
        });
        collector.on("collect", async (b) => {
            if (!b.replied) await b.deferUpdate({ ephemeral: true });
            if (b.customId === "clear_but") {
                await player.clearEffects();
                if (m) await m.edit({ embeds: [embed], components: [row] });
                return await b.editReply({ embeds: [embed1.setDescription(`${emojiequalizer} Equalizer mode is OFF`)] });
            } else if (b.customId === "8d_but") {
                await player.set8D(true);
                if (m) await m.edit({ embeds: [embed], components: [row] });
                return await b.editReply({ embeds: [embed1.setDescription(`${emojiequalizer} 8D mode is ON`)] });
            }
        })

            
            

    }
}
