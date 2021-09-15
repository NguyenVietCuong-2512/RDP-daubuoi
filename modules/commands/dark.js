const fs = require("fs");
module.exports.config = {
	name: "Dark",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "dark",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Dark")==0 || (event.body.indexOf("dark")==0) || (event.body.indexOf("Dảk")==0) || (event.body.indexOf("dảk")==0) || (event.body.indexOf("Đảk")==0)|| (event.body.indexOf("đảk")==0)) {
		var msg = {
				body: "Là cái đb gì, bố mẹ thì còng lưng nuôi ăn học. Mày lại ở đây Dảk với chả Dark",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}