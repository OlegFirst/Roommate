import axios from './axios';
export const serverGetAccount = () =>
	axios
		.get('account/me')
		.then((res) => ({
			isSuccess: true,
			data: res.data.data,
		}))
		.catch((err) => ({
			isSuccess: false,
			data: null,
		}));

export const serverPutAccount = (data) =>
	axios
		.put('account/me', data)
		.then((res) => ({
			isSuccess: true,
			data: res.data.data,
		}))
		.catch((err) => ({
			isSuccess: false,
			data: null,
		}));
