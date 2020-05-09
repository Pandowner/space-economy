const Discord = require ("discord.js")

exports.run = async (client, message, args) => {

const embed = new Discord.RichEmbed()
.setTitle("<:job:707320854060728461> Liste des emplois disponibles :")
.setDescription(":one: Éboueur(euse)\n:two: Cuisinier(ère)\n:three: Surveillant(e) dans un collège\n\nTrès peu de jobs sont disponibles puisque **Space Economy** est nouveau sur discord ! D'autres jobs seront bientôt disponibles.")
.setFooter("Faites sp?viewWork pour plus d'informations sur un métier.")
return message.channel.send(embed)

}

exports.help = { name: "searchWork" }