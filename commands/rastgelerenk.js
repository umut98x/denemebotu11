module.exports = {
    name: 'renk',
    description: 'Rastgele bir renk kodu oluşturur.',
    execute(message, args) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        message.channel.send(`Oluşturulan renk kodu: ${randomColor}`, {
            embed: {
                color: randomColor,
                description: 'Oluşturulan renk soldaki çizginin rengindedir.',
            },
        });
    },
};
