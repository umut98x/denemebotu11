const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'oylama',
  description: 'Bir oylama başlatır.',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
      try {
        message.delete();
      } catch (error) {
        console.error('Mesaj silinirken bir hata oluştu:', error);
      }
      return;
    }

    const channel = message.channel; // Komutun kullanıldığı kanal

    const voteQuestion = args.join(' ').toUpperCase(); // Metni büyük harflere dönüştür

    const voteEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**YENİ OYLAMA**')
      .setDescription(voteQuestion)
      .setFooter(`Oylamayı başlatan: ${message.author.tag}`, message.author.avatarURL());

    channel.send(voteEmbed).then((msg) => {
      msg.react('👍'); // Evet reaksiyonu
      msg.react('👎'); // Hayır reaksiyonu
    });

    message.delete(); // Komutun kullanıldığı mesajı sil
  },
};
