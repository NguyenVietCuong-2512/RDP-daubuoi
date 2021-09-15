const fs = require("fs");
module.exports.config = {
	name: "bai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "bai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bai")==0 || (event.body.indexOf("bai")==0) || (event.body.indexOf("Bái bai")==0) || (event.body.indexOf("bái bai")==0)) {
		var msg = {
				body: "Cậu đi đâu đấy, bỏ Bot ở lại đây à :( ",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}