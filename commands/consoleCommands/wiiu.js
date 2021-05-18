module.exports = {
    commands: 'wiiu',
    expectedArgs: '<subcommand> [subcommand modifier]',
    minArgs: 0,
    maxArgs: 2,
    description: "WiiU(and vWii) help commands, see `.wiiu help` for subcommands",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        return message.reply(`Currently undergoing some work, check back later!! ${wiiuDictionary.test}`);
        /*    dictionary = require("../dictionary/wiiuhelp.json")
            function sendMsg(content) { message.channel.send(content) } // message send
        
            let args0 = arguments[0];
                args1 = arguments[1];
        
                if(cmd === `${prefix}wiiu`) {
                    switch(args0) {
                        case 'help': // help command
                            return sendMsg(`\_\_\*\*WiiU Help Commands\*\*\_\_\n\*\`.wiiu vwii help\` - Displays help commands for vwii\*\n\*\`.wiiu umode help\` - Displays help commands for wiiu mode\*`);
                        case 'vwii': // vwii mode
                            switch(args1) {
                                case 'help': // Displays help message
                                    return sendMsg(`\_\_\*\*vWii Help Commands\*\*\_\_\n\*Note, these are subcommands, and must be used in this syntax: \`.wiiu vwii {subcommand}\`\*\n\*\`nand\` - Creating a WiiU nand backup\*\n\*\`wup\` - Installing vWii hacks via wuphax\*\n\*\`cios\` - installing cios on the vWii\*\n\*\`80\` - patching ios80 on the vWii\*`);
                                case 'nand': // Creating a NAND backup
                                    return sendMsg(`<https://wiiu.hacks.guide/#/vwii-modding?id=nand-backup>`);
                                case 'wup': // Installing wuphax
                                    return sendMsg(`<https://wiiu.hacks.guide/#/vwii-modding?id=wuphax>`);
                                case 'cios': // Installing cIOS'
                                    return sendMsg(`<https://wiiu.hacks.guide/#/vwii-modding?id=installing-cioses>`);
                                case '80': // Patching ios80
                                    return sendMsg(`<https://wiiu.hacks.guide/#/vwii-modding?id=installing-cioses>`);
                                default:
                                    return sendMsg(`Use \`.wiiu vwii help\` for a list of subcommands.`);
                            }
                        case 'umode': // wiiu mode
                            switch(args1) {
                                case 'help': // Displays help message
                                    return sendMsg(``);
                                default: // return on no subcommand
                                    return sendMsg(`Use \`.wiiu umode help\` for a list of subcommands.`);
                            }
                        default: // return if no args0 supplied
                            return sendMsg(`No subcommand supplied!\nFor a list of commands, use  \`.wiiu help\`\nUse subcommand \`vwii\` for wiimode\nUse subcommand \`umode\` for wiiu-mode`);
                    }
                } */
    },
}