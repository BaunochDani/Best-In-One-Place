const Discord = require("discord.js");
module.exports = {
    name: "meghívás",
    category: "meghívók",
    description: "meghívó parancs",
    run: async (bot, message, args) => {
        let prefix = "%"
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Meghivó Link")
    .setDescription("Ezzel tudod behívni a botot a szerveredre")
    .addField("💻Link:", `https://discord.com/api/oauth2/authorize?client_id=848282444260179988&permissions=8&scope=bot`)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
   
    message.channel.send(embed)
  }
}