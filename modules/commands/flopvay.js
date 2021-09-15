const fs = require("fs");
module.exports.config = {
name: "flopvay",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng mod by DMH",
	description: "Say flop đi em",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "ko cần prefix chỉ cần chat",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Flop")==0 || (event.body.indexOf("flop")==0) || (event.body.indexOf("Box flop")==0) || (event.body.indexOf("box flop")==0)) {
		var msg = {
				body: "Vậy à =)) Flop thì để Bot cầm quyền :'>",
				attachment: fs.createReadStream(__dirname + `/cache/flop.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}