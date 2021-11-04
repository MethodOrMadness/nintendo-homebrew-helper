module.exports = {
    commands: 'restart',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "",
    callback: (message) => {
        if(message.author.id !== '217076918049177601') {
            return message.reply("Insufficient permissions!");
        } else if(message.author.id === '217076918049177601') {
            message.reply("Okay, dying now :/");
            return process.exit(1);
        } else {
            throw error;
        }
    },
}