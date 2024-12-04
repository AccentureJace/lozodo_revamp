import { create } from 'zustand';

export const useCartStore = create((set) => ({
	itemsInCart: null,
	setItemsInCart: (items) => {
		set({ itemsInCart: [...items] });
	},
}));
