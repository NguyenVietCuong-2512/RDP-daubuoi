module.exports.config = {
 name: "stopbot",
 version: "1.0.2",
 hasPermssion: 1,
 credits: "Khánh Milo",
 description: "Tắt bot",
 commandCategory: "admin",
 cooldowns: 2,
 dependencies: {
  "eval": ""
 }
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    return api.sendMessage("Nhận lệnh, Bot đã tắt sau thông báo này!", event.threadID, () => eval&#40;"module.exports = process.exit(0&#41;", true), event.messageID);

   }