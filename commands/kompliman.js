const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'öv',
    description: 'Bir kişiyi över ve mesajı siler.',
    async execute(message, args) {

        const compliments = [
            'Her zaman çok güler yüzlüsün!',
            'İnanılmaz bir enerjin var!',
            'Çevrendeki herkesi mutlu ediyorsun!',
            'Çok yaratıcı bir insansın!',
            'Her zaman motive edici oluyorsun!',
            'Çok başarılı birisin!',
            'Büyük bir ilham kaynağısın!',
            'Her zaman neşe saçıyorsun!',
            'Çok sevecensin!',
            'Daima pozitif bir bakış açısına sahipsin!',
            'Her zaman yanında olmaktan mutluluk duyuyorum!',
            'Çevreni aydınlatıyorsun!',
            'Harika bir arkadaşsın!',
            'Her zaman en iyisini yapıyorsun!',
            'Çok saygılı bir insansın!',
            'Herkes seninle gurur duyuyor!',
            'Çok hoşgörülüsün!',
            'Seni tanıdığıma çok memnun oldum!',
            'Her zaman çok saygılı davranıyorsun!',
            'Çok başarılı bir kariyere sahip olacaksın!',
            'Harika bir insan olmaktan asla vazgeçme!',
            'Her zaman çok dikkatli davranıyorsun!',
            'Seninle her zaman gülümsemek çok kolay!',
            'Çok cömertsin!',
            'Her zaman çok hoşsohbet birisin!',
            'Çok sabırlısın!',
            'Harika bir aileye sahip olmanın şansını yaşıyorsun!',
            'Herkes senin gibi olmak istiyor!',
            'Çok yeteneklisin!',
            'Her zaman çok hızlı öğreniyorsun!',
            'Çok cesursun!',
            'Harika bir lider olabilirsin!',
            'Her zaman çok olumlu düşünüyorsun!',
            'Çok yaratıcı fikirlerin var!',
            'Her zaman çok saygın davranıyorsun!',
            'Çok özverili bir insansın!',
            'Senin gibi bir insanla tanıştığım için çok şanslıyım!',
            'Her zaman çok düşüncelisin!',
            'Çok yeteneklisin!',
            'Her zaman çok çözüm odaklısın!',
            'Çok güçlüsün!',
            'Senin gibi bir insanın olması harika!',
            'Her zaman çok başarılı olacaksın!',
            'Çok disiplinlisin!',
            'Seni tanımak benim için bir ayrıcalık!',
            'Her zaman çok sevgi dolusun!',
            'Çok azimlisin!',
            'Her zaman çok adil davranıyorsun!',
            'Çok hırslısın!',
            'Senin gibi bir insanla çalışmak harika olurdu!',
        ];

        let user = message.mentions.users.first();

        if (!user) {
            user = message.author;
        }

        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

        const complimentEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`${user} ${randomCompliment}`);

        try {
            await message.delete();
        } catch (error) {
            console.error('Mesaj silinirken bir hata oluştu:', error);
        }

        message.channel.send(complimentEmbed);
    },
};
