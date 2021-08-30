module.exports = {
  name: "emojiler",
  async exe(client, message, args, discord) {
    function getEmoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    var Animated = 0;
    var Normal = 0;
    var AnimatedEmojis = "";
    var NormalEmojis = "";
    var TopEmojisCount = 0;
    message.guild.emojis.cache.forEach(async (emoji) => {
      TopEmojisCount++;
      if (emoji.animated) {
        Animated++;
        AnimatedEmojis += getEmoji(emoji.id);
      } else {
        Normal++;
        NormalEmojis += getEmoji(emoji.id);
      }
    });
    const embed = new discord.MessageEmbed()
    .setTitle(`${message.guild.name} Emojileri - ${TopEmojisCount} Emoji!`)
    .setDescription(`> **Hareketli** (\`${Animated}\`)\n> ${AnimatedEmojis}\n\n> **Hareketsiz** (\`${Normal}\`)\n> ${NormalEmojis}`)
    .setColor('#5555dd')
    .setThumbnail(message.guild.iconURL({ dynamic: true }));
    if (embed.length > 2000) {
      return message.channel.send("Gömülü mesaj yollanamıyor.");
    } else {
      return message.channel.send({ embed });
    }
  }
}