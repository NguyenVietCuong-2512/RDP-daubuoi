const fs = require("fs");
module.exports.config = {
	name: "yΓͺu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ΔΔng", 
	description: "no prefix",
	commandCategory: "ππππππππ",
	usages: "Bot lα»n",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot lon")==0 || (event.body.indexOf("Bot lon")==0) || (event.body.indexOf("Bot lα»n")==0) || (event.body.indexOf("bot lα»n")==0) || (event.body.indexOf("Bot loz")==0) || (event.body.indexOf("bot loz")==0)) {
		var msg = {
				body: "WARNING: Chα»­i bot!",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}