module.exports.config = {
  name: "nhattan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Random Ảnh của Admin DMH",
  commandCategory: "Phương tiện",
  usages: "nhattan",
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
 "https://i.imgur.com/WzCLUXb.jpg",
 "https://i.imgur.com/SE1YbzG.jpg",
 "https://i.imgur.com/t4dH2Qk.jpg",
 "https://i.imgur.com/GpjaUfa.jpg",
 "https://i.imgur.com/dophw2H.jpg",
 "https://i.imgur.com/pvHPEID.jpg",
  ];
  var callback = () => api.sendMessage({body:`𝕿𝖗𝖆̂̀𝖓 𝕹𝖌𝖚𝖞𝖊̂̃𝖓 𝕹𝖍𝖆̣̂𝖙 𝕿𝖆̂𝖓\nIngame: null\nCao: -cm\nCân nặng: null\nSở thích: null\nLink fb: https://www.facebook.com/profile.php?id=100014616218001\nSố ảnh hiện có trên web: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
;