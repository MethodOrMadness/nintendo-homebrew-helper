module.exports = {
    commands: 'about',
    minArgs: 0,
    maxArgs: 0,
    description: 'Displays info about the bot',
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes, bot) => {
        const { version } = require(`../../botconfig.json`);
        const { prefix } = require(`../../botconfig.json`);
        return message.reply(`\n*Version:* ${version}\n*Prefix*: ${prefix}`);
    },
}