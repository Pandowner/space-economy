const Discord = require ("discord.js")
const quickdb = require("quick.db")
const job_data = new quickdb.table("job")

exports.run = async (client, message, args) => {
let user = message.author.id;

let getJob = job_data.get(`${user}.job`)
if(!getJob) return message.channel.send("❌ Vous n'avez pas de travail.")

let getJobName;
if(getJob === "cuisinier") getJobName = "Cuisinier(ère)";
if(getJob === "eboueur") getJobName = "Éboueur(euse)"
if(getJob === "surveillant") getJobName = "Surveillant(e)"

job_data.delete(`${user}.job`)
return message.channel.send("✅ Vous avez demissionné du poste de **"+getJobName+"** avec succès : vous êtes maintenant au chômage.")

}

exports.help = { name: "demissionner" }