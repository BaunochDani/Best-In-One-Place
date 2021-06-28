const Discord = require("discord.js");
module.exports = {
    name: "kick",
    category: "moderátor",
    description: "Kick parancs",
    run: async (bot, message, args) => {
        let prefix = "%"

            if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Ehhez nincs jogod!")
            let kick_user = message.mentions.members.first();
            if(args[0] && kick_user){
    
                if(args[1]){
    
                    let kickEmbed = new Discord.MessageEmbed()
                    .setTitle("KICK:")
                    .setColor("BLUE")
                    .setDescription(`**Kickelte:** ${message.author.tag}\n**Kickelve lett:** ${kick_user.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)
        
                    message.channel.send(kickEmbed);
    
                    kick_user.kick(args.slice(1).join(" "))
    
                } else {
                    let parancsEmbed = new Discord.MessageEmbed()
                    .setTitle("Parancs használata:")
                    .addField(`\`${prefix}kick <@név> [indok]\``,)
                    .setColor("BLUE")
                    .setDescription("HIBA: Kérlek adj meg egy indokot!")
        
                    message.channel.send(parancsEmbed);
    
                }
    
            } else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
                .setColor("BLUE")
                .setDescription("HIBA: Kérlek említs meg egy embert!")
    
                message.channel.send(parancsEmbed);
    
            }
    }
}