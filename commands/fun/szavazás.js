const Discord = require("discord.js");
module.exports = {
    name: "szavazás",
    category: "fun",
    description: "Szavazást indít! :D",
    run: async (bot, message, args) => {
        let prefix = "%"

    if(args[0]){
        let sza_embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag + `| Szavazást indított!`)
            .setDescription(args.join(""))
            .setColor("RANDOM")
            .setTimestamp(message.createdAt)
            .setFooter(bot.user.username)

            message.channel.send(sza_embed).then(async msg => {
                await msg.react("✅")
                await msg.react("❌")
            })
    } else {
            message.reply("Kérlek add meg a szavazást!")

        }
    }
}