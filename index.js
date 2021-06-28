const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot =new Discord.Client({disableEveryone: true});
var weather = require('weather-js');
const superagent = require('superagent');
const randomPuppy = require('random-puppy');
const { report } = require("superagent");
const { Client } = require("discord.js-commando");
const { readdirSync, fstat } = require("fs");
const ascii = require("ascii-table");
const fs = require("fs");


let botname = "Best In One Place"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)
   
    let státuszok = [
        "Prefix: %",
        "Készítő: Aklime",
        "Ha kellek írj Aklime-nek"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})  

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}hello`){
        message.channel.send("Szia");
    }

    if(cmd === `${prefix}teszt`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Best In One Place")
        .addField("Irodalom:", "Líra\n Epika\n dráma")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(TesztEmbed)
    }

    if(cmd === `${prefix}szöveg`){
        let szöveg = args.join(" ");

        if(szöveg) {
            let dumaEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .addField("Szabályzat:", szöveg)
        .setFooter(`${botname} | ${message.createdAt}`)
    
        message.channel.send(dumaEmbed)
        } else {
            message.reply("írj szöveget!")
        }
    }
    
  


})  

//////////Moderálás//////////

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));

    if(command)
    command.run(bot, message, args);
});
//////////Moderálás//////////

bot.on("message", async (message) => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args =MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}botinfo`) {
        let info_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Bot Információi")
        .addField("Bot Fejlesztők:", "✪𝜜𝖐𝖑𝙞𝖒𝟈♰#5443")
        .addField("Bot Tesztelők:", "Kakaós CSiga#2462 és Bence#5357")
        .addField("Bot Programnyelv:", "JavaScript")
        .addField("Bot Prefixe:", `${prefix}`)
        .addField("Bot Név:", `${bot.name}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
  
        message.channel.send(info_embed)
    }

    if(cmd === `${prefix}help`) {
        let help_embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Bot Parancsai")
        .addField("Fun Parancsok:","%meme, %cat, %ship, %számológép")
        .addField("Moderáció Parancsok:", "%ban, %kick, %report, %mute, %warn, %clear" )
        .addField("Szerver Parancsok:", "%botinfó , %help")
        .addField("Egyéb Parancsok:", "%weather, %szavazás, %szöveg, %teszt")
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
  
        message.channel.send(help_embed)
    }


    

















































})

bot.login(tokenfile.token);