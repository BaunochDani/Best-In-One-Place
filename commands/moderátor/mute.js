const Discord = require(`discord.js`);
const Fs = require('fs');
module.exports = {
    name: "mute",
    catgory: "moderátor",
    description: "Tag némítása",
    run: async (bot, message, args) => {
         let prefix = "%"

        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
        message.channel.send("Nincs jogod használni a parancsot!");
    else {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
    
        if(member) {
            if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                message.channel.send("Nem tudod lenémítani a tagot!");
            else {
                let mutedRole = message.guild.roles.cache.get(`859073172745224212`); // itt cseréld ki arra a rang ID-re amelyikre szeretnéd

                if(mutedRole) {
                    member.roles.add(mutedRole);
                    message.channel.send("A tagot le némítottuk!");
                }
                else
                    message.channel.send("A mute rang nem található.");
            }
        }
        else
            message.channel.send("Adj meg egy említést a tagról!");
        }
    }
}