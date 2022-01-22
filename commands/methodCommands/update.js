module.exports = {
    commands: 'update',
    expectedArgs: '<HexColor> <channelID> <update features>',
    minArgs: 3,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    description: "post bot update, not useable by anyone except Method",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes, bot) => {
        const Discord = require(`discord.js`);

        if(message.author.id !== `${generalDictionary.MethodID}`) return 0;
    
        let args0 = arguments[0]
            args1 = arguments[1];
            reason = message.content.replace(`.update ${args0} ${args1}`, '');

        if(args1 === `current`) args1 = message.channel.id;
        let updateembed = new Discord.MessageEmbed()
                .setColor(`#${args0}`)
                .setTitle(`Bot updates`)
                .addFields(
                    { name: `Features:`, value: `${reason}`},
                    { name: `Changelog:`, value: `Removed Herobrine`},
                )
        bot.channels.cache.get(`${args1}`).send(updateembed);
    },
}