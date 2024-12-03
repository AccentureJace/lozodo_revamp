import { CartCard, CartSummary } from '../../components/cart';
import { Checkbox, Typography } from 'antd';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
	return (
		<div className='tw-py-20 tw-px-10 tw-flex tw-gap-x-2 tw-h-auto'>
			<div className='tw-w-2/3 tw-gap-y-2 tw-flex tw-flex-col'>
				<div className='tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
					<Checkbox>
						<Typography>SELECT ALL (2 ITEM(S))</Typography>
					</Checkbox>
					<div className='tw-ms-auto tw-justify-end tw-flex tw-items-center tw-cursor-pointer'>
						<AiFillDelete />
						<Typography>Delete</Typography>
					</div>
				</div>
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
			</div>
			<CartSummary />
		</div>
	);
};

export default Cart;
