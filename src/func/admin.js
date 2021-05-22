import axios from './axios';

export const serverGetList = () =>
	axios
		.get('listing/find')
		.then((res) => ({
			isSuccess: true,
			data: res.data.data,
		}))
		.catch((err) => ({
			isSuccess: false,
			data: null,
		}));