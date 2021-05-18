module.exports = {
    commands: 'lmgtfy',
    expectedArgs: '<search term>',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    description: "Basically a google command",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        let query = encodeURIComponent(text.toLowerCase());
        return message.channel.send(`https://lmgtfy.app/?q=${query}&s=g&t=w&iie=1`);
    }
}