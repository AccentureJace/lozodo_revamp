import { Checkbox } from 'antd';
import { handleFormatAmountToPHP } from '../../utils';

const CartCard = ({ cart, handleToggleCheckout }) => {
	const product = cart.items[0];
	return (
		<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
			<Checkbox checked={product.checked} onClick={handleToggleCheckout} />
			<img src={product.product_img} className='tw-flex tw-h-20 tw-border-slate-400' />
			<div className='tw-w-1/3'>
				<p className='tw-text-xl'>{product.product_name}</p>
				<p className='tw-text-red-500 tw-text-lg'>{handleFormatAmountToPHP(product.total_price / product.quantity)}</p>
			</div>
			<div className='tw-flex-col tw-flex tw-justify-end tw-ms-auto tw-gap-y-1 tw-w-48'>
				<p>Quantity: {product.quantity}</p>
				<p>SubTotal: {handleFormatAmountToPHP(product.total_price)}</p>
			</div>
		</div>
	);
};

export default CartCard;
