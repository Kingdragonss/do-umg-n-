const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const kdb = new data.table("kullanici");
exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  if(!["839950590083203172", "789463728315826184"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta. <a:hydrahayr:816551461219205160>`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\
  
  
let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir kullanıcı etiketlemelisin. <a:hydrahayr:816551461219205160>`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

if (!member) {
let sicil = kdb.delete(`kullanici.${member.id}.sicil`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setDescription(`${message.author} Sana Ait Sicil Verilerini Sildim! <a:hydrahayr:816551461219205160>`))
}
  
if(member) {
let sicil = kdb.delete(`kullanici.${member.id}.sicil`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setDescription(`${member} Kullanıcısına Ait Sicil Verilerini Sildim! <a:hydrahayr:816551461219205160>`))

};
  
}
  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sicil-sıfırla"],
  PermLevel: 0
};

 

exports.help = {
  name: "sicil-sıfırla",
  description: "",
  usage: ""
};