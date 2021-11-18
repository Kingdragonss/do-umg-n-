const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["839950590083203172"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "789194951724498955"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0:809444319248252971>`,
'1': `<a:h1:809444326782140446>`,
'2': `<a:h2:809444335598436400>`,
'3': `<a:3:809444347715911690>`,
'4': `<a:h4:809444357211947078>`,                       
'5': `<a:h5:809444365327532102>`,
'6': `<a:h6:809444374705733714>`,
'7': `<a:7:809444384479117312>`,
'8': `<a:8:809444390425985034>`,
'9': `<a:h9:809444399061794846>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:0:809444319248252971>`,
'1': `<a:h1:809444326782140446>`,
'2': `<a:h2:809444335598436400>`,
'3': `<a:3:809444347715911690>`,
'4': `<a:h4:809444357211947078>`,                       
'5': `<a:h5:809444365327532102>`,
'6': `<a:h6:809444374705733714>`,
'7': `<a:7:809444384479117312>`,
'8': `<a:8:809444390425985034>`,
'9': `<a:h9:809444399061794846>`}[d];})}

var taglılar = 0;
let tag = "✮";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:0:809444319248252971>`,
'1': `<a:h1:809444326782140446>`,
'2': `<a:h2:809444335598436400>`,
'3': `<a:3:809444347715911690>`,
'4': `<a:h4:809444357211947078>`,                       
'5': `<a:h5:809444365327532102>`,
'6': `<a:h6:809444374705733714>`,
'7': `<a:7:809444384479117312>`,
'8': `<a:8:809444390425985034>`,
'9': `<a:h9:809444399061794846>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:0:809444319248252971>`,
'1': `<a:h1:809444326782140446>`,
'2': `<a:h2:809444335598436400>`,
'3': `<a:3:809444347715911690>`,
'4': `<a:h4:809444357211947078>`,                       
'5': `<a:h5:809444365327532102>`,
'6': `<a:h6:809444374705733714>`,
'7': `<a:7:809444384479117312>`,
'8': `<a:8:809444390425985034>`,
'9': `<a:h9:809444399061794846>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("789206634429677619").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:0:809444319248252971>`,
'1': `<a:h1:809444326782140446>`,
'2': `<a:h2:809444335598436400>`,
'3': `<a:3:809444347715911690>`,
'4': `<a:h4:809444357211947078>`,                       
'5': `<a:h5:809444365327532102>`,
'6': `<a:h6:809444374705733714>`,
'7': `<a:7:809444384479117312>`,
'8': `<a:8:809444390425985034>`,
'9': `<a:h9:809444399061794846>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
<a:hydrataggsw:854388831910101003> **Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
<a:hydrataggsw:854388831910101003> **Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
<a:hydrataggsw:854388831910101003> **Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
<a:hydrataggsw:854388831910101003> **Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
<a:hydrataggsw:854388831910101003> **Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}