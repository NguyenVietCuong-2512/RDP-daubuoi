module.exports.config = {
	name:"upt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh theo api - uptime",
	commandCategory: "system",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	axios.get('https://img-hololive-api.up.railway.app/rushia/').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Cục cưng của Dương Minh Hoàng đã hoạt động được:\n❄️  ${hours} giờ ${minutes} phút ${seconds} giây  ❄️\n\n❄️ Tổng người dùng: ${global.data.allUserID.length}\n❄️ Tổng nhóm: ${global.data.allThreadID.length}\n❄️ Prefix: ${global.config.PREFIX}\n❄️ Version: 1.2.14\n❄️ Cpu used: ${pidusage.cpu.toFixed(1)}\n❄️ Ram used: ${byte2mb(pidusage.memory)}\n❄️ Ping: ${Date.now() - timeStart}ms\n❄️ Giờ hiện tại: ${gio}`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}