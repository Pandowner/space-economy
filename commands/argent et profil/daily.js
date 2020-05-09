const Discord = require("discord.js")
const quickdb = require("quick.db")
const profil_data = new quickdb.table("profil")
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
let user = message.author.id;

let getMoney = profil_data.get(`${user}.money.poche`)
let getMoneyBank = profil_data.get(`${user}.money.bank`)
let random = [
"✅ - Félicitations ! Vous venez de trouver un billet de 10€ au sol !",
"✅ - Félicitations ! Vous venez de trouver un billet de 20€ au sol !",
"✅ - Félicitations ! Vous venez de trouver un billet de 50€ au sol !",
"✅ - Félicitations ! Vous avez économiser 16 € en achetant un jeu vidéo chez Micromania !",
"✅ - Félicitations ! Vous venez de gagner 37€ grâce à un tirage au sort dans un grand hypermarché !"
]

if (talkedRecently.has(message.author.id)) {
            return message.channel.send("❌ Cette commande possède un cooldown de 24 heures.")}
let choose = Math.floor((Math.random() * random.length));

talkedRecently.add(message.author.id);
if(choose === 0) {
message.channel.send("✅ - Félicitations ! Vous venez de trouver un billet de 10€ au sol !")
return profil_data.set(`${user}.money`, {
poche: getMoney + 10,
bank: getMoneyBank
})
}

if(choose === 1) {
message.channel.send("✅ - Félicitations ! Vous venez de trouver un billet de 20€ au sol !")
return profil_data.set(`${user}.money`, {
poche: getMoney + 20,
bank: getMoneyBank
})
}

if(choose === 1) {
message.channel.send("✅ - Félicitations ! Vous venez de trouver un billet de 50€ au sol !")
return profil_data.set(`${user}.money`, {
poche: getMoney + 50,
bank: getMoneyBank
})
}

if(choose === 3) {
message.channel.send("✅ - Félicitations ! Vous avez économiser 16 € en achetant un jeu vidéo chez Micromania !")
return profil_data.set(`${user}.money`, {
poche: getMoney + 16,
bank: getMoneyBank
})
}

if(choose === 4) {
message.channel.send("✅ - Félicitations ! Vous venez de gagner 37€ grâce à un tirage au sort dans un grand hypermarché !")
return profil_data.set(`${user}.money`, {
poche: getMoney + 37,
bank: getMoneyBank
})
}

setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 86400000);
}

exports.help = {
name: "daily"
}