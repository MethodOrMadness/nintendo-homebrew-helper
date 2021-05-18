const { prefix } = require(`../botconfig.json`);
const generalDictionary = require(`../dictionary/generalDictionary.json`);
const wiiDictionary = require("../dictionary/wiihelp.json");
const wiiuDictionary = require("../dictionary/wiiuhelp.json");
const DSDictionary = require("../dictionary/3dshelp.json");
const wadErrorCodes = require("../dictionary/wadErrorCodes.json");


const validatePermissions = (permissions) => {
    const validPermissions = [
        'ADMINISTRATOR',
        'CREATE_INSTANT_INVITE',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'ADD_REACTIONS',
        'VIEW_AUDIT_LOG',
        'PRIORITY_SPEAKER',
        'STREAM',
        'VIEW_CHANNEL',
        'SEND_MESSAGES',
        'SEND_TTS_MESSAGES',
        'MANAGE_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'MENTION_EVERYONE',
        'USE_EXTERNAL_EMOJIS',
        'VIEW_GUILD_INSIGHTS',
        'CONNECT',
        'SPEAK',
        'MUTE_MEMBERS',
        'DEAFEN_MEMBERS',
        'MOVE_MEMBERS',
        'USE_VAD',
        'CHANGE_NICKNAME',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS',
    ];

    for(const permission of permissions) {
        if(!validPermissions.includes(permission)) {
            throw new Error(`Unknown permission node "${permission}"`);
        }
    }
}

const allCommands = { };

module.exports = (commandOptions) => {
    let {
        commands,
        //expectedArgs = '',
        //permissionError = 'You don\'t have the permission to run this command',
        //minArgs = 0,
        //maxArgs = null,
        permissions = [],
        //requiredRoles = [],
        //callback
    } = commandOptions;

    // Ensure the command aliases are in an array
    if(typeof commands === 'string') {
        commands = [commands]
    }

    // Ensure the permissions are valid and in an array
    if(permissions.length) {
        if(typeof permissions === 'string') {
            permissions = [permissions];
        }

        validatePermissions(permissions);
    }

    for(const command of commands) {
        allCommands[command] = {
            ...commandOptions,
            commands,
            permissions,
        };
    }
}

module.exports.listen = (bot) => {
    // Listen for messages
    bot.on('message', message => {
        const {member, content, guild} = message;

        // Split on any number of spaces
            
        const arguments = content.split(/[ ]+/);
            
        // Remove command which is first index
        const name = arguments.shift().toLowerCase();

        if(name.startsWith(prefix)) {
            const command = allCommands[name.replace(prefix, '')];
            if(!command) {
                return
            }

            const {
                permissions,
                permissionError = 'You don\'t have the permission to run this command',
                expectedArgs,
                minArgs = 0,
                maxArgs = null,
                requiredRoles = [],
                callback
            } = command

            // A command is executed
            
            // Ensure user has permission
            for(const permission of permissions) {
                if(!member.hasPermission(permission)) {
                    message.reply(permissionError);
                    return;
                }
            }

            // Ensure user has roles
            for(const requiredRole of requiredRoles) {
                const role = guild.roles.cache.find(role => role.name === requiredRole);

                if(!role) {
                    message.reply(`Error: Role ${requiredRole} does not exist!`);
                    return;
                } else if(!member.roles.cache.has(role.id)) {
                    message.reply(`Error: You do not have the required role ${requiredRole} !`);
                    return;
                }
            }

            // Ensure we have the correct number of arguments
            if(arguments.length < minArgs || (maxArgs !== null && arguments.length > maxArgs)) {
                message.reply(`Incorrect syntax! use ${name} ${expectedArgs}`);
                return;
            }

            // Handle the custom command code
            callback(message, arguments, arguments.join(' '), generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes, bot);
        }
    })
}