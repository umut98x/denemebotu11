const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kayit',
    description: 'Sunucuya yeni katılan üyeye rol verme komutu',
    execute(message, args, client) {
        const member = message.member;
        const role = message.guild.roles.cache.find(role => role.name === 'VERİLECEK_ROLUN_ADı'); // ROLÜN ADINI BURAYA YAZIN

        if (role) {
            member.roles.add(role).catch(console.error);

            const successEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Kayıt Tamamlandı')
                .setDescription('Hoş geldin! Kaydınız başarıyla tamamlandı.');

            message.channel.send({ embeds: [successEmbed] });
        } else {
            const errorEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Hata')
                .setDescription('Kayıt işlemi sırasında bir hata oluştu. Lütfen yetkililere bildirin.');

            message.channel.send({ embeds: [errorEmbed] });
        }
    },
};
