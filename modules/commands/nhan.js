module.exports.config = {
  name: "nguyenthiennhan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Random Ảnh của Admin DMH",
  commandCategory: "Phương tiện",
  usages: "nhanthiennguyen",
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
 "https://i.imgur.com/r1V7apc.jpg",
 "https://i.imgur.com/PdAQJEo.jpg",
  ];
  var callback = () => api.sendMessage({body:`𝕹𝖌𝖚𝖞𝖊̂̃𝖓 𝕿𝖍𝖎𝖊̣̂𝖓 𝕹𝖍𝖆̂𝖓\nIngame: NhânThiệnNguỹn\nCao: 180cm\nCân nặng: 65kg\nSở thích: Ăn uống, nghe nhạc Lofi.\nLink fb: https://www.facebook.com/nhandz21\nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
;