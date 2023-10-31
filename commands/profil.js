const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'profil',
    description: 'Etiketlenen kullanıcının profil fotoğrafını gönderir.',
    execute(message, args) {
        const target = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Profil Fotosu: ${target.username}`)
            .setImage(target.displayAvatarURL({ dynamic: true, size: 256 }));

        message.channel.send(embed);
    },
};
