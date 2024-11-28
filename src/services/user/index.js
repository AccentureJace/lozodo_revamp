import { axios } from '../customAxios';
import { PATH_USER } from '../../constants/service';

const userService = {
	getAllUsers: async () => {
		try {
			const result = await axios.get(PATH_GET_ALL_USERS);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	getUserByUUID: async () => {
		try {
			const result = await axios.get(PATH_USER);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	createUser: async (user_details) => {
		try {
			const {
				first_name,
				last_name,
				contact_number,
				address,
				date_created,
				username,
				user_img,
				position,
				department,
				branch,
			} = user_details;
			const result = await axios.post(PATH_USER, {
				first_name,
				last_name,
				contact_number,
				address,
				date_created,
				username,
				password: username,
				access_level: 'admin',
				user_img,
				position, //optional
				department, //optional
				branch, //optional
				status: 'ACTIVE',
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	updateUser: async (user_id, user_details) => {
		try {
			const result = await axios.put(`${PATH_USER}/${user_id}`, {
				...user_details,
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	deleteUser: async (user_id) => {
		try {
			const result = await axios.delete(`${PATH_USER}/${user_id}`);
			return result.data;
		} catch (error) {
			return error;
		}
	},
};

export default userService;
