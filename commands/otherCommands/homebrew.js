module.exports = {
    commands: 'homebrew',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "homebrew != piracy",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.reply("Homebrew is a term used to describe games and other software developed by consumers of proprietary computer hardware platforms, such as game consoles, that have hardware restrictions and are not usually user-programmable.")
    },
}