const fs = require("fs");
module.exports.config = {
	name: "sinhnhat2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sinh nhật")==0 || (event.body.indexOf("sinh nhật")==0) || (event.body.indexOf("Hpbd")==0) || (event.body.indexOf("hpbd")==0)) {
		var msg = {
				body: "🌟。❤。😉。🍀。 🍸。🎉\n。 🍸。🎉。✨ 。🎉。🌟\n💫。✨。＼ ｜ ／。 🍸。🎉\n𝓗𝓪𝓹𝓹𝔂        𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂\n🌟。／ ｜ ＼。🍻\n。🍀。 🍸。🎉。\n 🌟。 💫。 🎶 💥",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}