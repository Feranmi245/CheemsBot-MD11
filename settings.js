//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: iamevilboy" //ur github or insta name
global.location = "Nigeria, lagos, Abuja" //ur location

//new
global.botname = '𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐌𝐃•💎' //ur bot name
global.ownernumber = '2348022159244' //ur owner number
global.ownername = '𓅓𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲—ε•𓅓' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/CHOR0WkQk8N6ZrhqQwnLqm"
global.themeemoji = '💎'
global.wm = "Antisocial Bot Inc."
global.botscript = 'https://github.com/Olamuyiwa63/CheemsBot-MD11' //script link
global.packname = "𓅓•"
global.author = "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲•𓅓"
global.creator = "2348022159244@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348022159244,2348107582855"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '212' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Generated by 𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐌𝐃💎!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
