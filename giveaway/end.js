const ms = require('ms')

module.exports = {
 name : 'end',
 category: "giveaway",
 descriptoin: "Vége",
  run : async(client, message, args) => {
     let prefix = "%"
     if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send('Nincs engedélyed a parancs használatára!')
     if(!args[0]) return message.channel.send('kérjük, adja meg az üzenet azonosítóját!')

     const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
     if(!giveaway) return message.channel.send('Az Event nem található ')

      client.giveaways.edit(giveaway.messageID, {
         setEndTimestamp: Date.now()
        }).then(() => {
         message.channel.send(`Az Event kevesebb, mint  ${client.giveaway.options.updateCountdownEvery / 1000} másodpercig tart!`)
        }).catch(err => {
         console.log(err)
         message.channel.send('Hiba történt!')
        
        })
    }
}