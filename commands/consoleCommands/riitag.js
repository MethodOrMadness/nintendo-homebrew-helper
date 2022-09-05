module.exports = {
    commands: 'riitag',
    expectedArgs: 'userid',
    permissionError: '',
    minArgs: 0,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    description: "gets the riitag of the user",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes, bot) => {

        const Discord = require(`discord.js`);

        let userID = message.author.id

        if(arguments[0]) userID = message.mentions.users.first().id


        let user = bot.users.cache.get(userID)

        let riitagEmbed = new Discord.MessageEmbed()
            .setAuthor(`${user.username}`, user.displayAvatarURL())
            .setImage(`https://tag.rc24.xyz/${userID}/tag.max.png`)
        
        return message.channel.send(riitagEmbed);
    },
}