module.exports = {
    commands: 'tryit',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Try it and see",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.channel.send(`${generalDictionary.tryIt}`);
    },
}