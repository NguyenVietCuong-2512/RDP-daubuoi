module.exports.config = {
	name: "sinhnhat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược ngày Noel",
        commandCategory: "game",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
  //sửa ngày tháng mà nó muốn đếm tính từ hiện tại:
    const t = Date.parse("January 15, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「 Cùng đếm ngược tới ngày mà Admin dz ra đời 」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
    //dòng này muốn sửa gì cũng dc mà nhớ đừng sửa cái này: ${}
    /////////////////////////////////////////////////////////////////////
    //////////////////// Dương Minh Hoàng guide /////////////////////////
}