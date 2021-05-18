module.exports = {
    commands: ['vguide', 'videoguide', 'videos'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Why **NOT** to use video guides",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.reply(`${generalDictionary.vguide}`);
    },
}