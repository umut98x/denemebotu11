const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'duyuru',
  description: 'Bir duyuru yapar.',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name === 'Moderator')) {
      try {
        message.delete();
      } catch (error) {
        console.error('Mesaj silinirken bir hata oluştu:', error);
      }
      return;
    }

    const channelId = '1168675077370425374'; // Sabit kanal ID'si

    const channel = message.guild.channels.cache.get(channelId);

    if (!channel) {
      return message.reply('Hatalı kanal IDsi girdiniz.');
    }

    const announcementMessage = `‼️${args.join(' ')}‼️`; // Mesajın başına ve sonuna ‼️ ekliyoruz

    const announcementEmbed = new MessageEmbed()
      .setColor('#FF0000') // Kırmızı renk
      .setTitle('Yeni Duyuru!')
      .setDescription(announcementMessage);

    channel.send(announcementEmbed);
  },
};
