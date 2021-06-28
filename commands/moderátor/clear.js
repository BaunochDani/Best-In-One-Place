const Discord = require(`discord.js`);
const superagent = require("superagent");
const got = require('got');
module.exports = {
    name: "clear",
    category: "moderátor",
    descriptoin: "Chat Törlés Parancs",
    run: async (client, message, args) => {
        let prefix = "%"
    message.delete()
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Nincs jogod ehhez! Szükséges jog: :x: **Admin**. :x:')
    {

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username}`)
            .setDescription(`Sikeresen törölve ${deleteAmount} üzenet`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setTimestamp();
        await message.channel.send(embed)
        message.delete();

  }
 }
}