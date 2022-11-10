// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*ＮＯＩＺ Ξ*
*I am 18 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://n9.cl/13tj4*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+966530415683'] //👈  Enter Your number
global.premium =  ['+966530415683'] //👈  Enter Your number
global.ownernomer = '+9665304156383' //👈  Enter Your number
global.ownername = '𝓡𝓪𝓶𝓲 𝓐𝓵-𝓡𝓲𝓯𝓪𝓲' //👈 Enter Your name
global.botname = '𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://n9.cl/13tj4' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://n9.cl/13tj4'
global.fbt = 'نرجوا منكم زيارة موقعي ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/garfieldbots/'// 👈 Enter your Social media link to follow now button
global.welcome = '*اهلا وسهلا بك في المجموعة نتمني منكم الاستمتاع معنا 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye Mother fucker 🐼*' // 👈 You Can change this your choice
global.packname = '𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘'  // 👈 You Can change this your choice 
global.author = 'MŒÑĶÝ Ď ŁÜFFÝ🌕⛓️' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'تم طلبك 🦋', // 👈 You Can change this your choice
    admin: 'يجب أن يكون بوت المشرف أولا!', // 👈 You Can change this your choice
    botAdmin: 'يجب أن يكون بوت المشرف أولا!', // 👈 You Can change this your choice
    owner: 'هذه الميزة هي فقط للمالك!', // 👈 You Can change this your choice
    group: 'ميزة تستخدم فقط للمجموعات!', // 👈 You Can change this your choice
    private: 'الميزات المستخدمة فقط للدردشة الخاصة!', // 👈 You Can change this your choice
    bot: 'هذه الميزة هي فقط للبوت', // 👈 You Can change this your choice
    wait: '```انتظر من فضلك...```', // 👈 You Can change this your choice
    error: 'حدث خطاء اثناء البحث! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
