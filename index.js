const d = require('discord.js');
const client = new d.Client();
client.commands = new d.Collection();
client.snipes = new d.Collection();

client.on('ready', function () {
  console.log('ready');
});

client.on('message', async (m) => {
  var prefix = ""; // bir prefix yaz
  if (!m.guild) return;
  if (m.author.bot) return;
  if (m.content.indexOf(prefix) !== 0) return;
  var args = m.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift();
  var cmd = client.commands.get(command);
  if (!cmd) return;
  else cmd.exe(client, m, args, d);
});

client.on('messageDelete', async (message) => {
  client.snipes.set(message.channel.id, message);
});

require('fs').readdir('./komutlar/', async (err, files) => {
  if (err) throw new Error(err.message);
  files.forEach(async (file) => {
    var cmd = require(`./komutlar/${file}`);
    client.commands.set(cmd.name, cmd);
  });
});

client.login(''); // bir token yaz