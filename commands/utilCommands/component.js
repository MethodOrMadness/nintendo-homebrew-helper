module.exports = {
    commands: ['component'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    requiredRoles: [],
    description: "a component to hdmi adapter",
    callback: (message, arguments, text, generalDictionary, wiiDictionary, wiiuDictionary, DSDictionary, wadErrorCodes) => {
        message.reply(`Instead of using a Wii2HDMI or composite, we recommend using component cables(any, doesn't really matter) and this converter <https://www.amazon.com/gp/product/B07T29D4RY>`);
    },
}