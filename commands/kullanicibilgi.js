const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kullanıcıbilgi',
    description: 'Belirtilen kullanıcının bilgilerini gösterir.',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
            try {
                await message.delete();
            } catch (error) {
                console.error('Mesaj silinirken bir hata oluştu:', error);
            }
            return;
        }

        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                const userInfoEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Kullanıcı Bilgisi')
                    .addFields(
                        { name: 'Kullanıcı adı', value: user.username },
                        { name: 'ID', value: user.id },
                        { name: 'Sunucuya katılma tarihi', value: member.joinedAt }
                    );
                message.channel.send(userInfoEmbed);
            } else {
                message.reply('Bu kullanıcı sunucuda değil.');
            }
        } else {
            message.reply('Bilgilerini göstermek istediğiniz kullanıcıyı belirtmelisiniz.');
        }
    },
};
