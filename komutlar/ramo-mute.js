
const { MessageEmbed } = require("discord.js");
const data = require("quick.db");
const ayarlar = require("../ayarlar.json");
const jdb = new data.table("cezalar");
const kdb = new data.table("kullanici");
const ms = require('ms');
const moment = require('moment');
module.exports.run = async (client, message, args) => {
  
//-------------------------------------------------------------------------------\\

if(!["824339690421354606"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const mutelog = message.guild.channels.cache.find(c => c.id === '804349296358195230')//Mute logu
const muterol = message.guild.roles.cache.find(r => r.id === '789194952030683172')//Muteli rolü

//-------------------------------------------------------------------------------\\

let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setImage('https://images-ext-2.discordapp.net/external/SGfQpa3LVuy04zksNwHTsPYMo43feo6GW7X1uBvabgM/https/media.discordapp.net/attachments/789198309197479947/822727331679305758/text-1.gif?width=242&height=47').setDescription(`<a:hydrastarrr:802176913757831198> ${message.author}, **lütfen bir kullanıcı etiketle !** <a:hydrahayr:816551461219205160>`))
          
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor('0x800d0d').setDescription(`${message.author}, lütfen mute atmam gereken kullanıcı belirt ! <a:hydrahayr:816551461219205160>`);
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
              {
return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda. <a:hydrahayr:816551461219205160> `));
} else {
let zaman = args[1]   
.replace("sn", "s")
.replace("dk", "m")
.replace("sa", "h")
.replace("gün", "d");
if (!zaman) { message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Lütfen Bir zaman dilimi belirtin. <a:hydrahayr:816551461219205160>`));
} else {
let sebep = args[2]
if(!sebep) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Lütfen Bir sebep belirtiniz. <a:hydrahayr:816551461219205160>`))  
                
let zamandilimi = zaman
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");
                  
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
               {
let muteler = jdb.get(`tempmute`) || [];
if (!muteler.some(j => j.id == member.id)) {
kdb.add(`kullanici.${message.author.id}.mute`, 1);
data.add('case', 1)
const numara = await data.fetch('case')
moment.locale("tr");
kdb.push(`kullanici.${member.id}.sicil`, {
Yetkili: message.author.id,
Sebep: sebep,
Ceza: "MUTE",
Süre: zamandilimi,
cezano: numara,
Tarih: (`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}`) 
});
};
                 
data.set(`muteli_${member.guild.id + member.id}`, 'muteli')
data.set(`süre_${member.id + member.guild.id}`, zamandilimi)
                 
message.react(ayarlar.emoji.diğer.onay)          
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp().setDescription(`${message.author} tarafından ${member} **${sebep}** sebebiyle **${zamandilimi} boyunca** mute atıldı`));
mutelog.send(
new MessageEmbed()
.setImage('https://images-ext-1.discordapp.net/external/NgjTsyx7hdZWIkH67z2gntGP9p-KJZkvc_Us1RNPbt0/%3Fwidth%3D154%26height%3D154/https/images-ext-1.discordapp.net/external/k87GvHOflwBRAilfgXWwqtONNNaLGXkL3m_fLGr50tU/%253Fwidth%253D192%2526height%253D192/https/images-ext-1.discordapp.net/external/4-o93lP4Blrun_GC95QLXm10Bstl0YkfnO25AnmeMqE/%25253Fwidth%25253D240%252526height%25253D240/https/media.discordapp.net/attachments/697503497217638451/800048100629938256/tenor.gif?width=123&height=123')
.setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
.setColor('ffdb55')
.setDescription(`
<a:hydrasymbol:853584916448673792> **Metin Kanallarında Susturuldu !**
<a:hydrasymbol:853584916448673792> **Kullanıcı:** <@${member.id}> (\`${member.id}\`)
<a:hydrasymbol:853584916448673792> **Yetkili:** <@${message.author.id}> (\`${message.author.id}\`)
<a:hydrasymbol:853584916448673792> **Süre:** \`${zamandilimi}\`
<a:hydrasymbol:853584916448673792> **Tarih:** (\`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\`)
        
`))
mute.roles.add(muterol)
message.react(ayarlar.emoji.diğer.onay)
} 
setTimeout(async function() {
mute.roles.remove(muterol)
mutelog.send(
new MessageEmbed()
.setColor('#494459')
.setTimestamp()
.setDescription(`
<a:hydrasymbol:853584916448673792> **Metin Kanallarında Susturulması Bitti !**
<a:hydrasymbol:853584916448673792> **Kullanıcı:** <@${member.id}> (\`${member.id}\`)
<a:hydrasymbol:853584916448673792> **Süre:** \`${zamandilimi}\`
<a:hydrasymbol:853584916448673792> **Tarih:** (\`${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")}\`)`)
);
}, ms(zaman));
        
}}}
 
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["mute"],
    permLevel: 0,
    name: "mute"
  }
  
  exports.help = {
    name: "mute"
  };
  
  