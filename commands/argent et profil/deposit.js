const Discord = require("discord.js")
const quickdb = require("quick.db")
const profil_data = new quickdb.table("profil")

exports.run = async (client, message, args) => {
let user = message.author.id;
let money = args[0]
let getMoney = profil_data.get(`${user}.money.poche`)
let getMoneyBank = profil_data.get(`${user}.money.bank`)
if(!getMoneyBank) getMoneyBank = 0

if(getMoney === "0") return message.channel.send("❌ Vous n'avez pas d'argent en liquide sur vous.")





if(money === "all") {

profil_data.set(`${user}.money`, {
bank: getMoneyBank + getMoney,
poche: 0
});

let getMoneyBankNew = profil_data.get(`${user}.money.bank`)
return message.channel.send("✅ Vous avez déposé **"+getMoney+"** € vers votre compte bancaire : vous avez maintenant **"+getMoneyBankNew+"** € dans votre compte bancaire.")

} 

if(isNaN(money)) {
return message.channel.send("❌ Veuillez joindre un montant valide : `sp?deposit <all || montant>`")
}

if(money.startsWith("-" || "!" || "e" || "e+" || "%")) return message.channel.send("❌ Vous ne pouvez pas déposer un montant ayant un signe en face de celui-çi.")

if(!isNaN(money)) {

if(money > getMoney) return message.channel.send("❌ Vous n'avez pas assez d'argent en liquide pour déposer cette somme vers votre compte bancaire.")

if(money < getMoney) {

profil_data.set(`${user}.money`, {
bank: getMoneyBank + Number(money),
poche: getMoney - Number(money)
});
let getMoneyBankNew = profil_data.get(`${user}.money.bank`)
return message.channel.send("✅ Vous avez déposé **"+money+"** € vers votre compte bancaire : vous avez maintenant **"+getMoneyBankNew+"** € dans votre compte bancaire.")
}

}

}

exports.help = { name: "deposit" }