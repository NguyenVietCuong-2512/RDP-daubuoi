module.exports.config = {
  name: "đùi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dương Minh Hoàng",
  description: "Random Ảnh đùi Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Phương tiện",
  usages: "đùi",
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
 "https://i.imgur.com/EqwZQxh.jpg",
 "https://i.imgur.com/rdhEYa3.jpg",
  ];
  var callback = () => api.sendMessage({body:`Đùi ngon 🤤\nSố đùi hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
;