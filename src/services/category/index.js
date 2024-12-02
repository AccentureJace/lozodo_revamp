import { axios } from '../../axios';
import {
	PATH_GET_ALL_CATEGORIES,
	PATH_CATEGORY,
} from '../../constants/service';

const categoryService = {
	getAllCategories: async () => {
		try {
			const result = await axios.get(PATH_GET_ALL_CATEGORIES);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	getCategoryById: async (category_id) => {
		try {
			const result = await axios.get(`${PATH_CATEGORY}/${category_id}`);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	createCategory: async (category_details) => {
		try {
			const { category_name, created_by } = category_details;
			const result = await axios.post(PATH_CATEGORY, {
				category_name,
				created_by,
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	updateCategory: async (category_id, category_details) => {
		try {
			const { category_name, created_by } = category_details;
			const result = await axios.put(`${PATH_CATEGORY}/${category_id}`, {
				category_name,
				created_by,
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	deleteCategory: async (category_id) => {
		try {
			const result = await axios.delete(
				`${PATH_CATEGORY}/${category_id}`
			);
			return result.data;
		} catch (error) {
			return error;
		}
	},
};

export default categoryService;
