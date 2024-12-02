const isValidPhone = (str) => {
	const phonePattern = /09\d{9}$/;

	return phonePattern.test(str);
};

const isStrongPassword = (str) => {
	const passwordPattern = /^(?=(.*[A-Z])(?=.*?[a-z])(?=(.*[0-9]){3,})(?=.*?[#?!@$%^&*-])).{10,}$/;
	return passwordPattern.test(str);
};

const isEmpty = (str) => {
	return str == '';
};

export const validateObject = (obj) => {
	let result = {};

	for (const [key, value] of Object.entries(obj)) {
		if (key.toLowerCase().includes('phone') || key.includes('contact')) {
			if (!isValidPhone(value)) {
				result[key] = 'Must be 11-digit that starts with 09';
			}
		}

		if (key.toLowerCase().includes('password')) {
			if (!isStrongPassword(value)) {
				result[key] = 'Password must have atleast 10 characters, 1 special character, 3 numbers and 1 uppercase';
			}
		}

		if (isEmpty(value)) {
			result[key] = `This field cannot be empty`;
		}
	}

	return result;
};
