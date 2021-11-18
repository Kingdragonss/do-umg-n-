const { MessageEmbed } = require("discord.js");
const ayarlar = require("../ayarlar.json");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['789463728315826184'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('')) return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`Başarısız !`).setDescription(`
<a:hydrastarrr:802176913757831198> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:hydrastarrr:802176913757831198>**`))


  
  const embed = new MessageEmbed()
  
  .setImage('https://media.discordapp.net/attachments/789198309197479947/850052136472805376/765132348642951168.gif?width=102&height=72')   
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`<a:hydratatlis:792780559704391711> <@${message.author.id}> **Karpuzcu Buşeeeeeeeeee Belirdi! 🍉 <a:hydratatlis:792780559704391711>** 
    
  `)); 
     message.react(ayarlar.emoji.diğer.onay) 
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["b"],
  permLvl: 0,
}

  exports.help = {
  name: 'b'
}