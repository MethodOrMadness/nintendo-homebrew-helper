module.exports = {
    commands: 'rtfm',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Read the manual! Oh wait- you are, well,",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.reply(`${generalDictionary.rtfm}`);
    }
}