const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {
    name: "8ball",
    category: "game",
    descriptoin: "8ball Parancs",
    run: async (client, message, args) =>{
        let prefix = "%"
        if(!args[1]) return message.reply("Kérlek add meg a kérdést!")
        let replies = ["Igen", "Persze", "Nem", "Kizárt", "Esélytelen", "Felejtsd el", "Hajrá", "Gyerünk", "Naná", "Van rá esély", "Nem hiszem", "Aha", "100%"];
      
        let result = Math.floor((Math.random() * replies.length));
        let kerdes = args.slice(1).join(" ");
      
        let ballembed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor('RANDOM')
        .addField("Válasz:", replies[result]);
      
        message.channel.send(ballembed);
      }
    }