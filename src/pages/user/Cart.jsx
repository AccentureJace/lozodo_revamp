import { Button, Checkbox, Typography } from 'antd';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
import { CartCard, CartSummary } from '../../components';
import { cartService } from '../../services';
import { useAuthenticationStore, useCartStore } from '../../store';
import { cartStorage } from '../../utils';
import { REMOVE_FROM_CART_NONE_ERROR, REMOVE_FROM_CART_SUCCESS_MESSAGE } from '../../constants/cart';

const Cart = () => {
	const { itemsInCart, setItemsInCart } = useCartStore((state) => state);
	const { authenticatedUser } = useAuthenticationStore((state) => state);

	const handleToggleCheckout = (index) => {
		if (itemsInCart[index].items[0].checked) {
			itemsInCart[index].items[0].checked = false;
		} else {
			itemsInCart[index].items[0].checked = true;
		}
		setItemsInCart(itemsInCart);
	};

	const handleSelectAll = (e) => {
		if (e.target.checked) {
			itemsInCart.map((cart) => {
				cart.items[0].checked = true;
			});
		} else {
			itemsInCart.map((cart) => {
				cart.items[0].checked = false;
			});
		}

		setItemsInCart(itemsInCart);
	};

	const handleDeleteItemsInCart = async () => {
		Swal.fire({
			title: 'Are you sure you want to delete these items?',
			text: 'These items will be removed from your cart',
			icon: 'question',
			showDenyButton: true,
			customClass: {
				confirmButton: 'tw-bg-blue-500',
				denyButton: 'tw-bg-red-500',
			},
		}).then((result) => {
			if (result.isConfirmed) {
				const filteredCart = itemsInCart.filter((cart) => !cart.items[0].checked);
				if (itemsInCart.filter((cart) => cart.items[0].checked).length == 0) {
					toast.error(REMOVE_FROM_CART_NONE_ERROR);
					return;
				}
				const deleteItems = async () => {
					const checked = itemsInCart.filter((item) => {
						return item.items[0].checked;
					});

					if (authenticatedUser) {
						const promiseArray = [];

						checked.map((element) => {
							promiseArray.push(cartService.deleteCart(element.cart_id));
						});

						const result = await Promise.all(promiseArray);
					} else {
					}

					setItemsInCart(filteredCart);
					cartStorage.setCart(JSON.stringify(filteredCart));

					toast.success(REMOVE_FROM_CART_SUCCESS_MESSAGE);
				};

				deleteItems();
			}
		});
	};

	return (
		<div className='tw-py-20 tw-px-10 tw-flex tw-gap-x-2 tw-h-auto'>
			<div className='tw-w-2/3 tw-gap-y-2 tw-flex tw-flex-col'>
				<div className='tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
					<Checkbox onClick={handleSelectAll}>
						<Typography>SELECT ALL ({itemsInCart.length} ITEM(S))</Typography>
					</Checkbox>
					<Button className='tw-bg-red-500 tw-text-white tw-ms-auto tw-justify-end tw-flex tw-items-center tw-cursor-pointer' onClick={handleDeleteItemsInCart}>
						<AiFillDelete />
						<Typography className='tw-text-white'>Delete</Typography>
					</Button>
				</div>
				{itemsInCart.map((item, index) => (
					<CartCard key={item.cart_id} cart={item} handleToggleCheckout={() => handleToggleCheckout(index)} />
				))}
			</div>
			<CartSummary />
		</div>
	);
};

export default Cart;
