module.exports = {
    name: 'rolver',
    description: 'Belirtilen üyeye belirtilen rolü verir.',
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
                member.roles.add(role).then(() => {
                    // Mesajı silme ve botun yanıt vermemesi için aşağıdaki iki satır eklendi:
                    message.delete();
                    return;

                    // Eğer mesajı silmek istemezseniz yukarıdaki iki satırı silin.

                    // message.reply(`${user.tag} kullanıcısına "${role.name}" rolü verildi.`);
                }).catch(err => {
                    message.reply('Rol verilirken bir hata oluştu.');
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
