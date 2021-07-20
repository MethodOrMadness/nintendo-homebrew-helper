module.exports = {
    commands: ['data', 'dontasktoask'],
    minArgs: 0,
    maxArgs: 0,
    description: "when someone asks to ask",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.channel.send(`${generalDictionary.data}`);
    },
}