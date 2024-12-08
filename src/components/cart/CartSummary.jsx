import { Button, Typography } from 'antd';
import { useCartStore } from '../../store';
import { handleFormatAmountToPHP } from '../../utils';

const CartSummary = () => {
	const { itemsInCart } = useCartStore((state) => state);

	const totalQuantity = itemsInCart.reduce((prev, next) => {
		return prev + next.items[0].quantity;
	}, 0);

	var totalPrice = itemsInCart.reduce((prev, next) => {
		return prev + next.items[0].total_price;
	}, 0);

	totalPrice = handleFormatAmountToPHP(totalPrice);

	return (
		<div className='tw-border tw-border-slate-400 tw-flex tw-flex-col tw-w-1/3 tw-h-full tw-bg-white tw-py-6 tw-px-4 tw-gap-3'>
			<Typography className='tw-text-xl'>Order Summary</Typography>
			<div className='tw-flex tw-flex-col tw-px-2 tw-gap-3'>
				<div className='tw-flex'>
					<Typography className='tw-text-lg'>Subtotal ({totalQuantity} Items)</Typography>
					<div className='tw-flex tw-ms-auto tw-w-40 tw-justify-end'>
						<Typography className='tw-text-lg'>{totalPrice}</Typography>
					</div>
				</div>
				<div className='tw-flex'>
					<Typography className='tw-text-lg'>Shipping Fee</Typography>
					<div className='tw-flex tw-ms-auto tw-w-40 tw-justify-end'>
						<Typography className='tw-text-lg'>₱38.00</Typography>
					</div>
				</div>
				<div className='tw-flex'>
					<Typography className='tw-text-lg'>Discount</Typography>
					<div className='tw-flex tw-ms-auto tw-w-40 tw-justify-end'>
						<Typography className='tw-text-lg'>₱0.00</Typography>
					</div>
				</div>
			</div>
			<hr />
			<div className='tw-flex tw-flex-col'>
				<div className='tw-flex tw-pe-2'>
					<Typography className='tw-text-lg'>Total</Typography>
					<div className='tw-flex tw-ms-auto tw-w-40 tw-justify-end'>
						<Typography className='tw-text-lg tw-text-red-500'>{totalPrice}</Typography>
					</div>
				</div>
				<div className='tw-flex tw-justify-end tw-ms-auto'>
					<Typography className='tw-text-sm tw-text-slate-600'>VAT included, where applicable</Typography>
				</div>
			</div>
			<Button type='primary'>Buy Now</Button>
		</div>
	);
};

export default CartSummary;
