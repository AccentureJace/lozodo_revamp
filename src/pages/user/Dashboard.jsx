import { Col, Row, Spin } from 'antd';
import { useNavigate } from 'react-router';
import { ProductCard, ProductBanner } from '../../components';
import useFetchProduct from '../../hooks/useFetchProduct';

const Dashboard = () => {
	const { products, isLoading } = useFetchProduct();
	let navigate = useNavigate();

	return (
		<div>
			{isLoading ? (
				<div className='tw-flex tw-justify-center tw-items-center tw-py-10'>
					<Spin size='large' />
				</div>
			) : (
				<div className='tw-px-5 tw-py-5'>
					<ProductBanner />
					<Row gutter={16}>
						{products.map((product) => (
							<Col
								key={product.id}
								className='gutter-row'
								span={4}
								onClick={() =>
									navigate(`/product/${product.id}`)
								}
							>
								<ProductCard
									key={product.id}
									product={product}
								/>
							</Col>
						))}
					</Row>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
