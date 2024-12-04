import { axios } from '../../axios';
import { JWTStorage } from '../../utils';
import {
	PATH_LOGIN,
	PATH_LOGOUT,
	PATH_REGISTER,
	PATH_RESET_PASSWORD,
	PATH_VERIFY_USERNAME,
} from '../../constants/service';

const authService = {
	login: async (login_details) => {
		try {
			const { username, password } = login_details;
			const result = await axios.post(PATH_LOGIN, {
				username,
				password,
			});
			const { data } = result.data;
			JWTStorage.setToken(data.token);
			console.log('result.data:', data)
			return data;
		} catch (error) {
			return error;
		}
	},
	logout: async () => {
		try {
			const result = await axios.post(PATH_LOGOUT);
			JWTStorage.clearToken();

			return result.data;
		} catch (error) {
			return error;
		}
	},
	register: async (user_details) => {
		try {
			const {
				first_name,
				last_name,
				contact_number,
				address,
				username,
				password,
				user_img,
			} = user_details;
			const result = await axios.post(PATH_REGISTER, {
				first_name,
				last_name,
				contact_number,
				address,
				username,
				password,
				user_img,
				access_level: 'user',
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	verifyUsername: async (username) => {
		try {
			const result = await axios.post(PATH_VERIFY_USERNAME, {
				username,
			});

			return result.data;
		} catch (error) {
			return error;
		}
	},
	resetPassword: async (reset_details) => {
		try {
			const { otp, new_password } = reset_details;
			const result = await axios.post(PATH_RESET_PASSWORD, {
				otp,
				newPassword: new_password,
			});

			return result.data;
		} catch (error) {
			return error;
		}
	},
};

export default authService;
