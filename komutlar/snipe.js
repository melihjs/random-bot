module.exports = {
  name: "snipe",
  async exe(client, message, args, discord) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) {
      const embed = new discord.MessageEmbed()
      .setTitle('Son Silinen Mesaj')
      .setDescription(`> Son silinen mesaj snipe geçmişinde bulunamadı.`)
      .setColor('#5555dd')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
      return message.channel.send({ embed });
    } else {
      const embed = new discord.MessageEmbed()
      .setTitle('Son Silinen Mesaj')
      .setDescription(`> <@${msg.author.id}> : **${msg.content}**`)
      .setColor('#5555dd')
      .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }));
      return message.channel.send({ embed });
    }
  }
}