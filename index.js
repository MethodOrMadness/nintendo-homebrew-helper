// Modules
const Discord = require("discord.js"); // Discord module

// Bot Constants
const config = require("./botconfig.json"); // defines the config object
const { token } = require(`./botconfig.json`);
const bot = new Discord.Client({disableEveryone: true}); // defines the bot object

const loadCommands = require(`./load-commands.js`)

// Bot on init
bot.on("ready", async () => {
    // Set bot status
    bot.user.setPresence( { activity: { name: `${config.prefix}help` }, type: 'PLAYING' });
    console.log(`Bot is running!`);

    loadCommands(bot);
});

// Login to the bot
bot.login(token);

/* Help from
https://twitch/tv/0scie
https://twitch.tv/justgessio x2
https://twitch.tv/commandblock6417 aka devnol
*/