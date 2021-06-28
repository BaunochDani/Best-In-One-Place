const Discord = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: "cat",
    catgory: "Fun",
    description: "Lekér egy cuki cicát! :D",
    run: async (bot, message, args) => {
        let prefix = "%"
        
            let msg = await message.channel.send("*Macska betöltése...*")
    
            let {body} = await superagent
            .get(`https://aws.random.cat/meow`)
    
            if(!{body}) return message.channel.send("A file betöltésekor hiba lépett fel!")
    
            let catEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField("Ugy milyen cuki?", ":3")
            .setImage(body.file)
            .setTimestamp(message.createdAt)
            .setFooter(bot.name)
    
            message.channel.send(catEmbed)
        
    }
}