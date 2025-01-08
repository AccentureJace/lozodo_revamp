import { Col, Row, Spin } from 'antd';
import { useNavigate } from 'react-router';
import { ProductCard, ProductBanner, Categories } from '../../components';
import { useProductHooks, useCategoryHooks } from '../../hooks';

const Dashboard = () => {
	const { products, isLoading } = useProductHooks();
	const { selectedCategory } = useCategoryHooks();
	let navigate = useNavigate();

	const filtered_products = selectedCategory ? products.filter((product) => product.category_id === selectedCategory) : products;

	return (
		<div>
			{isLoading ? (
				<div className='tw-flex tw-justify-center tw-items-center tw-py-10'>
					<Spin size='large' />
				</div>
			) : (
				<div className='tw-px-5 tw-py-5'>
					<ProductBanner />
					<Categories />
					<Row gutter={16}>
						{filtered_products.map((product) => (
							<Col key={product.product_id} className='gutter-row' span={4} onClick={() => navigate(`/product/${product.product_id}`)}>
								<ProductCard key={product.product_id} product={product} />
							</Col>
						))}
					</Row>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
