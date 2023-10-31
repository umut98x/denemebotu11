module.exports = {
    name: 'rololuştur',
    description: 'Yeni bir rol oluşturur.',
    async execute(message, args) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
            try {
                await message.delete();
            } catch (error) {
                console.error('Mesaj silinirken bir hata oluştu:', error);
            }
            return;
        }

        const roleName = args.join(' ');
        if (!roleName) {
            return message.reply('Rol adını belirtmelisiniz.');
        }

        message.guild.roles.create({
            data: {
                name: roleName,
                color: 'RANDOM',
            },
        }).then(role => {
            message.reply(`"${role.name}" adında yeni bir rol oluşturuldu.`);
        }).catch(err => {
            message.reply('Rol oluşturulurken bir hata oluştu.');
            console.error(err);
        });
    },
};
