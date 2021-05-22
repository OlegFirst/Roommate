export const setUserName = (name) => {
	localStorage.setItem('protect_userName', name);
};
export const getUserName = () => {
	return localStorage.getItem('protect_userName');
};

export const getJWT = () => {
	return localStorage.getItem("protect_JWT");
};

export const setAccountId = (accountId) => {
	localStorage.setItem('protect_accountId', accountId);
};
export const getAccountId = () => {
	return localStorage.getItem('protect_accountId');
};

export const setToken = (token) => localStorage.setItem('protect_JWT', token);
export const getToken = () => localStorage.getItem('protect_JWT');

export const setAdvertisementMore = (data) => {
	localStorage.setItem('protect_more', JSON.stringify(data));
};
export const getAdvertisementMore = () => {
	return JSON.parse(localStorage.getItem('protect_more'));
};