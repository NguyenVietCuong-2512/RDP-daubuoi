const fs = require("fs");
module.exports.config = {
	name: "Bot điên",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "botdien",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot điên")==0 || (event.body.indexOf("bot dien")==0) || (event.body.indexOf("bot dien")==0) || (event.body.indexOf("bot điên")==0)) {
		var msg = {
				body: "Trên đời, ai mà chẳng có lúc điên lúc tâm thần đúng không?\nCông nhận nha, bạn giống mình thật ☺️",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}