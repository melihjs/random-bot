const { Canvas, write } = require('canvacord');

module.exports = {
  name: "hitler",
  async exe(client, message, args, { MessageAttachment }) {
    var user = message.mentions.members.first() || message.author;
    var m = await message.channel.send(`Lütfen bekleyin fotoğraf oluşturuluyor.`);
    let avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
    await Canvas.hitler(avatar).then(async (data) => {
      write(data, `./hitler.png`);
      var a = new MessageAttachment(data, `hitler.png`);
      m.delete({ timeout: 5000 }).then(() =>{
        return message.channel.send(a);
      });
    });
  }
}