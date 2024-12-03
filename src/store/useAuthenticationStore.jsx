import { create } from 'zustand';

export const useAuthenticationStore = create((set) => ({
	authenticatedUser: null,
	setAuthenticatedUser: (user) => {
		set({ authenticatedUser: { ...user } });
	},
	deleteAuthenticatedUser: () => {
		set({ authenticatedUser: null });
	},
}));
