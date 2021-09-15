module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100010724083791","100010724083791"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì hong ?","Sao ?? Làm ơn nhắn qua mess hoặc zalo để liên hệ ông chủ!!","Sao gọi chủ tôi có việc gì?","Hiện anh Nhân đang bận hãy sử dụng callad để liên hệ","Hãy dùng lệnh /ad để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm ngay","Tag làm gì ? Anh Hoàng khum có đây đâu :p","Sao? Tag có việc gì? Gấp thì ib riêng ngay!","Đúng rồi, anh Nhân đẹp trai lắm","Thích tag ko :)","Tag anh Nhân làm chi dậy?","Dạo này anh Nhân hơi bận, thông cảm ~!","Cần cái giề, có Bot đây được hong :>","Hiện tại ông chủ của tôi đang bận, có gì hot ?","Tag cái gì Admin bận rồi","Tag admin làm gì, nó không có đây đâu!","Tag nữa t dỗi cho","Có db thằng Admin rep","Nó ngủ rồi đừng tag nữa!","Hãy dùng callad để liên hệ với admin >,<"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }