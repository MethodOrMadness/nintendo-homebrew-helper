module.exports = {
    commands: 'gitpull',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "",
    callback: (message) => {
        if(message.author.id !== '217076918049177601') {
            return message.reply("Insufficient permissions!");
        } else if(message.author.id === '217076918049177601') {
            message.reply("Pulling....");
            setTimeout(function() {
                const { exec } = require('child_process');
                var yourscript = exec('git pull',
                        (error, stdout, stderr) => {
                            console.log(stdout);
                            console.log(stderr);
                            if (error !== null) {
                                console.log(`exec error: ${error}`);
                            }
                        });
            }, 1000);
            return message.reply("Pulled!")
        } else {
            throw error;
        }
    },
}