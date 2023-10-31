const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kanaladiayarla',
    description: 'Belirtilen kanalın adını değiştirir.',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
            try {
                await message.delete();
            } catch (error) {
                console.error('Mesaj silinirken bir hata oluştu:', error);
            }
            return;
        }

        const channelToEdit = message.mentions.channels.first();
        const newChannelName = args.slice(1).join('-').toLowerCase(); // Yeni kanal adını düzenleyebilirsiniz
        if (channelToEdit && newChannelName) {
            channelToEdit.setName(newChannelName).then(updatedChannel => {
                const successEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Kanal Adı Güncelleme')
                    .setDescription(`Kanal adı başarıyla "${updatedChannel.name}" olarak güncellendi.`);

                message.reply({ embeds: [successEmbed] });
            }).catch(err => {
                const errorEmbed = new MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Hata')
                    .setDescription('Kanal adı güncellenirken bir hata oluştu.');

                message.reply({ embeds: [errorEmbed] });
                console.error(err);
            });
        } else {
            const missingArgsEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('Kanalı ve yeni adını belirtmelisiniz.');

            message.reply({ embeds: [missingArgsEmbed] });
        }
    },
};
