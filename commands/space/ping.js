const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const m = await message.channel.send("*🔄 Calcul en cours...*");
m.edit(`🌍 *Latence du serveur*: ${m.createdTimestamp - message.createdTimestamp}ms.\n
🌍 *Latence API*: ${Math.round(bot.ping)}ms.`)
};

module.exports.help = {
  name: "ping"
};
