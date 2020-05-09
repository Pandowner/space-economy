const Discord = require("discord.js")
const quickdb = require("quick.db")
const profil_data = new quickdb.table("profil")

exports.run = async (client, message, args) => {
let user = message.author.id;
let money = args[0]
let getMoney = profil_data.get(`${user}.money.poche`)
let getMoneyBank = profil_data.get(`${user}.money.bank`)
if(!getMoneyBank) getMoneyBank = 0

if(getMoneyBank === "0") return message.channel.send("❌ Vous n'avez pas d'argent dans votre compte bancaire.")


if(money === "all") {

profil_data.set(`${user}.money`, {
bank: 0,
poche: getMoneyBank 
});

let getMoneyNew = profil_data.get(`${user}.money.poche`)
return message.channel.send("✅ Vous avez retiré **"+getMoneyNew+"** € : vous avez maintenant **"+getMoneyNew+"** € en liquide.")

} 

if(isNaN(money)) {
return message.channel.send("❌ Veuillez joindre un montant valide : `sp?retirer <all || montant>`")
}

if(money.startsWith("-" || "!" || "e" || "e+" || "%")) return message.channel.send("❌ Vous ne pouvez pas retirer un montant ayant un signe en face de celui-çi.")

if(!isNaN(money)) {

if(money > getMoneyBank) return message.channel.send("❌ Vous n'avez pas assez d'argent en banque pour retirer cette somme.")

if(money < getMoneyBank) {

profil_data.set(`${user}.money`, {
bank: getMoneyBank - Number(money),
poche: getMoney + Number(money)
});
let getMoneyNew = profil_data.get(`${user}.money.poche`)
return message.channel.send("✅ Vous avez retiré **"+money+"** € : vous avez maintenant **"+getMoneyNew+"** € en liquide.")
}

}

}

exports.help = { name: "retirer" }