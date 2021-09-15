const fs = require("fs");
module.exports.config = {
	name: "iu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "iu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("iu bot")==0 || (event.body.indexOf("Iu bot")==0) || (event.body.indexOf("Love bot")==0) || (event.body.indexOf("love bot")==0)) {
		var msg = {
				body: "Thật là hạnh phúc khi được nghe nói lời yêu.\nBot cũng yêu bạn nữa <3",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}