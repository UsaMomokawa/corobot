import 'dotenv/config';
import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.COROBOT_URL,
	timeout: 10000,
	headers: { 'X-COROBOT-TOKEN': process.env.COROBOT_TOKEN },
});

export { instance };
