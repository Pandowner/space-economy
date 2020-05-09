const Discord = require("discord.js");
let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 10) / 10;

const { version } = require("discord.js");
const moment = require("moment");
moment.locale("fr");
const m = require("moment-duration-format");
let os = require("os");
let cpuStat = require("cpu-stat");
const ms = require("ms");

exports.run = async (client, message, args) => {

  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    const duration = moment
      .duration(client.uptime)
      .format(" D [jour(s)], H [heure(s)], m [minutes], s [secs]");
      
      
    var infobot = new Discord.RichEmbed()
      .addField(
        "**🔄 Système :**",
        `・Discord.js : ${version}\n・Nodejs : ${
          process.version
        }\n・Processeur : \`${
          os.cpus().map(i => `${i.model}`)[0]
        }\`\n・Arc : \`${os.arch()}\`\n・Plateforme : \`\`${os.platform()}\`\`\n・Connecté depuis : ${duration}`
      )
      .addField(
        "**💾 Consommation :**",
        `・RAM consommée : ${ram}MB / 3038MB\n・CPU consommée : \`${percent.toFixed(2)}%\``
      )
      .addField(
        "**📊 Statistiques :**",
        `・Utilisateurs : ${client.users.size}\n・Serveurs : ${client.guilds.size}\n・Salons : ${client.channels.size}\n・Nombre de shard : ${client.shard.count}`)

    message.channel.send(infobot);
  });
  
};

module.exports.help = {
  name: "spaceinfo"
};
