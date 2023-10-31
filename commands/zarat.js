const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'zar',
    description: 'Rastgele bir zar atar.',
    execute(message, args) {
        const result = Math.floor(Math.random() * 6) + 1;

        const zarEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Zar Atma')
            .setDescription(`Hey ${message.author}, attığın zarın sonucu: ${result}`);

        message.channel.send(zarEmbed);
    },
};
