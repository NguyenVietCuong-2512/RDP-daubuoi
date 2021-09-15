module.exports.config = {

	name: "huongdan",

	version: "1.0.0",

	hasPermssion: 0,

	credits: "DMH",

	description: "Hướng dẫn người dùng",

	commandCategory: "Admin",

	cooldowns: 1
};


module.exports.run = ({ event, api }) => api.sendMessage(`「 Hướng Dẫn 」\n\nNhập /help để xem tất cả lệnh trên Bot\nNhập /rule để xem luật nhóm, nếu chưa có hãy thêm bằng cách /rule add + [Luật nhóm] để thêm luật!\nDùng lệnh /callad + [lời nhắn] để chuyển lời đến Admin\nAdmin DƯƠNG MINH HOÀNG - info: www.facebook.com/nghhth`, event.threadID, event.messageID);
