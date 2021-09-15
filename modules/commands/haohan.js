const fs = require("fs");
module.exports.config = {
name: "haohan",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng mod by DMH",
	description: "hãy hảo hán",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "ko cần prefix chỉ cần chat",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hảo hán")==0 || (event.body.indexOf("hảo hán")==0) || (event.body.indexOf("HẢO HÁN")==0) || (event.body.indexOf("Hao han")==0) || (event.body.indexOf("hao han")==0) || (event.body.indexOf("Hao Han")==0)) {
		var msg = {
				body: "Ôi hảo hán",
				attachment: fs.createReadStream(__dirname + `/cache/haohan.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}