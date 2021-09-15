const fs = require("fs");
module.exports.config = {
	name: "Ngủ ngon",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "ngu ngon",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ngủ ngon")==0 || (event.body.indexOf("Ngu ngon")==0) || (event.body.indexOf("ngủ ngon")==0) || (event.body.indexOf("ngu ngon")==0)) {
		var msg = {
				body: "Cho ngủ dới, ngủ chung mới biết ngon hay hong chứ :'>",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}