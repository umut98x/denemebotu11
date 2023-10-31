module.exports = {
    name: 'ban',
    description: 'Belirtilen kullanıcıyı sunucudan yasaklar.',
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
                member.ban({ reason: 'Yasaklama sebebi belirtilmedi.' }).then(() => {
                    message.reply(`${user.tag} kullanıcısı başarıyla yasaklandı.`);
                }).catch(err => {
                    message.reply('Kullanıcı yasaklanırken bir hata oluştu.');
                    console.error(err);
                });
            } else {
                message.reply('Bu kullanıcı sunucuda değil.');
            }
        } else {
            message.reply('Yasaklanacak kullanıcıyı belirtmelisiniz.');
        }
    },
};
