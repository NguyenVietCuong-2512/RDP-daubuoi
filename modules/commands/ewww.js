const fs = require("fs");
module.exports.config = {
name: "ewww",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "nice",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ewww")==0 || (event.body.indexOf("ewww")==0)) {
		var msg = {
				body: "ewwwwwwww kinh",
				attachment: fs.createReadStream(__dirname + `/cache/ewww.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}