import { Card } from 'antd';

const ProductCard = ({ product }) => {
	return (
		<div>
			<Card
				hoverable
				className='tw-mb-3'
				cover={
					<div className='tw-py-5'>
						<img
							alt={product.product_name}
							src={product.product_img}
							className='tw-h-32 tw-w-96 tw-object-contain'
						/>
					</div>
				}
			>
				<div className='tw-px-3 tw-py-3'>
					<p
						className='tw-font-semibold  tw-text-md'
						style={{
							display: '-webkit-box',
							WebkitLineClamp: 1,
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}
					>
						{product.product_name}
					</p>
					<p className='tw-text-xs tw-pe-3 tw-font-mono'>
						{product.sold} sold
					</p>
					<p className='tw-text-red-500 tw-text-xl'>
						{product.price}
					</p>
				</div>
			</Card>
		</div>
	);
};

export default ProductCard;
