module.exports = {
    commands: 'service',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        const { exec } = require("child_process");
        const { servicename } = require(`../../botconfig.json`)

        exec(`systemctl status ${servicename}.service`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            interaction.channel.send(`error: ${error.message}`)
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            interaction.channel.send(`stderr: ${stderr}`)
            return;
        }
        console.log(`stdout: ${stdout}`);
        interaction.channel.send(`stdout: ${stdout}`)
        });
        return;
    },
}