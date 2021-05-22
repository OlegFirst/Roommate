import { hostName } from '../constants/main';
const axios = require('axios');

export const serverSingUp = (data, readed) => {
	axios
		.post(hostName + 'account/signUp', { ...data })
		.then((res) => {
			readed({
				isSuccess: true,
				data: res.data,
			});
		})
		.catch((err) => {
			readed({
				isSuccess: false,
				data: null,
			});
		});
};

export const serverGetAccountId = (token, readed) => {
	axios
		.get(hostName + 'account/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			readed({
				isSuccess: true,
				data: res.data,
			});
		})
		.catch((err) => {
			readed({
				isSuccess: false,
				data: null,
			});
		});
};
