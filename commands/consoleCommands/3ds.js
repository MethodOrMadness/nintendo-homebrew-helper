module.exports = {
    commands: '3ds',
    expectedArgs: '<subcommand> [subcommandmodifier]',
    permissionError: '',
    minArgs: 1,
    maxArgs: 2,
    permissions: [],
    requiredRoles: [],
    description: "3DS help commands, see `.3ds help` for subcommands",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        function sendMsg(Content) { message.reply(Content); } // message send

        let args0 = arguments[0]
            args1 = arguments[1]

        switch(args0) {
            case 'help': // help command
                return sendMsg(`${DSDictionary.help}`);
            case 'start': // entry point for modding
                return sendMsg(`${DSDictionary.start}`);
            case 'b9s': // b9s install
                return sendMsg(`${DSDictionary.b9s}`);
            case 'final': // final install steps
                return sendMsg(`${DSDictionary.final}`);
            case 'pm': // pm errors
                return sendMsg(`${DSDictionary.pm}`);
            case 'twl': // twl menu install
                return sendMsg(`${DSDictionary.twl}`);
            case 'id0': // what id0 means
                return sendMsg(`${DSDictionary.id0}`);
            case 'root': // what root means
                sendMsg(`${DSDictionary.root1}`);
                return sendMsg(`${DSDictionary.root2}`);
            case 'cart': // what carts to use
                return sendMsg(`${DSDictionary.cart}`);
            case 'manualupdate': // manually update luma
                return sendMsg(`${DSDictionary.manualupdate}`);
            default: // return on no subcommand
                return sendMsg(`${DSDictionary.default}`);
        }
    },
}