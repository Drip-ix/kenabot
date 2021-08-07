const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "suggest",
  
  run: async (client, message, args) => {
    const suggestionQuery = args.join(' ');
    if (!suggestionQuery) return message.reply('Pleasy Specify a suggestion!');


    const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`${suggestionQuery}`)
    .setColor('YELLOW')
    .addField('Status', '📊 Waiting for community feedback, please vote!')
    .setFooter('Want to suggest something! Simply type ;suggest')

    

    

    message.channel.send('Submitted Suggestion!')
    message.guild.channels.cache.get('872959890749005875').send(embed).then(embedMessage => {
      embedMessage.react("🔼");
      embedMessage.react("🔽");
  });


    
  }
}