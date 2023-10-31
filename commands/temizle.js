module.exports = {
    name: 'temizle',
    description: 'Belirtilen miktarda mesajı temizler.',
    async execute(message, args) {
        // Sadece Moderator rolüne sahip olanlara izin ver
        if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
            try {
                await message.delete();
            } catch (error) {
                console.error('Mesaj silinirken bir hata oluştu:', error);
            }
            return;
        }

        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) {
            return message.reply('Geçerli bir sayı belirtmelisiniz.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('1 ile 99 arasında bir sayı belirtmelisiniz.');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Mesajları temizleyemedim.');
        });
    },
};
