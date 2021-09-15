const fs = require("fs");
module.exports.config = {
	name: "Vỗ tay",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DMHoang", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "Vo tay",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vỗ tay")==0 || (event.body.indexOf("Vỗ tay")==0) || (event.body.indexOf("vỗ tay")==0) || (event.body.indexOf("vo tay")==0)) {
		var msg = {
				body: "*bốp* *bốp* *bốp* *bốp* *bốp* vui thấy ghê =)))))",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}