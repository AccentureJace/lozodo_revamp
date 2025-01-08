import { VALIDATION_CONFIRM_PASSWORD } from '../constants/auth';
import { CART_STORAGE_KEY } from '../constants/cart';
import { EMPTY_FIELD_ERROR, INVALID_PASSWORD_ERROR, INVALID_PHONE_NUMBER_ERROR, SESSION_TOKEN } from '../constants/common';

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

export const cartStorage = {
	getCart: () => {
		return localStorage.getItem(CART_STORAGE_KEY);
	},
	setCart: (cartItems) => {
		localStorage.setItem(CART_STORAGE_KEY, cartItems);
	},
	clearCart: () => {
		localStorage.removeItem(CART_STORAGE_KEY);
	},
};

export const validateObject = (obj) => {
	let result = {};

	const isValidPhone = (phone_number) => {
		const phone_pattern = /09\d{9}$/;
		return phone_pattern.test(phone_number);
	};

	const isStrongPassword = (password) => {
		const password_pattern = /^(?=(.*[A-Z])(?=.*?[a-z])(?=(.*[0-9]){3,})(?=.*?[#?!@$%^&*-])).{10,}$/;
		return password_pattern.test(password);
	};

	const isEmpty = (field) => {
		return field == '';
	};

	for (const [key, value] of Object.entries(obj)) {
		if (key.toLowerCase().includes('phone') || key.includes('contact')) {
			if (!isValidPhone(value)) {
				result[key] = INVALID_PHONE_NUMBER_ERROR;
			}
		}

		if (key.toLowerCase().includes('password')) {
			if (!isStrongPassword(value)) {
				result[key] = INVALID_PASSWORD_ERROR;
			}
		}

		if (isEmpty(value)) {
			result[key] = EMPTY_FIELD_ERROR;
		}
	}

	return result;
};

export const handleFormatAmountToPHP = (amount) => {
	return new Intl.NumberFormat('en-PH', {
		style: 'currency',
		currency: 'PHP',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(amount);
};

export const handleConfirmPassword = (form, _) => {
	return async (_, value) => {
		const password = form.getFieldValue('password');
		if (value && value !== password) {
			throw new Error(VALIDATION_CONFIRM_PASSWORD);
		}
	};
};
