const path = require("path"); // path module
const fs = require("fs"); // FS module

module.exports = (bot) => {
    const baseFile = 'command-base.js';
    const commandBase = require(`./commands/${baseFile}`);

    const commands = [];

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir));

        for(const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if(stat.isDirectory()) {
                readCommands(path.join(dir, file));
            } else if(file !== baseFile) {
                const option = require(path.join(__dirname, dir, file));
                commands.push(option);
                commandBase(option);
            }
        }
    }

    readCommands('commands');

    if(bot) {
        commandBase.listen(bot);
    }

    return commands;
}