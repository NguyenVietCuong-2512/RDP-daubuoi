const fs = require("fs");
module.exports.config = {
	name: "Lồn Bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Hoàng 2k14", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "Lồn bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lon bot")==0 || (event.body.indexOf("Lon bot")==0) || (event.body.indexOf("Lồn bot")==0) || (event.body.indexOf("lồn bot")==0) || (event.body.indexOf("Loz bot")==0) || (event.body.indexOf("loz bot")==0)) {
		var msg = {
				body: "M dám chửi kao à? \nChửi lần nữa tao out ráng chịu :pp",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}