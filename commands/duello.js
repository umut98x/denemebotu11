const Discord = require('discord.js');

module.exports = {
  name: 'duello',
  description: 'İki kullanıcı arasında düello başlatır.',
  execute(message, args) {
    const challenger = message.author;
    const opponent = message.mentions.users.first();

    if (!opponent) return message.channel.send('Düello için bir rakip belirtmelisiniz.');

    const duelloEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Düello Kuralları')
      .setDescription('Düello başlamadan önce kuralları okuyun.')
      .addField('Kurallar:',
      '1. İlk atışı yapana kadar bekleyin.\n' +
      '2. Sıranız geldiğinde `!ates` komutu ile ateş edin.\n\n')
      .addField('Nasıl Oynanır:',
        '1. Düello başladığında her oyuncunun Can Puanı (HP) 100\'dür.\n' +
        '2. Her ateşte, rastgele 1 ile 20 arasında hasar verilir.\n' +
        '3. İlk Can Puanı 0 olan oyuncu kazanır.\n\n' +
        'Düelloya başlamak için `başla` yazmanız gerekmektedir.');

    message.channel.send(duelloEmbed).then((ruleMessage) => {
      const filter = (response) => {
        return response.author.id === message.author.id && response.content.toLowerCase() === 'başla';
      };

      const collector = message.channel.createMessageCollector(filter, { time: 60000 });

      collector.on('collect', () => {
        ruleMessage.delete();
        collector.stop();

        const duelMessage = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setTitle('Düello Başladı!')
          .setDescription(`${challenger} ve ${opponent} arasında bir düello başladı!\n\nSıra ${challenger}'de!`)
          .addField('Kurallar:',
            '1. İlk atışı yapana kadar bekleyin.\n' +
            '2. Sıranız geldiğinde `!ates` komutu ile ateş edin.');

        let currentPlayer = challenger;
        let opponentPlayer = opponent;
        let currentPlayerHP = 100;
        let opponentPlayerHP = 100;

        message.channel.send(duelMessage).then((msg) => {
          const filter = (response) => {
            return response.author.id === currentPlayer.id && response.content.toLowerCase() === '!ates';
          };

          const collector = message.channel.createMessageCollector(filter, { time: 60000 });

          collector.on('collect', (response) => {
            const damage = Math.floor(Math.random() * 20) + 1;
            opponentPlayerHP -= damage;

            const duelResult = new Discord.MessageEmbed()
              .setColor('#FF0000')
              .setTitle('Düello Devam Ediyor!')
              .setDescription(`${currentPlayer} ateş etti ve ${opponentPlayer} ${damage} hasar aldı!\n\n**${challenger.username}**: ${currentPlayerHP} HP\n**${opponent.username}**: ${opponentPlayerHP} HP`);

            msg.edit(duelResult);

            if (opponentPlayerHP <= 0 || currentPlayerHP <= 0) {
              collector.stop();
            } else {
              const temp = currentPlayer;
              currentPlayer = opponentPlayer;
              opponentPlayer = temp;
            }
          });

          collector.on('end', (collected, reason) => {
            let winner;
            if (currentPlayerHP <= 0) {
              winner = opponent;
            } else if (opponentPlayerHP <= 0) {
              winner = challenger;
            } else {
              winner = null;
            }

            if (winner) {
              const duelEndEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Düello Bitti!')
                .setDescription(`${winner} kazandı!`);

              msg.edit(duelEndEmbed);
            } else {
              const duelEndEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Düello Berabere!')
                .setDescription('Düello berabere sonuçlandı.');

              msg.edit(duelEndEmbed);
            }
          });
        });
      });
    });
  },
};
