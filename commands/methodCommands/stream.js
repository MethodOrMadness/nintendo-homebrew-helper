module.exports = {
    commands: 'stream',
    expectedArgs: '<channelID>',
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    description: "asks if method should stream, only useable by Method",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes, bot) => {
        const Discord = require(`discord.js`);
        let { adminID } = require(`../../botconfig.json`);

        if(message.author.id !== `${adminID}`) return 0;
    
        let chanID = arguments[0];
            date = new Date();
        
        if(chanID === `current`) chanID = message.channel.id;
        let updateembed = new Discord.MessageEmbed()
            .setColor(`#FF00FF`)
            .setTitle(`Should Method Stream today?(${date})`)
            .setAuthor(`${message.author.username}`)
            .addFields(
                { name: `Option 1`, value: `:regional_indicator_y: for yes` },
                { name: `Option 2`, value: `:regional_indicator_n: for no` },
            )
        bot.channels.cache.get(`${message.channel.id}`).send(updateembed)
                .then(msg => { msg.react('🇾'); msg.react('🇳'); })
    }
}