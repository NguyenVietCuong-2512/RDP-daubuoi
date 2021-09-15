module.exports.config = {
  name: "goibot2",
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
    var aid = ["100063657437409","100063657437409"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag tui chi, tui có làm gì đâu ?","Sao ?? Làm ơn cho Bot phút giây nghỉ ngơi đi !!","Sao, gọi tôi có việc gì?","Hiện bot đang bận đấm thằng kia, tí mình liên hệ lại nha","Hãy dùng lệnh /help để xem toàn bộ lệnh","Tag nữa ăn đấm ngay","Hãy dùng lệnh /ad để biết thêm về Admin của bot <3","Tag có việc gì? Gấp thì ib riêng ngay! À quên bot éo nhận tin nhắn riêng :pp","Đúng rồi, anh Hoàng đẹp trai lắm","Thích tag ko :)","Có thể bạn chưa biết, Bot k nhận tin nhắn riêng","Bot dc chăm sóc bởi anh Hoàng dz :3","Cần cái giề, thích bot lắm hả :>","Tag làm giề, có show ảnh cho xem không?","Bot hoạt động 24/24","Anh Hoàng là Admin của bot","Tag nữa t dỗi cho","Má đang ngủ luôn á!","Bot ngủ rồi đừng tag nữa!","Hú kêu tui chi dạ :>","U là tr đang ngủ ngon"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }