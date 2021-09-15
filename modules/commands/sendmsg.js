 module.exports.config = {
	name: "sendmsg",
	version: "0.0.2",
	hasPermssion: 2,
	credits: "Dũng UwU",
	description: "sendmsg",
	commandCategory: "general",
	usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    var msg = args.splice(2).join(" ");
    if (args[0]=='user') {
        return api.sendMessage('「 THÔNG BÁO CỦA ADMIN 」\n ♥ »𝗗𝘂̛𝗼̛𝗻𝗴 𝗠𝗶𝗻𝗵 𝗛𝗼𝗮̀𝗻𝗴« ♥\n≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋\n\n' + msg, args[1]).then(
            api.sendMessage('Đã gửi tin nhắn đến thành viên ' + args[1] + ' thành công', event.threadID, event.messageID));
    } else {
            if (args[0]=='thread') { return api.sendMessage('»TIN NHẮN CỦA ADMIN«\n ♥ »𝗗𝘂̛𝗼̛𝗻𝗴 𝗠𝗶𝗻𝗵 𝗛𝗼𝗮̀𝗻𝗴« ♥\n≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋\n\n' + msg, args[1]).then(
            api.sendMessage('Đã gửi tin nhắn đến nhóm ' + args[1] + ' thành công', event.threadID, event.messageID))
            }
                else return utils.throwError("sendmsg", event.threadID, event.messageID);
        }
    }