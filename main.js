const { Client, Intents, DiscordAPIError } = require('discord.js');
require('dotenv').config();
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
//Discord login 


const activities_list = [
    "Minecraft Version 1.16.5", 
    "IP =", //Enter your mcserver ip
    "!help|MCServer = Online" 
    ]; // creates an arraylist.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 3).
        client.user.setActivity(activities_list[index], { type: 'PLAYING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
    console.log("Only20Mods Has Successfully Connected!")
});
    

client.on("messageCreate", (message) => {
    const prefix = "!"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}test`) {
        message.channel.send("Your test has worked!")
    }
})



client.login(process.env.DISCORD_TOKEN);