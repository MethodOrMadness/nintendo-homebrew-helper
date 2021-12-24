module.exports = {
    commands: ['fdb', 'flashdrive', 'flashdrivebad'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        message.channel.reply("FLASH DRIVE BAD. HARD DRIVE GOOD");
    },
}