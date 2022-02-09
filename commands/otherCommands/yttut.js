module.exports = {
    commands: ['yttut'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "A (not so good) tutorial",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        message.reply({ files: ["./resources/yttut.jpg"] });
    },
}

