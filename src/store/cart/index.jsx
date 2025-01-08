import { create } from 'zustand';

const useCartStore = create((set) => ({
	itemsInCart: [],

	setItemsInCart: (items) => {
		set({ itemsInCart: [...items] });
	},
}));

export default useCartStore;
