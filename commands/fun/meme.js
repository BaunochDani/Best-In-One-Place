const Discord = require("discord.js");
const superagent = require(`superagent`);
const randomPuppy = require(`random-puppy`)
module.exports = {
    name: "meme",
    category: "fun",
    description: "Lekér egy memet! :D",
    run: async (bot, message, args) => {
        let prefix = "%"

    const subreddits = ["dankmeme", "meme", "me_irl"]
    const random = subreddits[Math.floor(Math.random() * subreddits.length)]

    const IMG = await randomPuppy(random)
    const MemeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(IMG)
    .setURL(`https://www.reddit.com/r/${random}`)

    message.channel.send(MemeEmbed)
}
}