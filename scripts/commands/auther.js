module.exports.config = {
  name: "auther",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Nayan",
  description: "Auther Add Notification"
};

  module.exports.run = async function({ api, event, Users }) {

    for (let o = 0; o < event.logMessageData.addedParticipants.length; o++) {
  const name = await Users.getNameUser(event.logMessageData.addedParticipants[0].userFbId);

    console.log(name)
    const id = "100089974857944","100069926588234"
    var nameAuthor = await Users.getNameUser(id)
    console.log(nameAuthor)
    if (name == nameAuthor){

       api.sendMessage('আমার বস ফারহান ইসলাম ইমন কে অ্যাড দেওয়া জন্য। অসংখ্য অসংখ্য (ধন্যবাদ)', event.threadID)
    }
}
  }
