//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['824339767050240031'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`Başarısız !`).setDescription(`
<a:hydrastarrr:802176913757831198> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:hydrastarrr:802176913757831198>**`))

 
  let tag = "✮";
  const booster = message.guild.roles.cache.get("789206634429677619").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "online").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
    
  .setImage('')
    
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  .message.channel.send(embed.setDescription(`
  <a:hydrayildizi3:791092780398673940> Sunucumuzdaki Toplam üye  <a:hydrayildizi3:791092780398673940> **${toplam}** 
  <a:hydrayildizi3:791092780398673940> Sunucumuzdaki Online Üye <a:hydrayildizi3:791092780398673940> **${online}** 
  <a:hydrayildizi3:791092780398673940> Sunucumuzdaki Taglı Üye   <a:hydrayildizi3:791092780398673940> **${ttag}** 
  <a:hydrayildizi3:791092780398673940> Sunucumuzdaki Booster Üye <a:hydrayildizi3:791092780398673940> **${booster}** 
  <a:hydrayildizi3:791092780398673940> Sunucumuzdaki Sesteki Üye <a:hydrayildizi3:791092780398673940> **${ses}** `)); 


};



  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}

//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA