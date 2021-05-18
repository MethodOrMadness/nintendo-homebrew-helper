const loadCommands = require(`../load-commands.js`);
const { prefix } = require(`../botconfig.json`);
module.exports = {
    commands: ['help', 'h'],
    description: "Describes all the commands for the bot",
    callback: (message, arguments, text) => {
        let reply = "\nHere is a list of commands: \n";

        const commands = loadCommands()

        for(const command of commands) {
            // Check for perms
            let permissions = command.permission

            if(permissions) {
                let hasPermission = true;
                if(typeof permissions === 'string') {
                    permissions = [permissions];
                }

                for(const permission of permissions) {
                    if(!message.member.hasPermission(permission)) {
                        hasPermission = false;
                        break;
                    }
                }

                if(!hasPermission) {
                    continue;
                }
            }
            // Format text
            const mainCommand = typeof command.commands === 'string' 
                                ? command.commands 
                                : command.commands[0];
            const args = command.expectedArgs ? ` ${command.expectedArgs}` : ""
            const { description } = command

            reply += `**${prefix}${mainCommand}${args}** : ${description}\n`;
        }
        message.reply(reply);
    }
}