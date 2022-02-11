import { instance } from './axios.js';

export async function roll(text) {
	const response = await instance.get('/roll', {
		params: {
			text: text,
		},
	});
	return response;
}
