module.exports = {
    commands: 'google',
    expectedArgs: '<search term>',
    permissionError: '',
    minArgs: 1,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    description: "a google command",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        let query = encodeURIComponent(text.toLowerCase());
        return message.channel.send(`https://www.google.com/search?q=${query}`);
    }
}