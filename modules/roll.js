import { instance } from './axios.js';

export async function roll(text) {
	try {
		const response = await instance.get('/roll', {
			params: {
				text: text,
			},
		});
		return response;
	}
	catch (error) {
		throw new RollException(text);
	}
}

function RollException(value) {
	this.value = value;
	this.toString = function() {
		return '「' + value + '」は分からないぴよ';
	};
}
