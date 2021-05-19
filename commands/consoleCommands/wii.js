module.exports = {
    commands: 'wii',
    expectedArgs: '<subcommand> [subcommand modifier]',
    minArgs: 1,
    maxArgs: 2,
    description: "Wii help commands, see `.wii help` for subcommands",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        const helpfile = require("../../dictionary/wiiHelpFile.json");
        function sendMsg(wiiContent) { message.reply(wiiContent); } // message send

        let expectedArgs = '<subcommand> [subcommand modifier]'

        let args0 = arguments[0]
            args1 = arguments[1]
    
            switch(args0) {
                case 'help': // help command
                    return sendMsg(`\n${wiiDictionary.help}`);
                case 'start': // entry point for modding
                    switch(args1) {
                        case 'letterbomb':
                            return sendMsg(`\n${wiiDictionary.startLB}`);
                        case 'bluebomb':
                            return sendMsg(`\n${wiiDictionary.startBLB}`);
                        case 'bannerbomb':
                            sendMsg(`\n${wiiDictionary.startBAB1}`);
                            return sendMsg(`\n${wiiDictionary.startBAB2}`);
                        case 'str2hax':
                            return sendMsg(`\n${wiiDictionary.startSTR2}`);
                        case 'wilbrand':
                            return sendMsg(`\n${wiiDictionary.startWLB}`);
                        default:
                            return sendMsg(`\n${wiiDictionary.start1}`);
                    }
                case 'hbc': // hbc setup
                    return sendMsg(`\n${wiiDictionary.hbc}`);
                case 'nand': // creating a nand backup
                    return sendMsg(`\n${wiiDictionary.nand}`);
                case 'prii': // installing priiloader
                    return sendMsg(`\n${wiiDictionary.prii}`);
                case 'cios': // installing cios on a wii
                    switch(args1) {
                        case 'offline':
                            sendMsg(`\n${wiiDictionary.ciosoffline}`);
                            return sendMsg({ files: ["./resources/sharpiimod.zip"] });
                        case 'mini':
                            return sendMsg(`\n${wiiDictionary.mcios}`);
                        default:
                            return sendMsg(`\n${wiiDictionary.cios}`);
                    }
                case 'ulgx': // installing usbloadergx
                    return sendMsg(`\n${wiiDictionary.ulgx}`);
                case 'wml': // Wii mod lite
                    return sendMsg(`\n${wiiDictionary.wml}`);
                case 'wbm': // using wii backup manager
                    return sendMsg(`\n${wiiDictionary.wbm}`);
                case 'rc24': // setting up rc24
                    return sendMsg(`\n${wiiDictionary.rc24}`);
                case 'sc': // running syscheck
                    sendMsg(`\n${wiiDictionary.sc1}`);
                    return sendMsg(`\n${wiiDictionary.sc2}`);
                case 'wiimmfi': // setting up wiimmfi
                    return sendMsg(`\n${wiiDictionary.wiimmfi}`);
                case 'theme': // installing themes
                    return sendMsg(`\n${wiiDictionary.theme}`);
                case 'itw': // iso to wbfs tool
                    return sendMsg(`\n${wiiDictionary.itw}`);
                case 'files': // display file structures
                    switch(args1) {
                        case 'usb': // displays usb game structure
                            return sendMsg(`\n${wiiDictionary.filesUSB}`);
                        case 'sd': // displays sd card file structure
                            return sendMsg(`\n${wiiDictionary.filesSD}`);
                        default: // displays both
                            return sendMsg(`\n${wiiDictionary.files}`);
                    }
                case 'troubleshoot':
                    return sendMsg(`\n${wiiDictionary.troubleshooting}`);
                case 'nintendont':
                    return sendMsg(`\n${wiiDictionary.nintendont}`);
                case 'dumping':
                    return sendMsg(`\n${wiiDictionary.dump}`);
                case 'nusd':
                    return sendMsg(`\n${wiiDictionary.nusd}`);
                case 'waderr':
                    if(!args1) {
                        // TODO: make this display a list of all available error codes
                        return;
                    }
                    let searchResult = wadErrorCodes.ErrorCodes.find(Code => Code.Code == args1);
                    
                    if(!searchResult) {
                        return sendMsg(`No results found for ${args1}`);
                    } else if(searchResult.SuggestedFix === "") {
                        var SuggestedFix = "Fix your WAD Manager";
                    } else {
                        var SuggestedFix = searchResult.SuggestedFix;
                    }
    
                    if (searchResult) {
                      return sendMsg(`Found result for \`${args1}\`: ${searchResult.Meaning}, Suggested Fix: ${SuggestedFix}`);
                    }
                case 'yaosm':
                    return sendMsg(`\n${wiiDictionary.yaosm}`);
                default:
                    message.reply(`Incorrect syntax! use .wii ${expectedArgs}`);
            }
    },
}