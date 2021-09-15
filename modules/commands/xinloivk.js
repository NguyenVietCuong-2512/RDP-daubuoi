module.exports.config = {
    name: "xinloivk",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "JRT mod by DMH Gudboy",
    description: "xin lỗi con vk cho nó sợ thì thôi",
    commandCategory: "general",
    usages: "tag",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"Vợ ơi em đâu rồi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("Cho anh nói vài lời nha vk", threadID), 2300)
 
setTimeout(() =>
api.sendMessage("Anh hứa đây là lần cuối !", threadID), 3600)

var a = Math.floor(Math.random() * 5);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:"Anh Xin Lỗi Vợ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 6000)
setTimeout(() =>
api.sendMessage({
   body:"Vợ Đừng Giận Anh Nữa Mà 🥺🥺 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Anh xin lỗi vợ lần sau anh không như thế nữa " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Tha Lỗi Cho Anh Nha Vợ Ơi 🥺😭 "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ đừng bỏ anh nha "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Anh ở đây 1 mình chắc anh chết mất đó "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Vợ ơi anh đây nè " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Yamete vợ"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Đụ vợ lần cuối nha "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Vợ ơi anh hứa hông chơi đĩ nữa " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==1) {
setTimeout(() =>
api.sendMessage({
   body:"Anh không đi bar nữa vợ ơi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 6000)
setTimeout(() =>
api.sendMessage({
   body:"Về đi vợ con đang trông chờ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Về đây với anh đi vợ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Alo con vợ rõ trả lời "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Kimochi anh đi vợ ơi "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Dm về với anh đi con vợ mặt l"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Alo vợ của anh ơi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Đĩ mẹ vợ ơi anh xin lỗi "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Anh thề sẽ không đi karaoke nữa "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Anh hứa là sẽ yêu vk <3 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==2) {
setTimeout(() =>
api.sendMessage({
   body:"Vợ ơi anh sai rồi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 6000)
setTimeout(() =>
api.sendMessage({
   body:"Tha lỗi anh đi vợ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Anh tặng vk viên kim cương 96 tỷ nha " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ ơi anh hứa hông chơi đĩ nữa"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ ơi anh đây nè "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ đừng bỏ anh nha "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Tha Lỗi Cho Anh Nha Vợ Ơi 🥺😭 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Anh xin lỗi vợ lần sau anh không như thế nữa "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ Đừng Giận Anh Nữa Mà 🥺🥺 "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Anh ở đây 1 mình chắc anh chết mất đó " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==3) {
setTimeout(() =>
api.sendMessage({
   body:"Vợ ơi anh xin lỗi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 6000)
setTimeout(() =>
api.sendMessage({
   body:"Anh thề sẽ không đi karaoke nữa " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Anh hứa sẽ ở nhà chăm con " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Em là đại dương, anh là biển cả mà vợ "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Về lại với anh đi  "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Người ta thường nói  "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"1 túp liều tranh 2 quả tim vàng " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Đúng không? "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Em là cục cứt của anh "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Nên cho a đụ em lần cuối " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==4) {
setTimeout(() =>
api.sendMessage({
   body:"Vợ ơi anh xin lỗi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 6000)
setTimeout(() =>
api.sendMessage({
   body:"Hic, anh biết lỗi rùi  :( " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Hôm nay vợ đẹp thế nhỉ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "À không anh đẹp hơn :D "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Rồi rồi vợ đúng anh sai :( "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ là trùm rồi á, anh hong dám cãi nữa.. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Vâng, em là nhất, em là số 1 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Vợ là siu nhân,vợ là 10 điểm "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Em với mẹ anh giống như 2 giọt nước vậy "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Mẹ anh thì là nước tinh khiết " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
setTimeout(() =>
api.sendMessage({
   body:"Còn em như giọt nước mắm vậy " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 44000)
}
if (a==5){
setTimeout(() =>
api.sendMessage({
   body:"Em ơi cho anh xin lỗi " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 6000)
setTimeout(() =>
api.sendMessage({
   body:"Anh hong dám làm vậy nữa đâu >< " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Anh thề anh k ra Trần Duy Hưng nữa " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Anh cũng k ra cầu Thị Nghè nữa "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Anh cũng k chơi bê đê nữa luôn "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Anh sai rồi vợ của anh ơi "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Mình chung sống với nhau bao lâu v mà " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "Anh hứa sẽ không đi bia ôm tay vịn nữa "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "Anh cai chơi đĩ rồi mà em ơi "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"Anh xin đụ em lần cuối nha " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
}
// Text by Dương Minh Hoàng - do not clear this line & forget me !

  ////////   //         /////////       //         ////////   /////////
  //    //   //         //           //    //    //           //
  //   ///   //         //          //      //    ////        //
  ////////   //         /////////   //      //      ///       /////////
  //         //         //          //////////         ///    //
  //         //         //          //      //           //   //
  //         /////////  /////////   //      //   ////////     /////////  