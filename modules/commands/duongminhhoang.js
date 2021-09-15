module.exports.config = {
  name: "duongminhhoang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Random Ảnh của Admin DMH",
  commandCategory: "Phương tiện",
  usages: "duongminhhoang",
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
 "https://i.imgur.com/9Prfu61.jpeg",
  ];
  var callback = () => api.sendMessage({body:`Admin -Dương Minh Hoàng- \nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   }
;