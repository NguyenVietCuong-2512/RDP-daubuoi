const fs = require("fs");
module.exports.config = {
name: "que",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng mod by DMH",
	description: "Chửi đi em",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "ko cần prefix chỉ cần chat",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("quê")==0 || (event.body.indexOf("Quê")==0) || (event.body.indexOf("QUÊ")==0) || (event.body.indexOf("que")==0) || (event.body.indexOf("Que")==0) || (event.body.indexOf("QUE")==0)) {
		var msg = {
				body: "Ôi con sông quê !",
				attachment: fs.createReadStream(__dirname + `/cache/que.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}