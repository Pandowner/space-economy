const Discord = require ("discord.js");
const client = new Discord.Client();
const fs = require ("fs");
const Enmap = require("enmap")
let prefix = "sp?";

client.commands = new Enmap();
fs.readdir("./commands/", (err, content) => {
  if(err) console.log(err);
  if(content.length < 1) return;
  var groups = [];
  content.forEach(element => {
      if(!element.includes('.')) groups.push(element);
  });
  groups.forEach(folder => {
      fs.readdir("./commands/"+folder, (e, files) => {
          let js_files = files.filter(f => f.split(".").pop() === "js");
          if(js_files.length < 1) return;
          if(e) console.log(e);
          js_files.forEach(element => {
              let props = require('./commands/'+folder+'/'+element);
              client.commands.set(element.split('.')[0], props);
          });
      });
  });

});

client.on("ready", () => {
    console.log("Space Economy est prêt.")
    client.user.setActivity(`Space Economy | sp?help | ${client.guilds.size} serveurs`, { 
    type: "PLAYING"
    })
});

client.on("guildCreate", guild => {

client.user.setActivity(`Space Economy | sp?help | ${client.guilds.size} serveurs`, { 
    type: "PLAYING"
    })
});

client.on("guildDelete", guild => {
    client.user.setActivity(`Space Economy | sp?help | ${client.guilds.size} serveurs`, { 
    type: "PLAYING"
    })
});

client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.author.send(":x: Les commandes en message privés sont impossibles.").catch(err => {
        return;
    });

    if (!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args);  
});

client.login("TOKEN ICI")