import { hostName } from '../constants/main';
import axios from 'axios';
import { getToken } from './local-storage';
const defaultOptions = {
	baseURL: hostName,
	headers: {
		'Content-Type': 'application/json',
	},
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
	const token = getToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default instance;
