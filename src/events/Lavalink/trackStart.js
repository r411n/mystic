const { MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
    
module.exports = async (client, player, track, payload) => {
  const emojiplay = client.emoji.play;
  const volumeEmoji = client.emoji.volumehigh;
  const emojistop = client.emoji.stop;
  const emojipause = client.emoji.pause;
  const emojiresume = client.emoji.resume;
  const emojiskip = client.emoji.skip;

  const thing = new MessageEmbed()
  .setTitle(`<a:music:937596958191808512> **Now Playing**`)
  .setDescription(`[${track.title}](${track.uri}) - \`[ ${convertTime(track.duration)} ]\``)
  .setImage(`https://img.youtube.com/vi/${track.identifier}/mqdefault.jpg`)
  .setColor(client.embedColor)
  .setTimestamp()
    const But1 = new MessageButton().setCustomId("vdown").setEmoji("🔉").setStyle("SECONDARY");
    
    const But2 = new MessageButton().setCustomId("prev").setEmoji("⏮️").setStyle("SECONDARY");
 
    const But3 = new MessageButton().setCustomId("pause").setEmoji("⏸").setStyle("SECONDARY");
 
    const But4 = new MessageButton().setCustomId("skip").setEmoji("⏭️").setStyle("SECONDARY");
     
    const But5 = new MessageButton().setCustomId("vup").setEmoji("🔊").setStyle("SECONDARY");

    const But6 = new MessageButton().setCustomId("m10").setEmoji("⏪").setStyle("SECONDARY");
    
    const But7 = new MessageButton().setCustomId("save").setEmoji("💾").setStyle("SECONDARY");
 
    const But8 = new MessageButton().setCustomId("stop").setEmoji("⏹").setStyle("SECONDARY");
 
    const But9 = new MessageButton().setCustomId("loop").setEmoji("🔁").setStyle("SECONDARY");
     
    const But10 = new MessageButton().setCustomId("p10").setEmoji("⏩").setStyle("SECONDARY");

 
    
    const row = new MessageActionRow().addComponents(But1, But2, But3, But4, But5);
    
    const row1 = new MessageActionRow().addComponents(But6, But7, But8, But9, But10);

   
   
   
  let NowPlaying = await client.channels.cache
    .get(player.textChannel)
    .send({ embeds: [thing], components: [row, row1] });
  player.setNowplayingMessage(NowPlaying);
  const embed = new MessageEmbed()
  .setColor(client.embedColor)
  .setTimestamp();
  const collector = NowPlaying.createMessageComponentCollector({
    filter: (b) => {
      if(b.guild.me.voice.channel && b.guild.me.voice.channelId === b.member.voice.channelId) return true;
      else {
        b.reply({content: `You are not connected to ${b.guild.me.voice.channel} to use this buttons.`, ephemeral: true}); return false;
        };
     },
     time: track.duration,
      });
        collector.on("collect", async (i) => {
          await i.deferReply({
            ephemeral: true
        });
            if (i.customId === "vdown") {
               if (!player) {
                 return collector.stop();
               }
              let amount = Number(player.volume) - 10;
               await player.setVolume(amount);
              i.editReply({embeds: [embed.setDescription(`${volumeEmoji} The current volume is: **${amount}**`)]});
           } else if (i.customId === "stop") {
                if (!player) {
                    return collector.stop();
                }
                await player.stop();
                await player.queue.clear();
               // i.member.user.send()
                i.editReply({embeds: [embed.setDescription(`${emojistop} Stopped the music`)]});
                return collector.stop();
            } else if (i.customId === "pause") {
                if (!player) {
                    return collector.stop();
                }
                player.pause(!player.paused);
                const Text = player.paused ? `${emojipause} **Paused**` : `${emojiresume} **Resume**`;
                i.editReply({embeds: [embed.setDescription(`${Text} \n[${player.queue.current.title}](${player.queue.current.uri})`)]});
            } else if (i.customId === "skip") {
                if (!player) {
                    return collector.stop();
                }
                await player.stop();
                if (track.length === 1) {
                  return collector.stop();
              }
                i.editReply({embeds: [embed.setDescription(`${emojiskip} **Skipped**\n[${player.queue.current.title}](${player.queue.current.uri})`)]});
                
            } else if (i.customId === "vup") {
               if (!player) {
                 return collector.stop();
               }
               let amount = Number(player.volume) + 10;
            if(amount >= 150) return i.editReply({ embeds: [embed.setDescription( `Cannot higher the player volume further more.`)]});
               await player.setVolume(amount);
               i.editReply({embeds: [embed.setDescription( `${volumeEmoji} The current volume is: **${amount}**`)]});
                return;
            } else if (i.customId === "loop") {
              if (!player) {
                return collector.stop();
            }
            if (player.queueRepeat) {
              player.setQueueRepeat(false);
            }
            //set track repeat to revers of old track repeat
           
            player.setTrackRepeat(!player.trackRepeat);
              i.editReply({embeds: [embed.setDescription(`${player.trackRepeat ? `<:yes:939833603397918742> **Enabled Song Loop**`: `<:no:939834027790200883> **Disabled Song Loop**`}`)]});
              
          } 
          else if (i.customId === "p10") {
            if (!player) {
                return collector.stop();
            }
            let seektime = Number(player.position) + 10 * 1000;
            //if the userinput is smaller then 0, then set the seektime to just the player.position
            if (10 <= 0) seektime = Number(player.position);
            //if the seektime is too big, then set it 1 sec earlier
            if (Number(seektime) >= player.queue.current.duration) seektime = player.queue.current.duration - 1000;
            //seek to the new Seek position
            player.seek(Number(seektime));
            collector.resetTimer({
              time: (player.queue.current.duration - player.position) * 1000
            })
    
            i.editReply({embeds: [embed.setDescription(`⏩ Forwarded the song for 10 Seconds!`)]});
        }  else if (i.customId === "m10") {
          if (!player) {
              return collector.stop();
          }
          let seektime = player.position - 10 * 1000;
          if (seektime >= player.queue.current.duration - player.position || seektime < 0) {
            seektime = 0;
          }
          //seek to the new Seek position
          player.seek(Number(seektime));
          collector.resetTimer({
            time: (player.queue.current.duration - player.position) * 1000
          })
          i.editReply({embeds: [embed.setDescription(`⏪ Rewinded the song for 10 Seconds!`)]});
        } else if (i.customId === "prev") {
          if (!player) {
              return collector.stop();
          }
          player.queue.add(player.queue.previous, 0);
          await player.stop()
          i.editReply({embeds: [embed.setDescription(`⏮️ Playing The Previous Song!`)]});
        }
        else if (i.customId === "save") {
          if (!player) {
              return collector.stop();
          }
         i.editReply({embeds: [embed.setDescription(`**Song Saved By **[<@${i.member.user.id}>] `)]})
          i.member.user.send({embeds: [embed.setDescription(`\`[ Song Details ]\` \n\n > \`[ Song Name ]\`: [${track.title}](${track.uri}) \n > \`[ Song Duration ]\`: \`[${convertTime(track.duration)}]\` \n > \`[ Song Played By ]\`: [ <@${track.requester.id}> ] \n > \`[ Song Saved By ]\`: [ <@${i.member.user.id}> ]`)]})
        }
      });
}