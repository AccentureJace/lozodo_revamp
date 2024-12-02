import { Col, Row, Card, Button, Divider } from 'antd';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { GiShoppingBag, GiShieldDisabled } from 'react-icons/gi';
import { ImCart } from 'react-icons/im';
import { TbTruckReturn } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { product_1 as PRODUCT_IMAGE } from '../../assets/images';

const ProductDetails = () => {
	const { id } = useParams();
	return (
		<div className='tw-py-10 tw-px-10'>
			<Row>
				<Col span={16}>
					<Card className='tw-py-14'>
						<Row>
							<Col span={9}>
								<img
									alt='product'
									src={PRODUCT_IMAGE}
									className=' tw-w-96 tw-object-fill tw-p-5'
								/>
							</Col>
							<Col span={10} className='tw-py-5 tw-px-3'>
								<p className='tw-text-2xl tw-font-bold'>
									BOSS BOSSING Unisex Cotton T-Shirt -
									Comfortable & Stylish Casual Wear
								</p>
								<p>81.k Sold</p>
								<p className='tw-pt-5'>
									Category: <span>Children Toys</span>
								</p>
								<p className='tw-text-4xl tw-text-red-500'>
									₱168
								</p>
								<div className='tw-pt-10 tw-flex tw-gap-3'>
									<p className='tw-text-md tw-pt-1'>
										Quantity
									</p>
									<Button icon={<FaPlus />} />
									<p className='tw-text-lg'>1</p>
									<Button icon={<FaMinus />} />
								</div>
								<div className='tw-pt-10 tw-flex tw-gap-3 '>
									<Button className='tw-bg-red-500 tw-px-5 tw-py-5 tw-flex tw-gap-2'>
										<GiShoppingBag className='tw-text-white tw-text-xl' />
										<p className='tw-text-white'>Buy Now</p>
									</Button>
									<Button className='tw-bg-blue-500 tw-px-5 tw-py-5 tw-flex tw-gap-2'>
										<ImCart className='tw-text-white tw-text-xl' />
										<p className='tw-text-white'>
											Add to Cart
										</p>
									</Button>
								</div>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col span={8}>
					<Card className='tw-mx-1 tw-px-5 tw-py-24'>
						<p className='tw-text-xl tw-font-bold'>
							Product Details
						</p>
						<p className='tw-pl-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ab voluptatem totam libero error facere
							officia vel quod voluptate, nostrum, culpa nam eius
							quas aliquid nisi ex veniam aperiam aut optio magni
							iste quo quam. Laboriosam eveniet molestiae in porro
							minus pariatur rerum. Voluptates aperiam et fugiat,
							pariatur sequi sunt iste?
						</p>
						<Divider />
						<p className='tw-text-lg tw-font-bold'>
							Return & Warranty
						</p>
						<div className='tw-flex tw-gap-2 tw-pl-2'>
							<CgArrowsExchangeAlt className='tw-text-xl' />
							<p>Change of mind returns</p>
						</div>
						<div className='tw-flex tw-gap-2 tw-pl-2'>
							<TbTruckReturn className='tw-text-xl' />
							<p>7 Days Free Returns</p>
						</div>
						<div className='tw-flex tw-gap-2 tw-pl-2'>
							<GiShieldDisabled className='tw-text-xl' />
							<p>Warranty not available</p>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ProductDetails;
