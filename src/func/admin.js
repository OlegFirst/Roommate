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
		
export const serverDeleteApartment = listingId =>
	axios
		.post('listing/delete', {listingId})
		.then((res) => ({
			isSuccess: true,
			data: res.data.data,
		}))
		.catch((err) => ({
			isSuccess: false,
			data: null,
		}));
		
export const serverDeleteAcaunt = eMail =>
	axios
		.post('admin/account', {body: eMail})
		.then((res) => ({
			isSuccess: true,
			data: res.data.data,
		}))
		.catch((err) => ({
			isSuccess: false,
			data: null,
		}));