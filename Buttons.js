//Coded by Tharindu Liyanage
// Edit This File
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('قائمة الاوامر 🧬')
global.allmenu = ('الاوامر كاملة🎉')
global.script = ('Script 🌈')
global.owner = ('المالك 🦋')
global.deploy = ('Deploy 🐥')
global.project = ('Project 🦋')
global.donate = ('Donate 🚀')
global.stop = ('توقف 🛑')
global.skip = ('التالي ⏩')
global.thanks = ('*You are welcome 💙*')
// 👈 You Can change this your choice
global.nextimg = ('التالي صور ➡️')
global.audio = ('🎶 صوت')
global.video = ('فيديو 📽')
global.yts = ('YTSEARCH 🌐')
global.play = ('تشغيل 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
