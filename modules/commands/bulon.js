const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bulon",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ko nhớ :3 - moy by DMH cute hộ me siu đáng iu đẹp trai ơi là đẹp trai nhất quả đất nước cất này luôn :3",
  description: "Bú Loz Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "bucu",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
		"request": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://i.imgur.com/Q8XO4eT.gif",
             ];
   var callback = () => api.sendMessage({body:`Bú Lòn Đã Không Cưng 🤭`
  ,attachment: fs.createReadStream(__dirname + "/cache/bulon3.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bulon3.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bulon3.gif")).on("close",() => callback());
   };