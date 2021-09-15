const fs = require("fs");
module.exports.config = {
	name: "Cua gai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "cua gai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cua gái")==0 || (event.body.indexOf("Cua gai")==0) || (event.body.indexOf("cua gái")==0) || (event.body.indexOf("cua gai")==0)) {
		var msg = {
				body: "Gái cái đb, bố mẹ thì còng lưng nuôi ăn học. Mày lại ở đây yêu với chả đương, gái với chả gú. T mách mẹ m nè con..",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}