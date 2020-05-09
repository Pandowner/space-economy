const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(args[0] === "usineMetaux") {
const embed = new Discord.RichEmbed()
.setTitle("<:confirmed:707261540176494602> Informations sur l'entreprise **Usine à métaux** :")
.addField("💳 Argent requis en liquide :", "Vous devez avoir **150** € en liquide pour rejoindre cette entreprise. Cette somme couvrira la location d'un appartement pour vivre proche de cette usine.")
.addField("💶 Salaire :", "**90**€/heure")
.addField("❔ Rôle :", "- Vérification des conbustions et des températures.\n- Contrôles de sécurité des fours à métaux.")
.setFooter("Faites la commande [ sp?joinCompany usineMetaux ] pour rejoindre cette entreprise.")
return message.channel.send(embed)

} else if(args[0] === "usineCharbon") {
const embed = new Discord.RichEmbed()
.setTitle("<:confirmed:707261540176494602> Informations sur l'entreprise **Usine à charbon** :")
.addField("💳 Argent requis en liquide :", "Vous devez avoir **250** € en liquide pour rejoindre cette entreprise. Cette somme couvrira la location d'un appartement pour vivre proche de cette usine et la location d'un véhicule : le vélo.")
.addField("💶 Salaire :", "**110**€/heure")
.addField("❔ Rôle :", "- Vérification des conbustions et des températures.\n- Contrôles de sécurité des fours à charbon.\n- Vérification de l'état des pierres charbons à la fin de sa production")
.setFooter("Faites la commande [ sp?joinCompany usineCharbon ] pour rejoindre cette entreprise.")
return message.channel.send(embed)

} else if(args[0] === "concessionnaire") {
const embed = new Discord.RichEmbed()
.setTitle("<:confirmed:707261540176494602> Informations sur l'entreprise **Concessionnaire** :")
.addField("💳 Argent requis en liquide :", "Vous devez avoir **350** € en liquide pour rejoindre cette entreprise. Cette somme couvrira l'achat d'un appartement proche du concessionnaire et l'achat d'un moyen de transport : un véhicule.")
.addField("💶 Salaire :", "**450**€/heure")
.addField("❔ Rôle :", "- Vendre des véhicules.\n- Conseiller les clients.")
.setFooter("Faites la commande [ sp?joinCompany concessionnaire ] pour rejoindre cette entreprise.")
return message.channel.send(embed)

} else if(args[0] === "transportsRoutier") {
const embed = new Discord.RichEmbed()
.setTitle("<:confirmed:707261540176494602> Informations sur l'entreprise **Transports routier** :")
.addField("💳 Argent requis en liquide :", "Vous devez avoir **550** € en liquide pour rejoindre cette entreprise. Cette somme couvrira la location d'une maison pour vivre proche de cette entreprise, d'un moyen de transport : une voiture et l'achat complet de la décoration intérieure du camion.")
.addField("💶 Salaire :", "**650**€/heure")
.addField("❔ Rôle :", "- Livrer des produits alimentaires.\n- Livrer des produits dangereux tels que bouteilles de gaz.")
.setFooter("Faites la commande [ sp?joinCompany transportsRoutier ] pour rejoindre cette entreprise.")
return message.channel.send(embed)

} else if(args[0] === "transportsScolaire"){
const embed = new Discord.RichEmbed()
.setTitle("<:confirmed:707261540176494602> Informations sur l'entreprise **Transports scolaire** :")
.addField("💳 Argent requis en liquide :", "Vous devez avoir **200** € en liquide pour rejoindre cette entreprise. Cette somme couvrira la location d'un appartement pour vivre proche de cette entreprise.")
.addField("💶 Salaire :", "**150**€/heure")
.addField("❔ Rôle :", "- Vérification des conbustions et des températures.\n- Contrôles de sécurité des fours à métaux.")
.setFooter("Faites la commande [ sp?joinCompany transportsScolaire ] pour rejoindre cette entreprise.")
return message.channel.send(embed)

} else {
return message.channel.send("❌ Veuillez faire la commande `sp?searchCompany` pour voir les entreprises disponibles.")
}

}

exports.help = { name: "viewCompany" }