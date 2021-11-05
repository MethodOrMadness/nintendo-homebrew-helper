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
            setTimeout(function() {
                process.exit(1);
            }, 1000);
        } else {
            throw error;
        }
    },
}