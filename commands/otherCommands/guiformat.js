module.exports = {
    commands: ['format', 'guiformat', 'fat32format'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "links to gui format for formatting drives larger than fat32 on windows",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.channel.send(`${generalDictionary.formatProg}`);
    },
}