module.exports.config = {
  name: "imgur",
  version: "1.0.0", 
  permssion: 0,
  prefix: true,
  credits: "farhan",
  description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag",
  category: "other", 
  usages: "[tag]", 
  cooldowns: 0,
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
  const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
  const n = apis.data.api
    const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh)
        return api.sendMessage('[âšœï¸]âžœ Please give feedback or enter the image or vide link', event.threadID, event.messageID);
    try {
      var tpk = `",`;
        const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`${n}/imgurv2?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);
        return api.sendMessage(`"` + allPromise.join('"\n"') + tpk, event.threadID, event.messageID);
    }
    catch (e) {
        return api.sendMessage('[âšœï¸]âžœ An error occurred while executing the command', event.threadID, event.messageID);
    }
}; 