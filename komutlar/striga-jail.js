const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const jdb = new db.table("cezalar");
const kdb = new db.table("kullanici");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\
  
if(!["789194951967375416"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const cezalırol = '789194952030683169'//Jail rolü
const jaillog = message.guild.channels.cache.find(c => c.id === '804349616929636352')//Jail Log

//-------------------------------------------------------------------------------\\



let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let zaman = args[1]
let sebep = args[2]
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, <a:hydrasymbol:853584916448673792>**Bir kullanıcı etiketlemelisin.** <a:hydrasymbol:853584916448673792>`).setImage('https://images-ext-2.discordapp.net/external/K8wX-XK-Nm5s2cfeXVkR-tJ2vqnAaZHVsonBIyddONs/%3Fwidth%3D400%26height%3D166/https/media.discordapp.net/attachments/833366046853169234/843968072909586452/MUTANT__Kullerinden_Dogan.gif?width=320&height=133').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 500000}));
if(!args[1]) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir zaman belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir sebep belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Kendini sunucudan cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir botu sunucudan cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Sunucu sahibini sunucudan cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`${message.author} tarafından ${kullanici} \`${sebep}\` sebebiyle jail'a atıldı`));
 
let zaman1 = args[1]
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
//
var vakit = zaman1
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");  
  
db.set(`cezali_${message.guild.id + kullanici.id}`, 'cezali')
db.set(`süreJail_${message.mentions.users.first().id + message.guild.id}`, zaman1)
  
  let tumaylar = {
        "01": "Ocak",  
        "02": "Şubat", 
        "03": "Mart",  
        "04": "Nisan",  
        "05": "Mayıs", 
        "06": "Haziran", 
        "07": "Temmuz",
        "08": "Ağustos", 
        "09": "Eylül", 
        "10": "Ekim", 
        "11": "Kasım", 
        "12": "Aralık", 
        }
        let aylar = tumaylar; 
   let muteler = jdb.get(`tempmute`) || [];
                if (!muteler.some(j => j.id == kullanici.id)) {
                  kdb.add(`kullanici.${message.author.id}.mute`, 1);
                    db.add('case', 1)
                    const numara = await db.fetch('case')
                    moment.locale("tr");
                  kdb.push(`kullanici.${kullanici.id}.sicil`, {
                    Yetkili: message.author.id,
                    Sebep: sebep,
                    Ceza: "JAIL",
                    Süre: vakit,
                    cezano: numara,
                    Tarih: (`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}`) 
                  });
                };
kullanici.roles.add(cezalırol);
kullanici.roles.cache.forEach(r => {
kullanici.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}`, r.id )})
moment.locale("tr");
jaillog.send(new MessageEmbed().setImage('https://images-ext-2.discordapp.net/external/1thO2x_NxJcgIzULvSpjFTq39ziOmYCzfdoUGe_2fmo/%3Fwidth%3D320%26height%3D132/https/images-ext-2.discordapp.net/external/ZdRh4jcb4aF_1WY_xBdUUx25yKmHZ2ICR4MZU2k9kdc/%253Fwidth%253D400%2526height%253D165/https/images-ext-1.discordapp.net/external/7c3xcV3btjH674Im1sgTlywt8t5LyMe8jN020BJA4ss/%25253Fcid%25253D790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6%252526rid%25253Dgiphy.gif/https/media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?width=256&height=106').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:hydrasymbol:853584916448673792> **Cezalandırıldı !**\n<a:hydrasymbol:853584916448673792> **Yetkili:** ${message.author} (\`${message.author.id}\`)\n<a:hydrasymbol:853584916448673792> **Kullanıcı:** ${kullanici.user} (\`${kullanici.user.id}\`)\n<a:hydrasymbol:853584916448673792> **Süre:** \`${zaman1}\` \n<a:hydrasymbol:853584916448673792> **Sebep:** \`${sebep}\` \n<a:hydrasymbol:853584916448673792> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``));
message.react('✅')
setTimeout(async () =>{
kullanici.roles.remove(cezalırol)
jaillog.send(new MessageEmbed().setImage('https://images-ext-2.discordapp.net/external/1thO2x_NxJcgIzULvSpjFTq39ziOmYCzfdoUGe_2fmo/%3Fwidth%3D320%26height%3D132/https/images-ext-2.discordapp.net/external/ZdRh4jcb4aF_1WY_xBdUUx25yKmHZ2ICR4MZU2k9kdc/%253Fwidth%253D400%2526height%253D165/https/images-ext-1.discordapp.net/external/7c3xcV3btjH674Im1sgTlywt8t5LyMe8jN020BJA4ss/%25253Fcid%25253D790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6%252526rid%25253Dgiphy.gif/https/media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?width=256&height=106').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`<a:hydrasymbol:853584916448673792> **Kullanıcının Cezası Bitti.**\n<a:hydrasymbol:853584916448673792> ${kullanici.user} (\`${kullanici.user.id}\`)\n<a:hydrasymbol:853584916448673792> **Süre:** \`${zaman1}\` \n<a:hydrasymbol:853584916448673792> **Tarih:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\``));
}, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const roller = await db.fetch(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}` )
if(roller != r.id)  return ;
if(roller){kullanici.roles.add(roller)}
db.delete(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}`)
})
              }, ms(zaman));

  
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail'],
    permLevel: 0,
}

exports.help = {
      name: "jail"  
  
}