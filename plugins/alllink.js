/* codded by afnanplk
use this git under copyright
dont change credit
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const Jimbrootan = require('../jimbrootan')
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);

}
var alllink_var = ''
async function megalink() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        alllink_var = vars.ALL_LINK_BAN
    });
}
megalink()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '```Link Detected ! eda mone ee link ivde allowed alla appo pinne engane , oke bye \n\n 🕊🕊*'
if (Config.LANG == 'ML') ldc = '*ലിങ്ക് കണ്ടെത്തി!*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
if (Config.LANG == 'HI') ldc = '*लिंक का पता चला!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (alllink_var == 'true' && message.jid !== '9082891698-1616356915@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));

var alllink_var = ''
async function jinn() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        AI_var = vars.JINN_AI
    });
}
jinn()
var plk1 = ''
var plk2 = ''
var plk3 = ''
var plk4 = ''
var plk5 = ''
var plk6 = ''
var plk7 = ''
var plk8 = ''
var plk9 = ''

 if (Config.LANG == 'ML') {
         plk1 = '```എല്ലാ കമാൻഡുകളും ലഭിക്കാൻ .help ടൈപ്പ് ചെയ്യുക```'
         plk2 = 'എന്റെ പേര് '
         plk3 = 'അതെ എന്നോട് പറയൂ, ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും'
         plk4 = '👻Boo-o-o-oh👻'
         plk5 = 'എനിക്കറിയാം അവൻ എന്റെ സ്രഷ്ടാവാണെന്ന്'
         plk6 = 'ᴍᴏꜱꜱ , ꜱᴀʜᴀʟ , ᴄʜᴇʀʀʏ , ꜰᴀʀʜᴀɴ'
         plk7 = 'ഞാൻ .... ആഹ് ഞാൻ ആരാണെന്ന് എനിക്കറിയില്ല \n ഞാൻ ആരാണെന്ന് നിങ്ങൾക്കറിയാമെങ്കിൽ ദയവായി എന്നോട് പറയു🥺🥺'
         plk8 = 'ആരെങ്കിലും എന്നെ സഹായിക്കൂ, ഈ വ്യക്തി മോശമായി സംസാരിക്കുന്നു \n ഞാൻ ഒരു നല്ല പെൺകുട്ടിയാണ് ... \n\n ട്രിൻ..ട്രിൻ ... *ഹലോ പോലീസ് സ്റ്റേഷൻ *'
         plk9 = ' https://github.com/Mikhaiel/jinnh '
         plk10 = 'സുപ്രഭാതം'
         plk11 = 'ഗുഡ് മോർണിംഗ്'
         plk12 = 'ശുഭാരംഭം'
         plk13 = 'ശുഭദിനം'
         plk14 = 'ശുഭരാത്രി'
         plk15 = 'സുഖനിദ്ര'
         plk16 = 'ദിവസം എത്ര മോശമായിരുന്നിട്ടും, എല്ലായ്പ്പോഴും അത് നല്ല ചിന്തകളോടെ അവസാനിപ്പിക്കാൻ ശ്രമിക്കുക. അടുത്ത ദിവസം ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ ശ്രമിക്കുക, ഒപ്പം ഒരു മധുര സ്വപ്നത്തിനായി പ്രതീക്ഷിക്കുക. ശുഭ രാത്രിറ്'
         plk17 = 'രാത്രികൾ വിശ്രമിക്കുന്നതിനാണ്, വിഷമിക്കേണ്ടതില്ല. അതിനാൽ, കിടക്കയിൽ കയറി കുറച്ച് ഉറങ്ങുക. ശുഭ രാത്രി! പുതിയ സാധ്യതകൾ നിറഞ്ഞ ഒരു പുതിയ ദിവസം നിങ്ങളെ കാത്തിരിക്കുന്നു'
      }//afnanplk creation
    else {
        plk1 = 'type .list'
        plk2 = 'hey am '
        plk3 = 'ʏᴇꜱ ᴛᴇʟʟ ᴍᴇ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ'
        plk4 = '👻Boo-o-o-oh👻'
        plk5 = 'i know him he is my creator'
        plk6 = 'ᴍᴏꜱꜱ , ꜱᴀʜᴀʟ , ᴄʜᴇʀʀʏ , ꜰᴀʀʜᴀɴ'
        plk7 = 'i am .... aah i dont know who i am \n please tell me if you know who i am 🥺🥺'
        plk8 = 'somebody help me this person is talking bad things \n i am a good girl...\n\n trin..trin... *hello police station*'
        plk9 = 'https://github.com/Mikhaiel/Jinnh-'
        plk10 = '𝐠𝐨𝐨𝐝 𝐦𝐨𝐫𝐧𝐢𝐧𝐠'
        plk11 = '𝓰𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰'
        plk12 = '𝙶𝚘𝚘𝚍 𝚖𝚘𝚛𝚗𝚒𝚗𝚐'
        plk13 = 'ɠσσԃ ɱσɾɳιɳɠ'
        plk14 = '𝚐𝚘𝚘𝚍 𝚗𝚒𝚐𝚑𝚝'
        plk15 = '𝘨𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵'
        plk16 = '𝓰𝓸𝓸𝓭 𝓷𝓲𝓰𝓱𝓽'
        plk17 = '𝐠𝐨𝐨𝐝 𝐧𝐢𝐠𝐡𝐭'
    }  


Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
   if (AI_var == 'true' && message.jid !== '919562803423-1627735504@g.us') {
    
        let regex1 = new RegExp('commands')
        let regex2 = new RegExp('name')
        let regex3 = new RegExp('bot')
        let regex4 = new RegExp('Jimbrootan')
        let regex5 = new RegExp('Mikhaiel')
        let regex6 = new RegExp('supporter')
        let regex7 = new RegExp('Who are you')
        let regex8 = new RegExp('nude')
        let regex9 = new RegExp('Git')
        let regex10 = new RegExp(Jimbrootan.OA_NAME)
        let regex11 = new RegExp('GOOD MORNING')
        let regex12= new RegExp('Good Morning')
        let regex13 = new RegExp('gd mrng')
        let regex14 = new RegExp('Mrng')
        let regex15 = new RegExp('Good Night')
        let regex16 = new RegExp('good night')
        let regex17 = new RegExp('ni8')
        let regex18 = new RegExp('nyt')
        if (regex1.test(message.message)) {              
            await message.client.sendMessage(message.jid,plk1, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
           await message.client.sendMessage(message.jid,plk2 + Jimbrootan.OB_NAME, MessageType.text, {quoted: message.data })
        }
         else if (regex3.test(message.message)) {
            await message.client.sendMessage(message.jid,plk3, MessageType.text, {quoted: message.data })
        }
        else if (regex4.test(message.message)) {
           await message.client.sendMessage(message.jid,plk4, MessageType.text, {quoted: message.data })
        }
        else if (regex5.test(message.message)) {
          await message.client.sendMessage(message.jid,plk5, MessageType.text, {quoted: message.data })
        }
         else if (regex6.test(message.message)) {
           await message.client.sendMessage(message.jid,plk6, MessageType.text, {quoted: message.data })
        }
         else if (regex7.test(message.message)) {
           await message.client.sendMessage(message.jid,plk7, MessageType.text, {quoted: message.data })
        }//created by afnanplk
         else if (regex8.test(message.message)) {
           await message.client.sendMessage(message.jid,plk8, MessageType.text, {quoted: message.data })
        }
         else if (regex9.test(message.message)) {
   await message.client.sendMessage(message.jid,plk9, MessageType.text, {quoted: message.data })
        }
        else if (regex10.test(message.message)) {
  await message.client.sendMessage(message.jid,Jimbrootan.OA_REPLY, MessageType.text, {quoted: message.data })
        }
       else if (regex11.test(message.message)) {
           await message.client.sendMessage(message.jid,plk10, MessageType.text, {quoted: message.data })
        }
       else if (regex12.test(message.message)) {
           await message.client.sendMessage(message.jid,plk11, MessageType.text, {quoted: message.data })
        }
       else if (regex13.test(message.message)) {
           await message.client.sendMessage(message.jid,plk12, MessageType.text, {quoted: message.data })
        }
       else if (regex14.test(message.message)) {
           await message.client.sendMessage(message.jid,plk13, MessageType.text, {quoted: message.data })
        }
       else if (regex15.test(message.message)) {
           await message.client.sendMessage(message.jid,plk14, MessageType.text, {quoted: message.data })
        }
       else if (regex16.test(message.message)) {
           await message.client.sendMessage(message.jid,plk15, MessageType.text, {quoted: message.data })
        }
       else if (regex17.test(message.message)) {
           await message.client.sendMessage(message.jid,plk16, MessageType.text, {quoted: message.data })
        }
       else if (regex18.test(message.message)) {
           await message.client.sendMessage(message.jid,plk17, MessageType.text, {quoted: message.data })
        }
   }
}));
