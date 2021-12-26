module.exports = {
    commands: ['fdb', 'flashdrive', 'flashdrivebad'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "flash drive bad, duh",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        message.reply("FLASH DRIVE BAD. HARD DRIVE GOOD");
    },
}