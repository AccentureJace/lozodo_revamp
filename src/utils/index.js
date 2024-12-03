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

export const handleFormatAmountToPHP = (amount) => {
	return new Intl.NumberFormat('en-PH', {
		style: 'currency',
		currency: 'PHP',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(amount);
};
