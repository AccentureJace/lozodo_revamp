import { SESSION_TOKEN } from '../constants/common';

export const JWTStorage = {
	getToken: () => {
		return localStorage.getItem(SESSION_TOKEN);
	},

	setToken: (token) => {
		localStorage.setItem(SESSION_TOKEN, token);
	},
	clearToken: () => {
		localStorage.removeItem(SESSION_TOKEN);
	},
};

