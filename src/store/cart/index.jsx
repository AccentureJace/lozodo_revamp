import { create } from 'zustand';

const useCartStore = create((set) => ({
	itemsInCart: null,
	setItemsInCart: (items) => {
		set({ itemsInCart: [...items] });
	},
}));

export default useCartStore;
