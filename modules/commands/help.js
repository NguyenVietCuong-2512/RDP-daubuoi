module.exports.config = {
	name: "help",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Đào",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5
};

module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("help") != 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`❄️🦋»${command.config.name}«🦋❄️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	
	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
        group.forEach(commandGroup => msg += `❄️🦋»${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}«🦋❄️\n${commandGroup.cmds.join(' ◆━◆ ')}\n\n`);
		return api.sendMessage(msg + `🌵Cách sử dụng: "${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}help từng lệnh ở trên" để xem chi tiết cách sử dụng!\n🌵Hiện tại đang có ${commands.size} lệnh !\n🌵Bot được điều hành bởi \n    ♥ »ℕ𝕙â𝕟 𝕋𝕙𝕚ệ𝕟 ℕ𝕘𝕦𝕪ễ𝕟« ♥\nCó vấn đề & thắc mắc liên hệ: https://www.facebook.com/nhandz21\n🌀Sau 99 giây 𝒉𝒆𝒍𝒑 tự động gỡ!`, threadID, (err, info) => setTimeout(() => api.unsendMessage(info.messageID), 99000),messageID);

	}

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`❄️Tên lệnh: ❝${command.config.name}❞\n\n❄️ Chức năng: ${command.config.description}\n❄️ Cách sử dụng:\n    ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❄️ Thuộc nhóm: ${command.config.commandCategory}\n❄️ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❄️ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❄️ Prefix: ${prefix}\n❄️ Module code by:\n ${command.config.credits} `, threadID, messageID);
}
