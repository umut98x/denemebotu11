module.exports = {
    name: 'rolal',
    description: 'Belirtilen üyeden belirtilen rolü alır.',
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
        const roleName = args.slice(1).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === roleName);

        if (user && role) {
            const member = message.guild.member(user);
            if (member) {
                member.roles.remove(role).then(() => {
                    // Mesajı silme ve botun yanıt vermemesi için aşağıdaki iki satır eklendi:
                    message.delete();
                    return;

                    // Eğer mesajı silmek istemezseniz yukarıdaki iki satırı silin.
                    
                    // message.reply(`${user.tag} kullanıcısından "${role.name}" rolü alındı.`);
                }).catch(err => {
                    message.reply('Rol alınırken bir hata oluştu.');
                    console.error(err);
                });
            } else {
                message.reply('Bu kullanıcı sunucuda değil.');
            }
        } else {
            message.reply('Kullanıcıyı ve/veya rolü belirtmelisiniz.');
        }
    },
};
