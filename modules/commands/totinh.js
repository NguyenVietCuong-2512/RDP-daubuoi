 module.exports.config = {
    name: "totinh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MewMew mod by VanHung, DinhPhuc, Vietdz, VĐT&NTH, Thỏadz",
    description: "",
    commandCategory: "general",
    usages: "totinh [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "totinh.png")) request("https://i.imgur.com/P7sBv2p.png").pipe(fs.createWriteStream(dirMaterial + "totinh.png"));
}

async function makeImage({ one, two }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");
    let totinh_img = await jimp.read(__root + "/totinh.png");
    let pathImg = __root + `/totinh_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://le31.glitch.me/avt?q=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://le31.glitch.me/avt?q=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
   totinh_img.resize(500, 500).composite(circleOne.resize(50, 50), 150, 110).composite(circleTwo.resize(46, 46), 300, 150);
    
    let raw = await totinh_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return awae.exportsgetBufferAsync("image/png");
}

    module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Tớ thích cậu❤ \n"    [{
   
    , () => fs.unlinkSync(path), messageID));
    }
    }
© 2021 GitHub, Inc.ath), messageID));
    }
    }
© 2021 GitHub, Inc.ath), messageID));
    }
    }
© 2021 GitHub, Inc.ath), messageID));
    }
    }
© 2021 GitHub, Inc.