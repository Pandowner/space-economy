const Discord = require("discord.js")
const quickdb = require("quick.db")
const company = new quickdb.table("company")
const job = new quickdb.table("job")
const profil = new quickdb.table("profil")
exports.run = async (client, message, args) => {
let userid = message.author.id;

if(job.get(`${userid}.job`)) return message.channel.send("❌ Vous faites déjà partit d'une entreprise.")
let companyGet = company.get(`${userid}.company`);
if(companyGet) return message.channel.send("❌ Vous êtes déjà dans une entreprise.")

let choice = [
	"usineMetaux",
	"usineCharbon",
	"concessionnaire",
	"transportsRoutier",
	"transportsScolaire"
]

let getMoney = profil.get(`${userid}.money.poche`)
let getMoneyBank = profil.get(`${userid}.money.bank`)
if(args[0] === choice[0]) {
if(getMoney < 150) return message.channel.send("❌ Vous devez avoir minimum **150** € en liquide afin de rejoindre cette entreprise.")
	company.set(`${userid}`, {
	company: choice[0],
	transport: "Aucun",
	local: "Appartement"
	});
	
	profil.set(`${userid}.money`, {
	poche: getMoney - 150,
	bank: getMoneyBank
	});

	return message.channel.send("✅ Vous travaillez désormais dans une usine à métaux !")
	
} else if(args[0] === choice[1]){
if(getMoney < 250) return message.channel.send("❌ Vous devez avoir minimum **250** € en liquide afin de rejoindre cette entreprise.")

	company.set(`${userid}`, {
	company: choice[1],
	transport: "Vélo",
	local: "Appartement"
	});
	
	profil.set(`${userid}.money`, {
	poche: getMoney - 250,
	bank: getMoneyBank
	});

	return message.channel.send("✅ Vous travaillez désormais dans une usine à charbon !")
	
} else if(args[0] === choice[2]) {
if(getMoney < 350) return message.channel.send("❌ Vous devez avoir minimum **350** € en liquide afin de rejoindre cette entreprise.")
	company.set(`${userid}`, {
	company: choice[2],
	transport: "Véhicule",
	local: "Appartement"
	});
	
	profil.set(`${userid}.money`, {
	poche: getMoney - 350,
	bank: getMoneyBank
	});

	return message.channel.send("✅ Vous travaillez désormais chez un concessionnaire !")

} else if(args[0] === choice[3]) {
if(getMoney < 550) return message.channel.send("❌ Vous devez avoir minimum **550** € en liquide afin de rejoindre cette entreprise.")

	company.set(`${userid}`, {
	company: choice[3],
	transport: "Maison",
	local: "Véhicule"
	});
	
	profil.set(`${userid}.money`, {
	poche: getMoney - 550,
	bank: getMoneyBank
	});

	return message.channel.send("✅ Vous travaillez désormais dans un transport routier !")

} else if(args[0] === choice[4]){
if(getMoney < 200) return message.channel.send("❌ Vous devez avoir minimum **200** € en liquide afin de rejoindre cette entreprise.")

	company.set(`${userid}`, {
	company: choice[4],
	transport: "Aucun",
	local: "Appartement"
	});
	
	profil.set(`${userid}.money`, {
	poche: getMoney - 200,
	bank: getMoneyBank
	});

	return message.channel.send("✅ Vous travaillez désormais dans un transport scolaire !")
	
} else {
return message.channel.send("❌ Veuillez faire la commande `sp?searchWork` afin de voir les entreprises disponibles : l'entreprise que vous avez demandée est introuvable.")
}
}

exports.help = { name: "joinCompany" }