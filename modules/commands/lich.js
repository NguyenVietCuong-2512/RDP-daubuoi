module.exports.config = {
	name: "lich",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Lịch",
	commandCategory: "News",
	usages: "lich",
	cooldowns: 5
};

module.exports.handleReaction = async function({ api, event, handleReaction }) {
	if (event.userID != handleReaction.author) return;
	api.sendMessage(`hôm nay là: ` + handleReaction.weekday + `\nngày` + handleReaction.day + `\nTháng` + handleReaction.month + `\nNăm` + handleReaction.year, event.threadID, event.messageID);
}
module.exports.run = async ({ api, event, client }) => {
	const axios = require('axios');
	const res = await axios.get(`https://api.berver.tech/calendar`);
	const data = res.data.data.solar;

	let weekday = null;
	if (data.weekday == 1){
		weekday = `thứ 2`
	};

	if (data.weekday == 2){
		weekday = `thứ 3`
	};

	if (data.weekday == 3){
		weekday = `thứ 4`
	};

	if (data.weekday == 4){
		weekday = `thứ 5`
	};

	if (data.weekday == 5){
		weekday = `thứ 6`
	};

	if (data.weekday == 6){
		weekday = `thứ 7`
	};

	if (data.weekday == 7){
		weekday = "chủ nhật"
	};
	let day = data.day;
	let month = data.month;
	let year = data.year;
	api.sendMessage(`Có phải bạn đang muốn xem lịch của ngày hôm nay ko ? (hãy reactions tin nhắn bên dưới)`, event.threadID, (error, info) => {
		client.handleReaction.push({
			name: this.config.name,
			messageID: info.messageID,
			author: event.senderID
		})
}, event.messageID);
}