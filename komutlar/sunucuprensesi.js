const { MessageEmbed } = require("discord.js");
const ayarlar = require("../ayarlar.json");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['849358499254894623'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('')) return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`Başarısız !`).setDescription(`
<a:hydrastarrr:802176913757831198> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:hydrastarrr:802176913757831198>**`))


  
  const embed = new MessageEmbed()
    
  .setImage('https://media.discordapp.net/attachments/789194952688533560/857177558117384232/816361717659074560.gif?width=102&height=29')
   
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`
  <a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172><a:hydrastars:853584918431793172>
  <a:atnalevv:808620322030878750> <a:hydrawow:791994439002095616> <@${message.author.id}> **Sunucu Prensesi Belirdi! <a:hydrawow:791994439002095616> <a:atnalevv:808620322030878750>** 
    
  `)); 
   message.react(ayarlar.emoji.diğer.merve) 
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["m"],
  permLvl: 0,
}

  exports.help = {
  name: 'm'
}