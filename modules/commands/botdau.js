const fs = require("fs");
module.exports.config = {
	name: "bot ฤรขu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "๐๐๐๐๐๐๐๐",
	usages: "botdau",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot ฤรขu")==0 || (event.body.indexOf("bot ฤรขu")==0) || (event.body.indexOf("bot dau")==0) || (event.body.indexOf("Bot dau")==0)) {
		var msg = {
				body: "Em ฤรขy nรจ๐",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}