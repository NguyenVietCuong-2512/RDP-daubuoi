module.exports.config = {
    name: "kbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra //mod by Jukie
    description: "kéo búa bao",
    commandCategory: "rps",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args, Currencies,Users,Threads }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          var data = await Currencies.getData(event.senderID);
          var money = data.money
          if(money < 100) api.sendMessage("Bạn thiếu 100$ để có thể chơi",event.threadID,event.messageID)
          else {              
    if(!args[0]) {
        outMsg("Vui lòng nhập ✌️ hoặc 👊 hoặc ✋")
    }
    var turnbot = ["✌️","👊","✋"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          var userturn = args.join( " ")
          if (userturn == "✌️"||userturn == "👊"||userturn == "✋") {
            if (userturn == turnbot) {
              return outMsg(`Hòa\nUser : ${userturn}\nBot : ${botturn}\nHòa, số dư không thay đổi`)
            } else if (userturn == "✌️") {
              if (botturn == "👊") {
                Currencies.setData(event.senderID, options = {money: money -100})
                return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất 100$`)
                
              } else if (botturn == "✋") {
                Currencies.setData(event.senderID, options = {money: money +100})
                return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng 100$`)
                
            }
          } else if (userturn == "👊") {
            if (botturn == "✋") {
              Currencies.setData(event.senderID, options = {money: money -100})
              return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất 100$ `)
              
            } else if (botturn == "✌️") {
              Currencies.setData(event.senderID, options = {money: money +100})
              return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng 100$`)
              
          }
        } else if (userturn == "✋") {
          if (botturn == "✌️") {
            Currencies.setData(event.senderID, options = {money: money -100})
            return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất 100$ `)
            
          } else if (botturn == "👊") {
            Currencies.setData(event.senderID, options = {money: money +100})
            return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng 100$ `)
            
        }
      }
        } else {
          return outMsg("Sai Format")
        }
      }
}