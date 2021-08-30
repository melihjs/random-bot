const { Canvas, write } = require('canvacord');

module.exports = {
  name: "facepalm",
  async exe(client, message, args, { MessageAttachment }) {
    var user = message.mentions.members.first() || message.author;
    var m = await message.channel.send(`Lütfen bekleyin fotoğraf oluşturuluyor.`);
    let avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
    await Canvas.facepalm(avatar).then(async (data) => {
      write(data, `./fotolar/facepalm-${user.id}.png`);
      var a = new MessageAttachment(data, `facepalm-${user.id}.png`);
      m.delete({ timeout: 5000 }).then(() =>{
        return message.channel.send(a);
      });
    });
  }
}