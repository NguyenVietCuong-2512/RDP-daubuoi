const fs = require("fs");
module.exports.config = {
	name: "Bot ngu ngon",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "botngungon",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot ngủ ngon")==0 || (event.body.indexOf("bot ngủ ngon")==0) || (event.body.indexOf("Bot ngu ngon")==0) || (event.body.indexOf("bot ngu ngon")==0)) {
		var msg = {
				body: "Bot cảm ơn bạn nè.\nBạn cũng ngủ ngon nữa nha, yêu bạn lắmmm <3",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}