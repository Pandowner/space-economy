const Discord = require ("discord.js")

exports.run = async (client, message, args) => {

if(args[0] === "cuisinier"){
const embed = new Discord.RichEmbed()
.setTitle("<:job:707320854060728461> Informations sur le job **Cusinier(ère)** :")
.addField("💶 Salaire :", "**31** €/heure")
.addField("❔ Rôle :", "- Assurer le service\n- Assurer la mise en place (réalisation des recettes, sauces ect..)")
.addField("✅ Accepter l'emploi :", "`sp?acceptWork cuisinier`")
return message.channel.send(embed)

} else if(args[0] === "eboueur") {
const embed = new Discord.RichEmbed()
.setTitle("<:job:707320854060728461> Informations sur le job **Éboueur(euse)** :")
.addField("💶 Salaire :", "**36** €/heure")
.addField("❔ Rôle :", "- Ramassage des ordures")
.addField("✅ Accepter l'emploi :", "`sp?acceptWork eboueur`")
return message.channel.send(embed)

} else if(args[0] === "surveillant") {
const embed = new Discord.RichEmbed()
.setTitle("<:job:707320854060728461> Informations sur le job **Surveillant(e)** :")
.addField("💶 Salaire :", "**33** €/heure")
.addField("❔ Rôle :", "- Surveiller les élèves dans un collège\n- Faire respecter le règlement intérieur\n- Gérer les permanances\n- Gérer la file d'attente au self")
.addField("✅ Accepter l'emploi :", "`sp?acceptWork surveillant`")
return message.channel.send(embed)

} else {
return message.channel.send("<:Unconfirmed:707311461218910319> Veuillez sélectionner un emploi entre :\n:one: Cusinier(ère) : `sp?viewWork cuisinier`\n:two: Éboueur(euse) : `sp?viewWork eboueur`\n:three: Surveillant(e) : `sp?surveillant`")

}
}

exports.help = { name: "viewWork" }