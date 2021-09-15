const fs = require("fs");
module.exports.config = {
	name: "Chào bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "Chao bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chào bot")==0 || (event.body.indexOf("chào bot")==0) || (event.body.indexOf("chao bot")==0) || (event.body.indexOf("Chao bot")==0)) {
		var msg = {
				body: "Chào bạn nhá!\np/s: Nếu một ngày nào đó bạn chào Bot mà Bot không chào lại thì nghĩa là ...\nBot bị bay acc =.=",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}