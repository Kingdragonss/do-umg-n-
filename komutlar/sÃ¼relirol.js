const Discord = require('discord.js')
const ms = require("ms");

exports.run = async (client, message, args) => {
const mb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(`✮ HYĐЯΛ`)
.setTimestamp()

const emb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(`✮ HYĐЯΛ`)
.setTimestamp()

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(mb.setDescripton(`Bu komutu kullanabilmek için yetkiniz yetersiz.`))
let codare = message.mentions.users.first()
let chimp = message.mentions.roles.first()

if(!args[0]) return message.channel.send(mb.setDescription(`Bir kullanıcı etiketlemelisin.`))
if(!codare) return message.channel.send(mb.setDescription(`**${args[0]}**, kişisini sunucuda bulamıyorum.`))
  
if(!args[1]) return message.channel.send(mb.setDescription(`Bir rol etiketlemelisin.`))
if(!chimp) return message.channel.send(mb.setDescription(`**${args[1]}**, rolünü sunucuda bulamıyorum.`))
  
if(!args[2]) return message.channel.send(mb.setDescription(`Ne kadar süre rolün kalacağını belirtmelisin.`))
let süre = args[2];

message.guild.members.cache.get(codare.id).roles.add(chimp.id)
message.channel.send(emb.setDescription(`**${codare} isimli kişiye ${message.author.username} tarafından ${süre.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat')} boyunca ${chimp} rolü verildi.**`)).then(m => {
setTimeout(async () =>{  
message.guild.members.cache.get(codare.id).roles.remove(chimp.id)
m.edit(emb.setDescription(`**${codare}, için rol süresi doldu.**`))
}, ms(süre))
})
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'süreli',
description: "etiketli kişiye süreli rol verir",
};