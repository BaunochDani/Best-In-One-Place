module.exports = {
    name: "teszt",
    category: "teszt kategória",
    description: "teszt command",
    run: async (bot, message, args) => {

        message.channel.send("szia")
    }
}