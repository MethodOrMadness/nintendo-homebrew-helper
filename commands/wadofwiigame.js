module.exports = {
    commands: ['wadOfWiiGame', 'wiigamewad', 'shutup'],
    expectedArgs: '[UserMention]',
    permissionError: '',
    minArgs: 0,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    description: "When someone needs to shut the fuck up",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        if(arguments[1]) {
            return message.channel.send(`${message.mentions.users.first()} ${generalDictionary.shutup}`);
        } else {
            return message.channel.send(`${generalDictionary.shutup}`);
        }
    }
}