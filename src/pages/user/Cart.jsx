import React from 'react';
import { Checkbox, Typography } from 'antd';
import { AiFillDelete } from 'react-icons/ai';
import PRODUCT_IMAGE from '../../assets/images/product_1.webp';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Button } from 'antd';
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
				<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
					<Checkbox />
					<img src={PRODUCT_IMAGE} className='tw-flex tw-h-20 tw-border-slate-400' />
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
				<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
					<Checkbox />
					<img src={PRODUCT_IMAGE} className='tw-flex tw-h-20 tw-border-slate-400' />
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
				<div className='tw-gap-x-2 tw-flex tw-w-full tw-items-center tw-px-4 tw-py-2 tw-border tw-border-slate-400 tw-bg-white'>
					<Checkbox />
					<img src={PRODUCT_IMAGE} className='tw-flex tw-h-20 tw-border-slate-400' />
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
			</div>
			<div className='tw-border tw-border-slate-400 tw-flex tw-flex-col tw-w-1/3 tw-h-full tw-bg-white tw-py-6 tw-px-4 tw-gap-3'>
				<Typography className='tw-text-xl'>Order Summary</Typography>
				<div className='tw-flex tw-flex-col tw-px-2 tw-gap-3'>
					<div className='tw-flex'>
						<Typography className='tw-text-lg'>Subtotal (2 Items)</Typography>
						<div className='tw-flex tw-ms-auto tw-w-16 tw-justify-end'>
							<Typography className='tw-text-lg'>₱17.72</Typography>
						</div>
					</div>
					<div className='tw-flex'>
						<Typography className='tw-text-lg'>Shipping Fee</Typography>
						<div className='tw-flex tw-ms-auto tw-w-16 tw-justify-end'>
							<Typography className='tw-text-lg'>₱38.00</Typography>
						</div>
					</div>
					<div className='tw-flex'>
						<Typography className='tw-text-lg'>Discount</Typography>
						<div className='tw-flex tw-ms-auto tw-w-16 tw-justify-end'>
							<Typography className='tw-text-lg'>₱0.00</Typography>
						</div>
					</div>
				</div>
				<hr />
				<div className='tw-flex tw-flex-col'>
					<div className='tw-flex tw-pe-2'>
						<Typography className='tw-text-lg'>Total</Typography>
						<div className='tw-flex tw-ms-auto tw-w-16 tw-justify-end'>
							<Typography className='tw-text-lg tw-text-red-500'>₱86.24</Typography>
						</div>
					</div>
					<div className='tw-flex tw-justify-end tw-ms-auto'>
						<Typography className='tw-text-sm tw-text-slate-600'>VAT included, where applicable</Typography>
					</div>
				</div>
				<Button type='primary'>Buy Now</Button>
			</div>
		</div>
	);
};

export default Cart;
