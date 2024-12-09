import { Button, Checkbox, Spin, Typography } from 'antd';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
import { CartCard, CartSummary } from '../../components';
import { cartService } from '../../services';
import { useAuthenticationStore, useCartStore } from '../../store';
import { cartStorage } from '../../utils';
import { ERROR_REMOVE_FROM_CART_NONE, SUCCESS_REMOVE_FROM_CART } from '../../constants/cart';
import { useCartHooks } from '../../hooks';

const Cart = () => {
	const { itemsInCart, setItemsInCart } = useCartStore((state) => state);
	const { authenticatedUser } = useAuthenticationStore((state) => state);
	const { isLoading } = useCartHooks();
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
		}).then(async (result) => {
			if (result.isConfirmed) {
				const filteredCart = itemsInCart.filter((cart) => !cart.items[0].checked);
				if (itemsInCart.filter((cart) => cart.items[0].checked).length == 0) {
					toast.error(ERROR_REMOVE_FROM_CART_NONE);
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
						cartStorage.setCart(JSON.stringify(filteredCart));
					}
					setItemsInCart(filteredCart);
				};

				await deleteItems();
				toast.success(SUCCESS_REMOVE_FROM_CART);
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
				{isLoading ? (
					<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white tw-justify-center tw-h-32'>
						<Spin /> Loading Cart...
					</div>
				) : itemsInCart.length > 0 ? (
					itemsInCart.map((item, index) => <CartCard key={item.cart_id} cart={item} handleToggleCheckout={() => handleToggleCheckout(index)} />)
				) : (
					<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white tw-justify-center tw-h-32'>No items in your cart.</div>
				)}
			</div>
			<CartSummary />
		</div>
	);
};

export default Cart;
