const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = ".";
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Bot çalışıyor!');
  client.user.setPresence({
      activity: {
          name: 'Sikiyle',
          type: 'PLAYING', // Oynuyor, Dinliyor, İzliyor, Yayında modlarından birini seçebilirsiniz
      },
      status: 'dnd', // online, idle, dnd, invisible modlarından birini seçebilirsiniz
  });

  client.user.setAFK(false); // Botun AFK modunu kapat
  client.user.setUsername('TUMU'); // Yeni bot adını ayarla
  client.user.setAvatar('https://banner2.cleanpng.com/20180616/gqo/kisspng-chatbot-computer-icons-robot-internet-bot-bot-5b255c627e67b8.8695619015291751385178.jpg'); // Yeni avatarı ayarla
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Komut çalıştırılırken bir hata oluştu.');
    }
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  const otorol = member.guild.roles.cache.get('1168355620072718437'); // "OTOROL_ID" kısmını otorolün ID'si ile değiştirin
  member.roles.add(otorol);

  const welcomeChannel = member.guild.channels.cache.get('1168545352148860939'); // "HOŞGELDİN_KANAL_ID" kısmını hoşgeldin mesajının gönderileceği kanalın ID'si ile değiştirin

  if (welcomeChannel) {
    const welcomeEmbed = new Discord.MessageEmbed()
      .setTitle(`Hoş Geldin, ${member.user.username}!`)
      .setDescription(`Sunucumuza hoş geldin, ${member.user.username}!`)
      .setColor('#00ff00')
      .setThumbnail(member.user.displayAvatarURL())
      .addField('Kurallar', 'Lütfen kurallara uyun!')
      .setFooter(`Sunucumuza katıldı: ${member.user.tag}`)
      .setTimestamp();

    welcomeChannel.send(welcomeEmbed);
  }
});



client.login('MTA4MjM4MjM3NDA2MDQ0MTY0MA.GgXdRj.nxb-JFP9bZaXvtumPTSaUMS752x0T4BE_9U6iU');
