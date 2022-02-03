require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('🚀 corobot app started');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'roll') {
		await interaction.reply('100');
	}
});

client.login(process.env.DISCORD_TOKEN);
