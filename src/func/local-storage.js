export const setUserName = (name) => {
	localStorage.setItem('protect_userName', name);
};

export const getJWT = () => {
	localStorage.getItem('JWT');
};

export const setAccountId = (accountId) => {
	localStorage.setItem('protect_accountId', accountId);
};

export const getAccountId = () => {
	localStorage.getItem('protect_accountId');
};

export const setToken = (token) => localStorage.setItem('JWT', token);
export const getToken = () => localStorage.getItem('JWT');
