const fs = require("fs");
module.exports.config = {
	name: "bot Ζ‘i",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "ππππππππ",
	usages: "botoi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot Ζ‘i")==0 || (event.body.indexOf("bot Ζ‘i")==0) || (event.body.indexOf("bot oi")==0) || (event.body.indexOf("Bot oi")==0)) {
		var msg = {
				body: "DαΊ‘ Ζ‘i , em ΔΓ’y αΊ‘!π",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}