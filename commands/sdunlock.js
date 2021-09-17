module.exports = {
    commands: ['sdunlock', 'cardlock', 'writeprotect'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "image telling you to unlock sd card",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.channel.send({ files: ["./resources/sdunlock.png"] }); //floppa from r/wiihacks stole this from google and i stole it from him for this bot
    },
}
