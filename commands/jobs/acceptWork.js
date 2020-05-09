const Discord = require ("discord.js")
const quickdb = require("quick.db")
const job_data = new quickdb.table("job")
const company = new quickdb.table("company")

exports.run = async (client, message, args) => {
let user = message.author.id;

if(company.get(`${user}.company`)) return message.channel.send("❌ Vous faites déjà partit d'une entreprise.")
let getJob = job_data.get(`${user}.job`)
if(!args[0]) return message.channel.send("❌ Veuillez sélectionner un travail entre `cuisinier`, `eboueur` et `surveillant`")

if(!getJob) {
if(args[0] === "cuisinier") {
job_data.set(`${user}`, {
job: "cuisinier"
});
return message.channel.send("✅ Vous êtes maintenant **Cuisinier(ère)** !")
} else if(args[0] === "eboueur") {
job_data.set(`${user}`, {
job: "eboueur"
});
return message.channel.send("✅ Vous êtes maintenant **Éboueur(euse)** !")
} else if(args[0] === "surveillant") {
job_data.set(`${user}`, {
job: "surveillant"
});
return message.channel.send("✅ Vous êtes maintenant **Surveillant(e)** !")
} else {
return message.channel.send("❌ Veuillez sélectionner un travail entre `cuisinier`, `eboueur` et `surveillant`")
}

} else {
if(getJob === "cuisinier") getJob = "Cuisinier(ère)";
if(getJob === "eboueur") getJob = "Éboueur(euse)";
if(getJob === "surveillant") getJob = "Surveillant(e)";
if(getJob === "cuisinier" || "eboueur" || "surveillant") return message.channel.send("❌ Vous avez déjà un job : **"+getJob+"**")
}
}

exports.help = { name: "acceptWork" }