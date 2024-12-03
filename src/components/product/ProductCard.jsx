import { Card } from 'antd';
import { PESO_SIGN } from '../../constants/common';
import { product_1 as PRODUCT_IMAGE } from '../../assets/images';

const ProductCard = ({ product }) => {
	return (
		<div>
			<Card
				hoverable
				className='tw-mb-3'
				cover={
					<div className='tw-py-5'>
						<img
							alt='product'
							src={PRODUCT_IMAGE}
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
						{product.title}
					</p>
					<p className='tw-text-xs tw-pe-3 tw-font-mono'>16k sold</p>
					<p className='tw-text-red-500 tw-text-xl'>
						{PESO_SIGN} &nbsp;{product.price.toFixed(2)}
					</p>
				</div>
			</Card>
		</div>
	);
};

export default ProductCard;
