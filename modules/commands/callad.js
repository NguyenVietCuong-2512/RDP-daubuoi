module.exports.config = {
 name: "callad",
 version: "0.0.2",
 hasPermssion: 0,
 credits: "Decode đi con trai",
 description: "Gửi tin nhắn đến người điều hành bot",
 commandCategory: "general",
 usages: "+ lỗi hoặc góp ý",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils, Currencies, Thread, Users}) {
var id = event.threadID;
var b = event.senderID;
var a = "100009808517560";
 var threadInfo = await 
api.getThreadInfo(event.threadID);
    var msg = args.splice(0).join(" ");
    
        return api.sendMessage('⚠BÁO CÁO⚠\nID Box: ' + id + '\nName Box: ' + threadInfo.threadName + '\nID người báo cáo: ' + b + '\nNội dung: '+ msg, a).then(
            api.sendMessage('Đã gửi tin nhắn đến Admin thành công!' , event.threadID, event.messageID));
        }
