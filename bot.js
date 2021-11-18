const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags')
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    ${files.length} komut yüklenecek.
‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);

//------------------------------------------------------------------------------------------------------------\\



//------------------------------------------------------------------------------------------------------------\\

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174202486206514/896124580417114122/785697087727730718.gif?width=96&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/813691269498929162/814415864153112665/675225352192131080.gif?width=96&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983><a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983><a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983><a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/870204959554170950/870207090533220402/text.gif?width=486&height=42`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/870204959554170950/870207355214762024/text_1.gif?width=462&height=42`)
});


client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kalp1:875773300217880606><a:kalp1:875773300217880606><a:kalp1:875773300217880606><a:kalp1:875773300217880606>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kalp2:875773299831996416><a:kalp2:875773299831996416><a:kalp2:875773299831996416><a:kalp2:875773299831996416>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kalp3:875773299748134983><a:kalp3:875773299748134983><a:kalp3:875773299748134983><a:kalp3:875773299748134983>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:d1:870201626433028116><a:8_:870201631025815642>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591><a:konfeti:875775271712747591>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983><a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983><a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983><a:kalp1:875773300217880606><a:kalp2:875773299831996416><a:kalp3:875773299748134983>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174202486206514/896124580417114122/785697087727730718.gif?width=96&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174211533307904/894294033927655484/kalp_10.gif?width=86&height=86`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884><a:d1:870201626433028116><a:8_:870201631025815642><a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884><a:d1:870201626433028116><a:8_:870201631025815642><a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`<a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884><a:d1:870201626433028116><a:8_:870201631025815642><a:kelebek:870206434984484884><a:merve:870202076645457952><a:kelebek:870206434984484884>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/813691269498929162/814415886286716948/675225966569717761.gif?width=96&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174209788489808/909695245938225202/20210602_121655.gif?width=68&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174209788489808/909695245938225202/20210602_121655.gif?width=68&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174209788489808/909695228640903179/20210602_121624.gif?width=68&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174209788489808/909695228640903179/20210602_121624.gif?width=68&height=96`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174211533307904/894294033927655484/kalp_10.gif?width=86&height=86`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174211533307904/894294033927655484/kalp_10.gif?width=86&height=86`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://media.discordapp.net/attachments/894174211533307904/894294033927655484/kalp_10.gif?width=86&height=86`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`https://images-ext-1.discordapp.net/external/WYIMHLlE8-nMCnd1H-tjvGouV4_Tx_295744vt4rAt0/%3Fwidth%3D486%26height%3D42/https/media.discordapp.net/attachments/870204959554170950/870207090533220402/text.gif?width=365&height=32`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".") 
    return message.channel.send(`.`)
});







//------------------------------------------------------------------------------------------------------------\\


client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


//--------------------------------------------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let rol = member.guild.roles.cache.find(r => r.name === "JAİL");
let cezalımı = db.fetch(`cezali_${member.guild.id + member.id}`)
let sürejail = db.fetch(`süreJail_${member.id + member.guild.id}`)
if (!cezalımı) return;
if (cezalımı == "cezali") {
member.roles.add(ayarlar.JailCezalıRol)
 
member.send("Cezalıyken Sunucudan Çıktığın için Yeniden Cezalı Rolü Verildi!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`cezali_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Cezan açıldı.`)
    member.roles.remove('cezalı rol id');
  }, ms(sürejail));
}
})

//--------------------------------------------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let mute = member.guild.roles.cache.find(r => r.name === "MUTELİ ROLÜNÜN ADI NEYSE YAZ");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.roles.add(ayarlar.MuteliRol)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.roles.remove('muteli rol id');
  }, ms(süre));
}
})

//--------------------------------------------------------------------------------------\\


client.on('guildMemberAdd', async member => {
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.cache.get(data2)
if(!rol) return;
let kişi = member.guild.members.cache.get(member.id)
kişi.roles.add(rol.id);
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`)
  const wasted = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL({ dynamic : true }))
  .setColor(`#0x800d0d`)
  .setDescription(`Dostum hadi ama !!! Jaildan Kaçamazsın ikimizde birbirimizi kandırmayalım...!`)
  .setTimestamp()
    member.send(wasted)
} 
  
  
})

//--------------------------------------------------------------------------------------\\

