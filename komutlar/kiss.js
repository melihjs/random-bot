const { Canvas, write } = require('canvacord');

module.exports = {
  name: "kiss",
  async exe(client, message, args, { MessageAttachment }) {
    var user = message.mentions.members.first();
    if (!user) return message.channel.send('Lütfen bir kullanıcı etiketle.');
    var m = await message.channel.send(`Lütfen bekleyin fotoğraf oluşturuluyor.`);
    let avatar = user.user.displayAvatarURL({ dynamic: true, format: 'png' });
    var r = message.author;
    var avat = r.displayAvatarURL({ dynamic: true, format: 'png' });
    await Canvas.kiss(avat, avatar).then(async (data) => {
      write(data, `./fotolar/kiss-${r.id}.png`);
      var a = new MessageAttachment(data, `kiss-${r.id}.png`);
      m.delete({ timeout: 5000 }).then(() =>{
        return message.channel.send(a);
      });
    });
  }
}