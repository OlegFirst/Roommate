export const setUserName = name => {
	localStorage.setItem("protect_userName", name);
};

export const getJWT = () => {
	localStorage.getItem("protect_JWT");
};

export const setAccountId = accountId => {
	localStorage.setItem("protect_accountId", accountId);
};

export const getAccountId = () => {
	localStorage.getItem("protect_accountId");
};