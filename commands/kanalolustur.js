const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kanaloluştur',
    description: 'Yeni bir metin kanalı oluşturur.',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
            try {
                await message.delete();
            } catch (error) {
                console.error('Mesaj silinirken bir hata oluştu:', error);
            }
            return;
        }

        const channelName = args.join('-').toLowerCase(); // Kanal adını düzenleyebilirsiniz
        if (!channelName) {
            const missingArgsEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('Kanal adını belirtmelisiniz.');

            return message.reply({ embeds: [missingArgsEmbed] });
        }

        message.guild.channels.create(channelName, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
        }).then(channel => {
            const successEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Kanal Oluşturma')
                .setDescription(`"${channel.name}" adında yeni bir metin kanalı oluşturuldu.`);

            message.reply({ embeds: [successEmbed] });
        }).catch(err => {
            const errorEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('Kanal oluşturulurken bir hata oluştu.');

            message.reply({ embeds: [errorEmbed] });
            console.error(err);
        });
    },
};
