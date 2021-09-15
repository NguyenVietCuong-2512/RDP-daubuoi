const fs = require("fs");
module.exports.config = {
    name: "hoc",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DuongMinhHoang", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
    console.log("tét");
    switch(event.body){
        case "1":
            api.sendMessage({
                body: "▰▰ Hệ thống viễn thông ▰▰\n\nMã môn học: ELC102\nPhòng học: R_DON_12\nSố tín chỉ: 3\nGiảng viên: Trần Duy Cường\nLịch: Thứ 2 (tiết 2 - 6)\nThời gian học: 7:30 - 11:20\nLink meet: https://meet.google.com/ikx-uvcp-dvc\n\nTài liệu: http://daotao.hutech.edu.vn/Foxdata/Tailieu/20211/ELC102.pdf", 
                //attachment: fs.createReadStream(__dirname + `/cache/noprefix/ti.gif`)
            }, event.threadID, event.messageID);
            break;
        case "2":
            api.sendMessage({
                body: "▰▰ Thiết kế hệ thống số ▰▰\n\nMã môn học: ELD103\nPhòng học: R_DON_10\nSố tín chỉ: 3\nGiảng viên: Võ Đình Tùng\nLịch: Thứ 2 (tiết 7 - 12)\nThời gian học: 12:30 - 16:20\nLink meet: https://meet.google.com/wpk-tfaj-ezv\n\nTài liệu: http://daotao.hutech.edu.vn/Foxdata/Tailieu/20211/ELD103.pdf", 
                //attachment: fs.createReadStream(__dirname + `/cache/noprefix/suu.gif`)
            }, event.threadID, event.messageID);
            break;
        case "3":
            api.sendMessage({
                body: "▰▰ Tiếng anh 5 ▰▰\n\nMã môn học: ENC105\nPhòng học: R_DON_10\nSố tín chỉ: 3\nGiảng viên: Nguyễn Hoàng Tuấn\nLịch: Thứ 3 (tiết 7 - 12)\nThời gian học: 12:30 - 16:20\nLink meet: https://meet.google.com/cgw-uubj-jtk\n\nTài liệu: https://www.eflbooks.co.uk/samples/9781108560290.pdf\n\nGiải tài liệu: https://drive.google.com/file/d/1hRsSDrV2xVM-h4Ss2aOmzvwA4TOfoCvH/view?fbclid=IwAR2AQeWThDZrrGW355LQANL1eDLOtFpbq5aZueYmIh0wo7ntwOjeRSAkIEU", 
                //attachment: fs.createReadStream(__dirname + `/cache/noprefix/dan.gif`)
            }, event.threadID, event.messageID); 
            break;
        default:
    }
}

module.exports.handleEvent = function({ api, event}) {
    if (event.body.indexOf("19DDTA1")==0 || (event.body.indexOf("19ddta1")==0)) {
        api.sendMessage({
            body: "▰▰ Danh sách môn học ▰▰\n\n 1. Hệ thống viễn thông\n\n 2. Thiết kế hệ thống số\n\n 3. Tiếng anh 5\n\nReply tin nhắn theo số để xem chi tiết về từng môn học ! ",
           // attachment: fs.createReadStream(__dirname + `/cache/noprefix/12congiap2.gif`)
        }, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
    }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
