import { axios } from '../../axios';
import { PATH_TRANSACTIONS } from '../../constants/service';

const transactionService = {
	getTransactions: async () => {
		try {
			const result = await axios.get(PATH_TRANSACTIONS);
			return result.data;
		} catch (error) {
			return error;
		}
	},
	saveTransaction: async (cart_ids) => {
		try {
			const result = await axios.post(PATH_TRANSACTIONS, {
				cart_ids,
			});
			return result.data;
		} catch (error) {
			return error;
		}
	},
};

export default transactionService;
