const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'giveaway',
    category: "fun",
    description: "Szavazást indít! :D",
    run : async(client, message, args) => {
        let prefix = "%"

        if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send('Nincs engedélyed ennek az üzenetnek a kezelésére!')
        
        const channel = message.mentions.channels.first()
        if(!channel) return message.channel.send('kérjük, adjon meg csatornát!')

        const duration = args[1]
        if(!duration) return message.channel.send('kérjük, adjon meg érvényes időtartamot!')

        const winners = args[2]
        if(!winners) return message.channel.send('Kérjük, adja meg a nyertesek összegét!')

        const prize = args.slice(3).join(" ")
        if(!prize) return message.channel.send('Kérjük, adja meg a nyeremény díját!')

        client.giveaways.start(channel, {
            time: ms(duration),
            prize : prize,
            winnerCount: winners,
            hostedBy: client.config.hostedBy ? message.author : null,
            message: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : '') + "Giveaway",
                giveawayEnd: (client.config.everyoneMention ? "@everyone\n\n" : '') + "Giveaway Ended",
                timeRemaining: "Hátralevő idő **{duration}**",
                inviteToParticipate: "Reagáljon 🎉-vel, hogy csatlakozzon az eventhez!",
                winMessage: "Gratulálunk {winners}! Ön megnyerte az eventet",
                embedFooter: "Event idő!",
                noWinner: "Nem sikerült meghatározni a győztest!",
                hostedBy: 'Győztes {user}',
                winners: "Győztes!",
                endedAt: 'Vége!',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
                
            },

        })
        message.channel.send(`Az Event kezdődik! a ${channel}`)
    }
}
