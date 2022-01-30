module.exports = {
    commands: ['michaelmjd', 'mjd'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Meme about Mr. MJD",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.reply(`\n${generalDictionary.mjd2}\n${generalDictionary.mjd1}`)
    }
}