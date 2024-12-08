import { Col, Row, Input, Badge, Dropdown, Space, Button } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { lozodo_logo } from '../../assets/images';
import { PATH_CART, PRODUCT_DASHBOARD } from '../../constants/routes';
import { useAuthenticationStore, useCartStore } from '../../store';
import { useCartHooks } from '../../hooks';
import { useEffect } from 'react';
import { JWTStorage } from '../../utils';
import { authService } from '../../services';

const StoreHeader = () => {
	const { itemsInCart } = useCartStore((state) => state);
	const { setAuthenticatedUser } = useAuthenticationStore((state) => state);
	useCartHooks();

	useEffect(() => {
		if (JWTStorage.getToken()) {
			const user = authService.getUserByUUID();
			setAuthenticatedUser(user);
		}
	}, []);

	const items = [
		{
			label: (
				<Button type='primary'>
					{' '}
					<FiUser className='tw-text-sm tw-text-white' />
					Sign-in
				</Button>
			),
			key: '0',
		},
		{
			label: (
				<Button color='default' variant='text'>
					{' '}
					<FaEdit className='tw-text-sm tw-text-black' /> Sign-up{' '}
				</Button>
			),
			key: '1',
		},
	];

	return (
		<div className='flex'>
			<Row className='tw-bg-blue-600 tw-py-3'>
				<Col className='gutter-row' span={4}>
					<Link to={PRODUCT_DASHBOARD}>
						<img src={lozodo_logo} className='tw-h-10 tw-px-4' alt='Logo' />
					</Link>
				</Col>

				<Col className='gutter-row' span={17}>
					<div className='tw-flex tw-justify-center tw-items-center h-full'>
						<Input size='large' className='tw-w-full' placeholder='Search products' />
					</div>
				</Col>

				<Col className='gutter-row tw-mt-2' span={2}>
					<div className='tw-flex tw-justify-end tw-gap-4 '>
						<Dropdown
							menu={{
								items,
							}}
							trigger={['click']}
						>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									<FiUser className='tw-text-3xl tw-text-white' />
								</Space>
							</a>
						</Dropdown>
						<Link to={PATH_CART}>
							<Badge count={itemsInCart.length} showZero>
								<AiOutlineShoppingCart className='tw-text-3xl tw-text-white' />
							</Badge>
						</Link>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default StoreHeader;
