import 'dotenv/config';
import axios from 'axios';

const url = `https://discord.com/api/v8/applications/${process.env.DISCORD_CLIENT_ID}/commands`;

const json = {
	'name': 'roll',
	'description': 'ダイスロールを行います',
	'options': [
		{
			'name': 'input',
			'description': '目標値を設定して成否判定します(例: 1d100<=50)',
			'required': false,
			'type': 3,
		},
	],
};

const headers = {
	'Authorization': `Bot ${process.env.DISCORD_TOKEN}`,
	'Content-Type': 'application/json',
};

async function deploy() {
	const response = axios({
		method: 'post',
		url: url,
		headers: headers,
		data: JSON.stringify(json),
	});
	return response;
}

console.log(JSON.stringify(json));
const res = deploy();
console.log(res);
