const fs = require("fs");
module.exports.config = {
	name: "Botngu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "Bot ngu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot ngu")==0 || (event.body.indexOf("Bot ngu")==0)) {
		var msg = {
				body: "WARNING: Chửi bot!",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}