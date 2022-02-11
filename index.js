import { roll } from './modules/roll.js';
import 'dotenv/config';
import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('🚀 corobot app started');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'roll') {
		try {
			const text = interaction.options.getString('input');
			const response = await roll(text);
			console.log(response.data.result);

			await interaction.reply(response.data.result);
		}
		catch (error) {
			console.log(error);
			await interaction.reply('Error');
		}
	}
});

client.login(process.env.DISCORD_TOKEN);
