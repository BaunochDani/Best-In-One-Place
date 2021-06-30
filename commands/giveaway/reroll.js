const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'reroll',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.chanel.send('Nincs engedélyed')

        if(!args[0]) return message.chanel.send('Kérjük, adja meg az üzenet azonosítóját!')

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args[0]);
        if(!giveaway) return message.chanel.send('Nem lehet\'ne találja meg az Eventet.')

        client.giveaways.reroll(giveaway.messageID)
        .then(() => {
            message.chanel.send("Event Újarindítás!");
        })
        .catch(err => {
            console.log(err)
        })
    }
}