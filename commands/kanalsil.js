const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kanalsil',
    description: 'Belirtilen metin kanalını siler.',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
            try {
                await message.delete();
            } catch (error) {
                console.error('Mesaj silinirken bir hata oluştu:', error);
            }
            return;
        }

        const channelToDelete = message.mentions.channels.first();
        if (channelToDelete) {
            channelToDelete.delete().then(() => {
                const successEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Kanal Silme')
                    .setDescription(`"${channelToDelete.name}" adındaki kanal başarıyla silindi.`);

                message.reply({ embeds: [successEmbed] });
            }).catch(err => {
                const errorEmbed = new MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Hata')
                    .setDescription('Kanal silinirken bir hata oluştu.');

                message.reply({ embeds: [errorEmbed] });
                console.error(err);
            });
        } else {
            const missingArgsEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('Silinecek kanalı belirtmelisiniz.');

            message.reply({ embeds: [missingArgsEmbed] });
        }
    },
};
