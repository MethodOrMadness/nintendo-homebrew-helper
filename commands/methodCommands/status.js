module.exports = {
    commands: 'status',
    expectedArgs: '<statusType>',
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    description: "sets the bot's status, only useable by Method",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes, bot) => {

        let args0 = arguments[0];

        if(message.author.id !== `${generalDictionary.MethodID}`) return 0;
    
        switch(args0) {
            case 'online': // set status to online
                return bot.user.setPresence({status: 'online'});
            case 'idle': // set status to idle
                return bot.user.setPresence({status: 'idle'});
            case 'dnd': // set status to DND
                return bot.user.setPresence({status: 'dnd'});
            case 'invisible': // set status to offline
                return bot.user.setPresence({status: 'invisible'});
        }
    }
}