client.on("message", async msg => {
  
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Bu sunucuda küfür filtresi etkin.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq","amguard","seksüel","sekssüel"];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.channel.send(new Discord.MessageEmbed().setDescription(`${oldMessage.author} Bu sunucuda küfür filtresi etkin.`).setColor('0x800d0d').setAuthor(oldMessage.member.displayName, oldMessage.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});


//--------------------------------------------------------------------------------------\\


//--------------------------------------------------------------------------------------\\

client.on("message", msg => {
 if(!db.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Bu sunucuda reklam filtresi etkin.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });

//--------------------------------------------------------------------------------------\\

client.on('messageDelete', message => {
  const data = require("quick.db")
  data.set(`snipe.mesaj.${message.guild.id}`, message.content)
  data.set(`snipe.id.${message.guild.id}`, message.author.id)

})

const iltifatlar = [
  '<a:hydragoldstar:791092863806996520> Sen benim düşlerimin surete bürünmüş halisin',
  '<a:hydragoldstar:791092863806996520> Bir sahil kasabasının huzuru birikmiş yüzüne',
  '<a:hydragoldstar:791092863806996520> Gülüşünde nice ilaçlar var yarama merhem olan',
  '<a:hydragoldstar:791092863806996520> Gece nasıl sabahı bekliyorsa aydınlanmak için ben de seni öyle bekliyorum',
  '<a:hydragoldstar:791092863806996520> Mükemmeli sende gördüm ben. Kusursuz kelimesinin tam karşılığısın gönlümde',
  '<a:hydragoldstar:791092863806996520> Bu dünya için sen çok fazlasın',
  '<a:hydragoldstar:791092863806996520> Etrafımda olduğunda başka bir şeye ihtiyacım olmuyor.',
  '<a:hydragoldstar:791092863806996520> Sen olmadan nasıl var olacağımı bilmiyorum.',
  '<a:hydragoldstar:791092863806996520> Güneşe gerek yok, gözlerindeki sıcaklık içimi ısıtıyor.',
  '<a:hydragoldstar:791092863806996520> x!x',
  '<a:hydragoldstar:791092863806996520> Baharda açan çiçeklerinden bile daha güzelsin. Eğer bir şair olsaydım, güzelliğine adanacak yüzlerce şiir yazabilirdim.',
  '<a:hydragoldstar:791092863806996520> O kadar güzelsin ki, bu dünyanın yaşamaya değer olduğuna beni inandırıyorsun.',
  '<a:hydragoldstar:791092863806996520> Dünyayı hiç kimsenin göremediği şekilde görmeme sebep olacak kadar güzelsin.',
  '<a:hydragoldstar:791092863806996520> Ruh ikizim su gibi duru güzelliğini düşünmekten vazgeçemiyorum.',
  '<a:hydragoldstar:791092863806996520> Baharı anımsatan kokunu içime çektiğimde, her şey mümkün görünüyor.',
  '<a:hydragoldstar:791092863806996520> Bu kadar güzel bakma, başka biri daha sana aşık olur diye ödüm kopuyor.',
  '<a:hydragoldstar:791092863806996520> Bu dünyaya yakışmayan bir güzelliğin var. Acaba hangi periler ülkesinden geldin.',
  '<a:hydragoldstar:791092863806996520> Güzel yüzünü göremediğim için geceleri hiç sevmiyorum.',
  '<a:hydragoldstar:791092863806996520> Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.',
  '<a:hydragoldstar:791092863806996520> Dünyadaki tüm şiirler sana yazılmış gibi hissettiriyorsun.',
  '<a:hydragoldstar:791092863806996520> Sen benim kabul olmuş en büyük duamsın.',
  '<a:hydragoldstar:791092863806996520> Naber',
  '<a:hydragoldstar:791092863806996520> Sen benim görmek için, bakmaya gerek bile duymadığım ezberimsin.',
  '<a:hydragoldstar:791092863806996520> Yeter ki diline dolanayım; istersen bir küfür, istersen bir şarkı olayım.',
  '<a:hydragoldstar:791092863806996520> Herkes sussun bir sen konuş, ne bıkarım ne doyarım sesine soluğuna.',
  '<a:hydragoldstar:791092863806996520> O kadar güzel bakıyorsun ki bazen, bütün dünya kör olsun istiyorum.',
  '<a:hydragoldstar:791092863806996520> Belki de en sevdiğim sakarlığın, gözlerime takılıp yüreğime düşmendi.',
];


// İLTİFATLARI BU ŞEKİLDE İSTEDİĞİNİZ KADAR ÇOĞALTABİLİRSİNİZ
client.on("message", async message => {
  if(message.channel.id !== "789194952688533558") return;
  let codeAcademy = db.get('chatiltifat');
  await db.add("chatiltifat", 1);
  if(codeAcademy >= 100) {//50 yazan yer kaç mesajda atcağını yazıyor
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`**${(iltifatlar)[random]}**`);
  };
});



client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'Sa') {
    msg.react('⭐')
    msg.reply('Aleyküm Selam Hoşgeldin  <a:hydrayakaladm:789455964457664532> ');
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.react('⭐')
    msg.reply('Aleyküm Selam Hoşgeldin  <a:hydrayakaladm:789455964457664532> ');
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.react('⭐')
    
    msg.reply('Aleyküm Selam Hoşgeldin  <a:hydrayakaladm:789455964457664532> ');
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'Selam') {
    msg.react('⭐')
    msg.reply('Aleyküm Selam Hoşgeldin  <a:hydrayakaladm:789455964457664532> ');
  }
});

client.on("ready", () => {
  client.channels.cache.get("909794132409593896").join();
})
//

 

