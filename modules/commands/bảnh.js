const fs = require("fs");
module.exports.config = {
name: "bảnh",
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
	if (event.body.indexOf("ĐCM")==0 || (event.body.indexOf("DCM")==0) || (event.body.indexOf("Đcm")==0) || (event.body.indexOf("Dcm")==0) || (event.body.indexOf("đcm")==0) || (event.body.indexOf("dcm")==0)) {
		var msg = {
				body: "DCM mày thích láo không!",
				attachment: fs.createReadStream(__dirname + `/cache/banh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}