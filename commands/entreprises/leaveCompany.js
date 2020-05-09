const Discord = require("discord.js")
const quickdb = require("quick.db")
const company = new quickdb.table("company")
const profil = new quickdb.table("profil")

exports.run = async (client, message, args) => {
let userid = message.author.id;
let companyGet = company.get(`${userid}.company`);
if(!companyGet) return message.channel.send("❌ Vous n'êtes dans aucune entreprise.")

await company.delete(`${userid}.company`)
return message.channel.send("✅ Vous avez démissionné de votre entreprise actuelle avec succès : vous êtes maintenant chômeur/euse.\n\nVos frais ont étés remboursés.")

let getMoney = profil.get(`${userid}.money.poche`)
let getMoneyBank = profil.get(`${userid}.money.bank`)
if(companyGet === "usineMetaux"){
profil.set(`${userid}.money`, {
	poche: getMoney + 150,
	bank: getMoneyBank
	});
} else if(compagnyGet === "usineCharbon"){
profil.set(`${userid}.money`, {
	poche: getMoney + 250,
	bank: getMoneyBank
	});
} else if(companyGet === "concessionnaire"){
profil.set(`${userid}.money`, {
	poche: getMoney + 350,
	bank: getMoneyBank
	});
} else if(companyGet === "transportsRoutier"){
profil.set(`${userid}.money`, {
	poche: getMoney + 550,
	bank: getMoneyBank
	});
} else if(companyGet === "transportsScolaire"){
profil.set(`${userid}.money`, {
	poche: getMoney + 200,
	bank: getMoneyBank
	});
}

}

exports.help = { name: "leaveCompany" }