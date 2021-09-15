const fs = require("fs");
module.exports.config = {
	name: "bot đâu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "botdau",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot đâu")==0 || (event.body.indexOf("bot đâu")==0) || (event.body.indexOf("bot dau")==0) || (event.body.indexOf("Bot dau")==0)) {
		var msg = {
				body: "Em đây nè💜",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}