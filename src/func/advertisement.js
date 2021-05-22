import { hostName } from '../constants/main';
import axios from './axios';

export const getAllPosts = (accountId, readed) => {
	// axios.post(hostName + `listing/find?accountId=${accountId}`)
	axios
		.post(hostName + `listing/find`)
		.then((res) => {
			readed({
				isSuccess: true,
				data: res.data.data,
			});
		})
		.catch((err) => {
			readed({
				isSuccess: false,
				data: null,
			});
		});
};

export const filter = (data, readed) => {
	axios
		.post('listing/find/', data)
		.then((res) => {
			readed({
				isSuccess: true,
				data: res.data.data,
			});
		})
		.catch((err) => {
			readed({
				isSuccess: false,
				data: null,
			});
		});
};
