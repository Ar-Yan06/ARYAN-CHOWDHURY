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
	return api.sendMessage(`${global.config.BOTNAME} Bot are now Restarting farhan islam.5.s...`, threadID, () => process.exit(1));
}