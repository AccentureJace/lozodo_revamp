import { Checkbox, Typography, Button } from 'antd';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { product_1 } from '../../assets/images';

const CartCard = () => {
	return (
		<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
			<Checkbox />
			<img src={product_1} className='tw-flex tw-h-20 tw-border-slate-400' />
			<Typography className='tw-w-1/2 tw-text-lg'>BOSS BOSSING Unisex Cotton T-Shirt - Comfortable & Stylish Casual Wear</Typography>
			<div className='tw-flex tw-justify-end tw-ms-auto tw-gap-5'>
				<Typography className='tw-text-2xl tw-text-red-500'>₱168.00</Typography>
				<div className='tw-flex tw-items-center tw-gap-5'>
					<Button icon={<FaPlus />} />
					<p className='tw-text-lg'>1</p>
					<Button icon={<FaMinus />} />
				</div>
			</div>
		</div>
	);
};

export default CartCard;
