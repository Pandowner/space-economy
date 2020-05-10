const Discord = require("discord.js")
const quickdb = require("quick.db")
const profil_data = new quickdb.table("profil")
const job_data = new quickdb.table("job")
const talkedRecently = new Set();
const company = new quickdb.table("company")
exports.run = async (client, message, args) => {

let user = message.author.id;
let getJob = job_data.get(`${user}.job`)
if(!getJob) getJob = "None"
let getMoney = profil_data.get(`${user}.money.poche`)
let getMoneyBank = profil_data.get(`${user}.money.bank`)

if (talkedRecently.has(message.author.id)) {
            return message.channel.send("❌ Cette commande possède un cooldown d'une heure.")}

talkedRecently.add(message.author.id);

companyGet = company.get(`${user}.company`)
if(companyGet) {
if(companyGet === "usineMetaux"){
profil_data.set(`${user}.money`, {
	poche: getMoney + 90,
	bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **90** € en étant travailleur dans une **usine à métaux** !")

} else if(companyGet === "usineCharbon"){
profil_data.set(`${user}.money`, {
	poche: getMoney + 110,
	bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **110** € en étant travailleur dans une **usine à charbon** !")
} else if(companyGet === "concessionnaire"){
profil_data.set(`${user}.money`, {
	poche: getMoney + 450,
	bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **450** € en étant **concessionnaire** !")
} else if(companyGet === "transportsRoutier"){
profil_data.set(`${user}.money`, {
	poche: getMoney + 650,
	bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **650** € en étant **routier** !")
} else if(companyGet === "transportsScolaire"){
profil_data.set(`${user}.money`, {
	poche: getMoney + 150,
	bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **150** € en étant **chauffeur scolaire** !")

} else if(!companyGet) {
if(getJob == "None") {
profil_data.set(`${user}.money`, {
poche: getMoney + 1,
bank: getMoneyBank
});
return message.channel.send("✅ Vous n'avez gagné que **1** € puisque vous êtes **Chômeur(euse)** ! Pensez à trouver un travail avec la commande `sp?findWork` !")
}

if(getJob == "cuisinier") {
profil_data.set(`${user}.money`, {
poche: getMoney + 31,
bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **31** € en étant **Cusinier(ère)** !")
}

if(getJob == "eboueur") {
profil_data.set(`${user}.money`, {
poche: getMoney + 36,
bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **36** € en étant **Éboueur(euse)** !")
}

if(getJob == "surveillant") {
profil_data.set(`${user}.money`, {
poche: getMoney + 33,
bank: getMoneyBank
});
return message.channel.send("✅ Vous avez récolté **33** € en étant **Surveillant(e)** !")
}
}
}
setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 3600000);

}
exports.help = { name:"work"}
