import axios from './axios';

export const createAdvetritesement = (data) =>
	axios
		.post('listing/create', data)
		.then((res) => ({
			isSuccess: true,
			data: res.data.data,
		}))
		.catch((err) => ({
			isSuccess: false,
			data: null,
		}));
