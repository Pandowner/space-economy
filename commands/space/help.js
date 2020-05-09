const Discord = require ("discord.js")

exports.run = async (client, message, args) => {

const embed = new Discord.RichEmbed()
.addField("<:Coin:707261576998158378> Argent et Profil :", "`sp?profil`, `sp?daily`, `sp?deposit`, `sp?retirer`, `sp?work`")
.addField("<:Identit:707261577841344583> Emplois :", "`sp?searchWork`, `sp?viewWork`, `sp?demissionner`")
.addField("<:confirmed:707261540176494602> Entreprises :", "`sp?searchCompany`, `sp?joinCompany`, `sp?leaveCompany`, `sp?viewCompany`")
.addField("<:SpaceEconomy:707261578315169823> Space Economy :", "`sp?spaceinfo`, `sp?ping`")
message.channel.send(embed)
}

exports.help = {
name: "help"
}