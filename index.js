import { roll } from './modules/roll.js';
import 'dotenv/config';
import { Client, Intents } from 'discord.js';
import express from 'express';

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
			await interaction.deferReply();

			const response = await roll(text);
			console.log(response.data.result);

			await interaction.followUp(response.data.result);
		}
		catch (error) {
			console.log(`[Error] ${error.value}`);
			if (error.value === null) {
				await interaction.followUp(
					':hatched_chick: < トラブルが起きたみたい。直したいので、リンクから報告してほしいぴよ\n https://github.com/UsaMomokawa/corobot',
				);
			}
			else {
				await interaction.followUp(error.toString());
			}
		}
	}
});

client.on('disconnect', () => client.logger.log('Bot is disconnecting...', 'warn'))
	.on('reconnecting', () => client.logger.log('Bot reconnecting...', 'log'))
	.on('error', (e) => client.logger.log(e, 'error'))
	.on('warn', (info) => client.logger.log(info, 'warn'));

client.login(process.env.DISCORD_TOKEN);

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Corobot app listening on port ${port}`);
});
