module.exports.config = {
		name: "rest",
		version: "1.0.0",
		permission: 2,
		credits: "farhan",
		description: "Restart Bot",
		prefix: true, 
		category: "system", 
		usages: "system",
		cooldowns: 5,
		dependencies: {
				"axios": ""
		}
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`${global.config.BOTNAME}  𝖡𝖮𝖳 𝖠𝖱𝖤 𝖭𝖮𝖶 𝖱𝖤𝖲𝖳𝖠𝖱𝖳𝖨𝖭𝖦 𝖠𝖱𝖸𝖠𝖭 𝖢𝖧𝖮𝖶𝖣𝖧𝖴𝖱𝖸 •••••`, threadID, () => process.exit(1));
}
