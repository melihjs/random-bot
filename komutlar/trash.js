const { Canvas, write } = require('canvacord');

module.exports = {
  name: "trash",
  async exe(client, message, args, { MessageAttachment }) {
    var user = message.mentions.members.first() || message.author;
    var m = await message.channel.send(`Lütfen bekleyin fotoğraf oluşturuluyor.`);
    let avatar = user.displayAvatarURL({ dynamic: true, format: 'png' });
    await Canvas.trash(avatar).then(async (data) => {
      write(data, `./fotolar/trash-${user.id}.png`);
      var a = new MessageAttachment(data, `trash-${user.id}.png`);
      m.delete({ timeout: 5000 }).then(() =>{
        return message.channel.send(a);
      });
    });
  }
}