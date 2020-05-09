const Discord = require("discord.js")
const quickdb = require("quick.db")
const profil_data = new quickdb.table("profil")
const job_data = new quickdb.table("job")
const company = new quickdb.table("company")
exports.run = async (client, message, args) => {

let mention = message.mentions.users.first() || message.author;
let user = mention.id;

let argentpoche = profil_data.get(`${user}.money.poche`);
if(!argentpoche) argentpoche = "0";

let argentbanque = profil_data.get(`${user}.money.bank`);
if(!argentbanque) argentbanque = "0";

let job = job_data.get(`${user}.job`)
if(!job) job = "Chômeur(euse)";
if(job === "cuisinier") job = "Cuisinier(ère)";
if(job === "eboueur") job = "Éboueur(euse)";
if(job === "surveillant") job = "Surveillant(e)";

let companyGet = company.get(`${user}.company`)
if(companyGet === "usineMetaux") companyGet = "Usine à métaux";
if(companyGet === "usineCharbon") companyGet = "Usine à charbon";
if(companyGet === "concessionnaire") companyGet = "Concessionnaire";
if(companyGet === "transportsRoutier") companyGet = "Transports routiers";
if(companyGet === "transportsScolaire") companyGet = "Transports scolaire";

let transportGet = company.get(`${user}.company.transport`)
if(!transportGet) transportGet = "Aucun"

let localGet = company.get(`${user}.company.local`)
if(!localGet) localGet = "Aucun"

let companyInfo = `- Travail : ${companyGet}\n- Moyen de transport : ${transportGet}\n- Moyen d'hébergement : ${localGet}`
if(!companyGet) companyInfo = "❌ N'est dans aucune entreprise."
const embed = new Discord.RichEmbed()
.setTitle(`:pushpin: Profil de **${mention.tag}**`)
.addField("💶 - Argent en liquide :", `**${argentpoche}** €`)
.addField("💳 - Argent en banque :", `**${argentbanque}** €`)
.addField("<:job:707320854060728461> Job :", `**${job}**`)
.addField("<:confirmed:707261540176494602> Entreprise :", `${companyInfo}`)
message.channel.send(embed)
}

exports.help = {
name: "profil"
}