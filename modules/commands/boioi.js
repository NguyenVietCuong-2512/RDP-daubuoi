const fs = require("fs");
module.exports.config = {
	name: "bot ơi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "botoi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot ơi")==0 || (event.body.indexOf("bot ơi")==0) || (event.body.indexOf("bot oi")==0) || (event.body.indexOf("Bot oi")==0)) {
		var msg = {
				body: "Dạ ơi , em đây ạ!💜",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}