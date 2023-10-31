module.exports = {
    name: 'sunucubilgi',
    description: 'Sunucu hakkında bilgiler gösterir.',
    execute(message, args) {
        message.channel.send(`Sunucu Adı: ${message.guild.name}\nToplam Üye Sayısı: ${message.guild.memberCount}`);
    },
};
