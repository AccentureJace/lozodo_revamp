import { axios } from '../customAxios';
import { PATH_PRODUCTS } from '../../constants/service';

const productService = {
	getAllProducts: async () => {
		try {
			const result = await axios.get(PATH_PRODUCTS);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	getProductById: async (product_id) => {
		try {
			const result = await axios.get(`${PATH_PRODUCTS}/${product_id}`);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	createProduct: async (product_details) => {
		try {
			const {
				product_name,
				product_img,
				product_description,
				category,
				price,
				created_by,
			} = product_details;
			const result = await axios.post(PATH_PRODUCTS, {
				product_name,
				product_img,
				product_description,
				category: [category],
				price,
				currency: 'peso',
				created_by,
				other_details: null,
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	updateProduct: async (product_id, product_details) => {
		try {
			const {
				product_name,
				product_img,
				product_description,
				category,
				price,
				currency,
				created_by,
			} = product_details;
			const result = await axios.put(`${PATH_PRODUCTS}/${product_id}`, {
				product_name,
				product_img,
				product_description,
				category,
				price,
				currency,
				created_by,
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
	deleteProduct: async (product_id) => {
		try {
			const result = await axios.delete(`${PATH_PRODUCTS}/${product_id}`);
			return result.data;
		} catch (error) {
			return error;
		}
	},
};

export default productService;
