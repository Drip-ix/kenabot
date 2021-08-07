module.exports = {
    name: "clear",
    description: "Clear command",

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('Type how many messages you want to delete')

        if(amount > 100) return message.reply(`You can't delete more than 100 messages`)

        if(amount < 1) return message.reply(`Wait for you, you've already deleted you.`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('successfully!')

    }
}