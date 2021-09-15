const fs = require("fs");
module.exports.config = {
	name: "pai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "pai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pai")==0 || (event.body.indexOf("Pai")==0) || (event.body.indexOf("Pái pai")==0) || (event.body.indexOf("pái pai")==0)) {
		var msg = {
				body: "Đi ngủ đi, không ngủ ĩa chải nha chưa!\nĐùa thôi chứ đi ngủ sớm đi.\nBot sẽ nhớ lắm á. I miss you so much 🦄💜",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}