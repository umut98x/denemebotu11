const Discord = require('discord.js');

module.exports = {
  name: 'aşk',
  description: 'İki kişi arasındaki aşkı ölçer.',
  execute(message, args) {
    const lovePercentage = Math.floor(Math.random() * 101); // Rastgele bir aşk yüzdesi üret

    const loveEmbed = new Discord.MessageEmbed()
      .setColor('#FF69B4')
      .setTitle('Aşk Ölçer')
      .setDescription(`**${args[0]}** ile **${args[1]}** arasındaki aşk yüzdesi:`)
      .addField('Aşk Yüzdesi:', `${lovePercentage}% ❤️`);

    message.channel.send(loveEmbed);
  },
};
