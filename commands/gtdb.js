module.exports = {
    commands: ['gtdb', 'gamedb', 'titledb'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Game Title DB",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.reply(`${generalDictionary.gtdb}`);
    },
}