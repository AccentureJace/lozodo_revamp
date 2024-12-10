import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { cartService } from '../../services';
import { useAuthenticationStore, useCartStore } from '../../store';
import { cartStorage } from '../../utils';
import { ADD_TO_CART_ERROR_MESSAGE, ADD_TO_CART_PENDING_MESSAGE, ADD_TO_CART_SUCCESS_MESSAGE } from '../../constants/cart';

export default function useCartHooks() {
	const [isLoading, setIsLoading] = useState(false);
	const { setItemsInCart } = useCartStore((state) => state);
	const { authenticatedUser } = useAuthenticationStore((state) => state);

	useEffect(() => {
		if (authenticatedUser && cartStorage.getCart()) {
			Swal.fire({
				title: 'Transfer items to Cart?',
				text: 'You have items in your cart before logging in, add them to your cart?',
				icon: 'question',
				showDenyButton: true,
				customClass: {
					confirmButton: 'tw-bg-blue-500',
					denyButton: 'tw-bg-red-500',
				},
			}).then((result) => {
				if (result.isConfirmed) {
					toast.promise(
						() => {
							return transferCart(JSON.parse(cartStorage.getCart()));
						},
						{
							pending: ADD_TO_CART_PENDING_MESSAGE,
							success: ADD_TO_CART_SUCCESS_MESSAGE,
							error: ADD_TO_CART_ERROR_MESSAGE,
						}
					);

					cartStorage.clearCart();
				}
				if (result.isDenied) {
					cartStorage.clearCart();
				}
			});
		}
	}, [authenticatedUser]);

	useEffect(() => {
		getItemsInCart();
	}, [authenticatedUser]);

	const addToCartLoggedIn = async ({ product, quantity }) => {
		setIsLoading(true);
		product['total_price'] = product.price * quantity;
		product['quantity'] = quantity;
		product['other_details'] = {};
		const response = await cartService.addItemToCart(product);
		setIsLoading(false);
		const cartData = response.data.cart;
		setItemsInCart(cartData);
	};

	const transferCart = async (storageCart) => {
		const promiseArray = [];
		storageCart.map((cart) => {
			promiseArray.push(cartService.addItemToCart(cart.items[0]));
		});

		await Promise.all(promiseArray);
		await getItemsInCart();
	};

	const addToCartLoggedOut = async ({ product, quantity }) => {
		setIsLoading(true);
		product['total_price'] = product.price * quantity;
		product['quantity'] = quantity;
		product['other_details'] = {};
		const cartData = {};
		var latestCart = [];
		cartData.cart_id = new Date().getTime();
		cartData.items = [{ ...product }];
		const currCart = cartStorage.getCart() ? JSON.parse(cartStorage.getCart()) : [];
		const exists =
			currCart.filter((item) => {
				return item.items[0].product_id == product.product_id;
			}).length > 0;

		if (exists) {
			currCart.map((item) => {
				if (item.items[0].product_id == product.product_id) {
					item.items[0].quantity += quantity;
					item.items[0].total_price += product.total_price;
				}
				return item;
			});
			latestCart = [...currCart];
		} else {
			latestCart = [...currCart, cartData];
		}
		cartStorage.setCart(JSON.stringify(latestCart));
		setItemsInCart(latestCart);
		setIsLoading(false);
	};

	const getItemsInCart = async () => {
		setIsLoading(true);
		if (authenticatedUser) {
			const response = await cartService.getCart();
			const cartData = response.data.cart;
			setItemsInCart(cartData);
		} else {
			if (cartStorage.getCart()) {
				const storeCart = JSON.parse(cartStorage.getCart());
				setItemsInCart(storeCart);
			}
		}
		setIsLoading(false);
	};

	return {
		isLoading,
		addToCartLoggedIn,
		addToCartLoggedOut,
		getItemsInCart,
		transferCart,
	};
}