module.exports.config = {
    name: "uptime",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "Farhan",
    description: "uptime",
    category: "admin",
    usages: "",
    cooldowns: 5,
};

function byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0,
        n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({
    api,
    event,
    args,
    Threads
}) => {
    var username = process.env.REPL_OWNER;
    var urlRepl;
    if (username !== undefined) {
        urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
    }
    var os = require("os");
    var cpus = os.cpus();
    var chips = cpus[0].model;
    var speed = cpus[0].speed;

    var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);

    var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;

    const axios = require('axios');

    try {
        const alime = (await axios.get('https://raw.githubusercontent.com/quyenkaneki/data/main/dataanime.json')).data;
        // Process dataanime.json
        // ...

        const lengthchar = (await axios.get('https://raw.githubusercontent.com/quyenkaneki/data/main/dataimganime.json')).data;
        // Process dataimganime.json
        // ...
    } catch (error) {
        console.error("Error fetching data:", error);
        return;
    }

    // Other functionalities
    // ...

    // Sending the message with server information
    api.sendMessage({
        body: `Server Information\n\nChip: ${chips}.\nProcessing Speed: ${speed}MHz.\n\nTotal Memory: ${byte2mb(os.totalmem())}.\nUsed: ${byte2mb(os.freemem())} (${(os.freemem() * 100 / os.totalmem()).toFixed()}%).\n\nBot is running up ${hours} hours ${minutes} minute ${seconds} seconds.\n\n❯ Total users: ${global.data.allUserID.length}\n❯ Total Group: ${global.data.allThreadID.length}\n❯ CPU in use: ${pidusage.cpu.toFixed(1)}%\n❯ Ram in use: ${byte2mb(pidusage.memory)}\n❯ Ping: ${Date.now() - timeStart}ms\n❯ Character ID: ${id}\n❯ Admin Faceboook:\nhttps://www.facebook.com/LINK.COPY.KORA.NE.KAMLA`,
        attachment: fs.createReadStream(pathImg)
    }, event.threadID, () => {
        fs.unlinkSync(pathImg);
        fs.unlinkSync(pathAva);
    }, event.messageID);
};
