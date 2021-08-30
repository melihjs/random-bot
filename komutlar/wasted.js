const { Canvas, write } = require('canvacord');

module.exports = {
  name: "wasted",
  async exe(client, message, args, { MessageAttachment }) {
    var user = message.mentions.members.first() || message.author;
    var m = await message.channel.send(`Lütfen bekleyin fotoğraf oluşturuluyor.`);
    let avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
    await Canvas.wasted(avatar).then(async (data) => {
      write(data, `./fotolar/wasted-${user.id}.png`);
      var a = new MessageAttachment(data, `wasted-${user.id}.png`);
      m.delete({ timeout: 5000 }).then(() =>{
        return message.channel.send(a);
      });
    });
  }
}