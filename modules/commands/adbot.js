module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "quên - cc",
  description: "Kiểm tra thông tin Admin",
  commandCategory: "info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "request": ""
}
};

module.exports.run = async({ api, event, args, Currencies}) => {
  const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	if (!args[0]) {
	let data = await api.getUserInfo(100009808517560);
    let url = data[100009808517560].profileUrl;
    let k = (await Currencies.getData(100009808517560)).money;
    let name = await data[100009808517560].name;
    var sex = await data[100009808517560].gender;
    var gender = sex == 2 ? "Nam ♂️" : sex == 1 ? "Nữ ♀️" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `🔰 Tên: ${name} ✅\n⚛️ UID: 100009808517560\n🔗 Link FB: ${url}\n🚻 Giới tính: ${gender}\n🥺 Ins: hoang_pcy\n✡️ Sở thích: Nghe nhạc, chơi Piano và đặc biệt quan tâm người khác :3` , attachment: fs.createReadStream(__dirname + "/cache/adbot.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/adbot.png"));
    return request(encodeURI(`https://graph.facebook.com/100009808517560/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
}