module.exports = {
    commands: ['shutup'],
    minArgs: 0,
    maxArgs: 0,
    description: "please, shut up.",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.channel.send(`${generalDictionary.shutup}`);
    },
}