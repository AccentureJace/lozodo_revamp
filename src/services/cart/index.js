import { axios } from '../../axios';
import {
	PATH_GET_CART,
	PATH_ADD_ITEMS_TO_CART,
	PATH_DELETE_CART,
} from '../../constants/service';

const cartService = {
	getCart: async () => {
		try {
			const result = await axios.get(PATH_GET_CART);

			return result.data;
		} catch (error) {
			return error;
		}
	},
	addItemToCart: async (cart_details) => {
		try {
			const {
				product_name,
				quantity,
				total_price,
				currency,
				product_img,
				other_details,
			} = cart_details;
			const result = await axios.post(PATH_ADD_ITEMS_TO_CART, {
				product_name,
				quantity,
				total_price,
				currency,
				product_img,
				other_details,
			});

			return result.data;
		} catch (error) {
			return error;
		}
	},
	deleteCart: async (cart_id) => {
		try {
			const result = await axios.delete(PATH_DELETE_CART, {
				data: {
					cart_id,
				},
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
};

export default cartService;
