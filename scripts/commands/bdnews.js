// dont change credit 
// enjoy bdnews file

module.exports = {
  config: {
    name: "bdnews",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "...",
    prefix: true,
    category: "user",
    usages: "",
    cooldowns: 5,
  },


  handleReply: async function ({ api, event, handleReply }) {
      const axios = require('axios');
      const { createReadStream, unlinkSync, statSync } = require("fs-extra");

      try {
          const { bdnews } = require('nayan-server');
          const response = await bdnews();
          const data = response.news;

          
          const con = data.filter(item => item.heading === handleReply.head[event.body - 1]);
          if (con.length > 0) {
              const replyMessage = `
              Title: ${con[0].heading}
              Time: ${con[0].timestamp}
              Content: ${con[0].content || "Not Found"}
              `;
              api.unsendMessage(handleReply.messageID);
              return api.sendMessage(replyMessage, event.threadID);
          } else {
              return api.sendMessage('News not found.', event.threadID);
          }
      } catch (e) {
          console.error('Error handling reply:', e);
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID);
      }
  },


  
  start: async function ({ nayan, events, args }) {
    try {
      const { bdnews } = require('nayan-server');
      const response = await bdnews();
      const data = response.news;
      console.log(response)

      let head = [];
      let msg = "";

      for (let i = 0; i < data.length; i++) {
        head.push(data[i].heading);
        msg += `${i + 1} - ${data[i].heading}\n\n`;
      }

      let body = `»🔎 There are ${head.length} results news:\n\n${msg}» Reply 'feedback' and select one of the searches above.`;

    
      nayan.reply({ body: body }, events.threadID, (error, info) => {
        if (error) {
          console.error('Error replying to user:', error);
          return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
        }

        
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: events.senderID,
          head: head
        });
      }, events.messageID);

    } catch (error) {
      console.error('Error fetching or sending news:', error);
      nayan.reply('An error has occurred, please try again later.', events.threadID, events.messageID);
    }
  }
};
