const { Canvas, write } = require('canvacord');

module.exports = {
  name: "beautiful",
  async exe(client, message, args, { MessageAttachment }) {
    var user = message.mentions.members.first() || message.author;
    var m = await message.channel.send(`Lütfen bekleyin fotoğraf oluşturuluyor.`);
    let avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
    await Canvas.beautiful(avatar).then(async (data) => {
      write(data, `./fotolar/beautiful-${user.id}.png`);
      var a = new MessageAttachment(data, `beautiful-${user.id}.png`);
      m.delete({ timeout: 5000 }).then(() =>{
        return message.channel.send(a);
      });
    });
  }
}