const fs = require("fs");
module.exports.config = {
	name: "boxidgame",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "botdau",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("idbox")==0 || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Boxid")==0) || (event.body.indexOf("boxid")==0) || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Idbox")==0)
  || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Idbox")==0) || (event.body.indexOf("Idbox")==0)) {
		var msg = {
				body: "▰▰ 5 id quan trọng cần add ▰▰\n\nㅤ ㅤChồngㅤ ㅤ\nPbee03\ngogori\nBG 丶 VũVuiVẻ\nGTS丶SuYanggHồ",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}