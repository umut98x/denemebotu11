const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'yardim',
    description: 'Mevcut komutları listeler.',
    execute(message, args) {
        const yardimEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Mevcut Komutlar')
            .setDescription('Aşağıda mevcut olan komutlar listelenmektedir:')
            .addFields(
                { name: '.duello', value: 'Arkadaşınızla düello yaparsınız' },
                { name: '.öv', value: 'Birisini översiniz' },
                { name: '.aşk', value: 'Sunucudaki biriyle olan aşkınızı ölçer' },
                { name: '.profil', value: 'Birinin profil fotoğrafını büyütür' },
                { name: '.renk', value: 'Rastgele renk kodu yazar' },
                { name: '.sifre', value: 'Rastgele 8 haneli şifre oluşturur' },
                { name: '.say', value: 'Belirli bir mesajı tekrarlar.' },
                { name: '.yt', value: 'Yazı Tura Oynamanıza Yarar.' },
                { name: '.zar', value: 'Zar atarsınız.' },
            )
            .addField('\u200B', '\u200B') // Uzun bir çizgi için boş bir alan ekliyoruz.
            .addField('Not:', 'Komutları kullanırken komut önüne `.` koymalısınız.');

        message.channel.send(yardimEmbed);
    },
};
