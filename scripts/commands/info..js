module.exports.config = {
  name: "info",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  prefix: true,
  description: "search results on google",
  category: "without prefix",
  usages: "google [text]",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/yd8TtCQx/received-825512762409044.jpg", 

            "https://i.postimg.cc/CMWQBdr4/received-844582530583225.jpg", 

            "https://i.postimg.cc/cJ2Q9tn9/received-943134260313225.jpg",

"https://i.postimg.cc/zXzRkFQD/received-1513370482734848.jpg",

            "https://i.postimg.cc/zB24Pjjm/IMG-8481.jpg"];

var callback = () => api.sendMessage({body:`𝙸𝙽𝙵𝙾 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽
________________________________________

❇️𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${global.config.BOTNAME}

❇️𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 :『 𝙵𝙰𝚁𝙷𝙰𝙽-𝙸𝚂𝙻𝙰𝙼 』

❇️𝙰𝙳𝙳𝚁𝙴𝚂𝚂 : 𝙱𝙰𝚁𝙸𝚂𝙷𝙰𝙻

_____________𝙲𝙾𝙽𝚃𝙰𝙲𝚃_____________

❇️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 : https://www.facebook.com/profile.php?id=100089974857944

❇️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝚔 𝙿𝙰𝙶𝙴: https://www.facebook.com/FarhanIslamImon.official?mibextid=ZbWKwL

❇️𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 : ${global.config.PREFIX}

❇️𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 :  𝙵𝙰𝚁𝙷𝙰𝙽_𝙸𝚂𝙻𝙰𝙼

𝙾𝚃𝙷𝙴𝚁 𝙸𝙽𝙵𝙾𝙼𝙰𝚃𝙸𝙾𝙽____________________

𝚃𝚈𝙿𝙴 /𝚊𝚍𝚖𝚒𝚗

➟ 𝚄𝙿𝚃𝙸𝙼𝙴

𝚃𝙾𝙳𝙰𝚈 𝙸𝚂 𝚃𝙸𝙼𝙴 : ${juswa} 

𝙱𝙾𝚃 𝙸𝚂 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 ${hours}:${minutes}:${seconds}.

𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   }; 
