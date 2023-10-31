module.exports = {
    name: 'sifre',
    description: 'Rastgele bir şifre oluşturur.',
    execute(message, args) {
        const length = args[0] || 8; // Varsayılan şifre uzunluğu: 8
        const password = Math.random().toString(36).slice(2, 2 + parseInt(length));
        message.channel.send(`Oluşturulan şifre: \`${password}\``);
    },
};
