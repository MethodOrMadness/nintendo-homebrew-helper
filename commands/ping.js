module.exports = {
    commands: 'ping',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Pong's you",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.reply("Pong! The bot's ping is " + `${ping}` + "! Suck on that python!").catch(console.error);
    }
}