module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DMH",
  description: "Thông tin Admin DMH",
  commandCategory: "Phương tiện",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/pxr7BTW.jpg",
 "https://i.imgur.com/3i683op.jpg",
  ];
  var callback = () => api.sendMessage({body:`\n★Thông Tin Admin Bot★\nAdmin name : NHÂN THIỆN NGUYỄN\nBiệt Danh: NHÂNDZ\nGiới Thiệu: không thích màu hồng.\nTính Cách : Hiền lành\nChiều cao : 1m80\nSinh ngày : null\nLiên hệ: null\nInstagram: ngthien.nhan\nTikTok: null\nSở Thích: Nhắn tin với người thân :3\nCân nặng: 65kg\nID FACEBOOK : null\nName ID : Dương Minh Hoàng \nLink Facebook : https://www.facebook.com/nhandz21\nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu\nChúc bạn sử dụng vui vẻ <3\n=== Dương Minh Hoàng ===\nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
;