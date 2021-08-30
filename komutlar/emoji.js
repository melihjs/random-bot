module.exports = {
  name: "emoji",
  async exe(client, message, args, discord) {
    var emote = args.join(" ");
    if (!emote) return message.channel.send('Lütfen bir emoji gönder.');
    var emoji = discord.Util.parseEmoji(emote);
    var url = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`;
    message.guild.emojis.create(url, emoji.name);
    return message.channel.send(`**${emoji.name}** adında emoji oluşturuldu.`)
  }
}