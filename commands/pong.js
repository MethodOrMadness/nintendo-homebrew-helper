module.exports = {
    commands: 'pong',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "Illegal command",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        message.reply(`Pin- wait, thats illegal`);
        return message.channel.send(`https://cdn.discordapp.com/emojis/308744912415752211.png?size=64`);
    }
}