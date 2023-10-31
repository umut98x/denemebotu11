module.exports = {
    name: 'say',
    description: 'Belirli bir mesajı tekrarlar.',
    args: true,
    usage: '<mesaj>',
    execute(message, args) {
      message.channel.send(`Mesajınız: ${args.join(' ')}`);
    },
  };