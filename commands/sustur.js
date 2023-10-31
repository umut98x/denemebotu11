module.exports = {
    name: 'sustur',
    description: 'Belirtilen kullanıcıyı belirli bir süre boyunca susturur.',
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
                const muteRole = message.guild.roles.cache.find(role => role.name === 'Susturulmuş'); // Susturulmuş rolünün adını düzenleyin
                if (muteRole) {
                    const time = parseInt(args[1]);
                    if (!isNaN(time)) {
                        member.roles.add(muteRole).then(() => {
                            message.reply(`${user.tag} kullanıcısı ${time} dakika boyunca susturuldu.`);
                            setTimeout(() => {
                                member.roles.remove(muteRole);
                            }, time * 60 * 1000);
                        }).catch(err => {
                            message.reply('Kullanıcı susturulurken bir hata oluştu.');
                            console.error(err);
                        });
                    } else {
                        message.reply('Süreyi belirtmelisiniz.');
                    }
                } else {
                    message.reply('Susturulmuş rolü bulunamadı. Lütfen ayarlarınızı kontrol edin.');
                }
            } else {
                message.reply('Bu kullanıcı sunucuda değil.');
            }
        } else {
            message.reply('Susturulacak kullanıcıyı belirtmelisiniz.');
        }
    },
};
