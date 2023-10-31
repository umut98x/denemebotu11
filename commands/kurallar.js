const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'kurallar',
  description: 'Sunucu kurallarını gösterir.',
  execute(message, args) {
    const kurallarEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Sunucu Kuralları')
     .addField('1. Saygılı Davranış', 'Diğer üyelere karşı saygılı ve nazik olun. Taciz, ayrımcılık ve kaba dil kabul edilemez.')
      .addField('2. Reklam ve Spam', 'Diğer üyeleri rahatsız edecek şekilde reklam yapmak ve spam yapmak yasaktır.')
      .addField('3. Uygunsuz İçerik', 'Yetişkin içerik, küfür, cinsellik vb. içerikler paylaşmak yasaktır.')
      .addField('4. Özel Bilgilerin Paylaşımı', 'Kişisel bilgilerinizi paylaşmaktan kaçının ve diğer üyelerin kişisel bilgilerini sormayın.')
      .addField('5. Tartışmalar ve Anlaşmazlıklar', 'Fikir ayrılıkları olabilir, ancak tartışmaları saygılı bir şekilde yapın. Ayrılıkların düzgün bir şekilde çözülmesine yardımcı olun.')
      .addField('6. Kategori ve Kanallara Uygun İçerik', 'Her kategoriye uygun içerikler paylaşın. Örneğin, bir "Sohbet" kanalında oyunla ilgili konulara girmekten kaçının.')
      .addField('7. Yanlış Kategoride Konuşmak', 'Konularınızı doğru kategoriye yerleştirin ve gereksiz yerlere mesaj göndermeyin.')
      .addField('8. Moderatör Talimatlarına Uyun', 'Moderatörlerin yönergelerine uyun ve onların kararlarına saygı gösterin.')
      .addField('9. İsim ve Avatar Kuralı', 'Uygun olmayan, rahatsız edici veya saldırgan kullanıcı adları veya avatarlar kullanmayın.')
      .addField('10. Rapor Etme', 'Uygunsuz davranışları veya kural ihlallerini moderatörlere bildirin.')
      .addField('11. Dil Seçimi', 'Sunucunun belirlediği dilde iletişim kurun.')
      .addField('12. Bot Komutları', 'Botları kullanırken gerekli komutları ve önekleri kullanın.')
      .setTimestamp()
      .setFooter('Kuralların ihlali durumunda ceza uygulanacaktır.');

    message.channel.send(kurallarEmbed);
  },
};
