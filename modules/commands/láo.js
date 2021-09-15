const fs = require("fs");
module.exports.config = {
name: "láo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng mod by DMH",
	description: "Chửi đi em",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Láo")==0 || (event.body.indexOf("láo")==0) || (event.body.indexOf("Láoo")==0) || (event.body.indexOf("láoo")==0)) {
		var msg = {
				body: "Cho chừa cái tật nhe !",
				attachment: fs.createReadStream(__dirname + `/cache/lao.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}