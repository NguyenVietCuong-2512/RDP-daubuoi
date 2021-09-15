const fs = require("fs");
module.exports.config = {
	name: "anhan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗",
	usages: "anh nhan oi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nhân")==0 || (event.body.indexOf("Nhân")==0) || (event.body.indexOf("anh Nhân")==0) || 
  (event.body.indexOf("Nhânn")==0) || 
  (event.body.indexOf("Nhân")==0) || 
  (event.body.indexOf("nhânn")==0) || 
  (event.body.indexOf("nhân")==0) || 
  (event.body.indexOf("A nhân")==0) || 
  (event.body.indexOf("a nhân")==0) || 
  (event.body.indexOf("anh nhân")==0) || 
  (event.body.indexOf("anh Nhân")==0) || 
  (event.body.indexOf("Anh Nhân")==0) || 
  (event.body.indexOf("NHÂN")==0) || 
  (event.body.indexOf("chồng")==0) || 
  (event.body.indexOf("Chồng")==0) || 
  (event.body.indexOf("chồng ơi")==0) || 
  (event.body.indexOf("nhân ơi")==0) || 
  (event.body.indexOf("Anh Nhân ơi")==0) ||
  (event.body.indexOf("Nhân ơi")==0)) {
		var msg = {
				body: "Admin Nhân Thiện Nguyễn hum có ở đây đâu!",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}