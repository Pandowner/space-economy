const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const embed = new Discord.RichEmbed()
.setTitle("<:confirmed:707261540176494602> Liste des entreprises disponibles :")
.setDescription(":one: - Usine à métaux (`sp?viewCompany usineMetaux`)\n:two: - Usine à charbon (`sp?viewCompany usineCharbon`)\n:three: - Concessionnaire (`sp?viewCompany concessionnaire`)\n:four: - Transports routier (`sp?viewCompany transportsRoutier`)\n:five: - Transports scolaire (`sp?transportsScolaire`)\n\nTrès peu d'entreprises sont disponibles puisque **Space Economy** est nouveau sur discord ! D'autres entreprises seront bientôt disponibles.")
return message.channel.send(embed)
}

exports.help = { name: "searchCompany" }