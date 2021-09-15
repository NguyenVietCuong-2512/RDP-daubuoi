const fs = require("fs");
module.exports.config = {
name: "hát",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng",
	description: "Hát đi em",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "ko cần prefix chỉ cần chat",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hát")==0 || (event.body.indexOf("Hát")==0)) {
		var msg = {
				body: "Lệnh hát đang sửa, vui lòng không dùng đến!",
				attachment: fs.createReadStream(__dirname + `/cache/hat.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}