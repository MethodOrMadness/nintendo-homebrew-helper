module.exports = {
    commands: 'shutup',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    description: "When someone needs to shut the fuck up",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.channel.send(`${generalDictionary.shutup}`)
    }
}