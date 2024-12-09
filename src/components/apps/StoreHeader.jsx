import { Col, Row, Input, Badge, Dropdown, Space, Button, Typography } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { lozodo_logo } from '../../assets/images';
import { PATH_CART, PATH_LOGIN, PATH_REGISTER, PRODUCT_DASHBOARD } from '../../constants/routes';
import { useAuthenticationStore, useCartStore } from '../../store';
import { useEffect } from 'react';
import { JWTStorage } from '../../utils';
import { authService, userService } from '../../services';
import { useCartHooks } from '../../hooks';

const StoreHeader = () => {
	const { itemsInCart } = useCartStore((state) => state);
	const { authenticatedUser, setAuthenticatedUser } = useAuthenticationStore((state) => state);
	useCartHooks();

	useEffect(() => {
		if (JWTStorage.getToken()) {
			const loadUser = async () => {
				const user = await userService.getUserByUUID();
				setAuthenticatedUser(user.data);
			};

			loadUser();
		}
	}, []);

	const handleLogout = async () => {
		await authService.logout();
	};

	const items = !authenticatedUser
		? [
				{
					label: (
						<Link to={PATH_LOGIN}>
							<Button type='primary' className='tw-flex tw-w-full tw-justify-start'>
								<FiUser className='tw-text-sm tw-text-white' />
								Sign-in
							</Button>
						</Link>
					),
					key: '0',
				},
				{
					label: (
						<Link to={PATH_REGISTER}>
							<Button color='default' variant='text' className='tw-flex tw-w-full tw-justify-start'>
								<FaEdit className='tw-text-sm tw-text-black' /> Sign-up{' '}
							</Button>
						</Link>
					),
					key: '1',
				},
		  ]
		: [
				{
					label: (
						<Button type='primary' className='tw-flex tw-w-full tw-justify-start'>
							<FiUser className='tw-text-sm tw-text-white' />
							Manage Account
						</Button>
					),
					key: '0',
				},
				{
					label: (
						<Button color='default' variant='text' className='tw-flex tw-w-full tw-justify-start'>
							<FaEdit className='tw-text-sm tw-text-black' /> Change Password
						</Button>
					),
					key: '1',
				},
				{
					label: (
						<Button color='default' variant='text' className='tw-flex tw-w-full tw-justify-start' onClick={handleLogout}>
							<FaEdit className='tw-text-sm tw-text-black' /> Sign-out
						</Button>
					),
					key: '2',
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

				<Col className='gutter-row' span={authenticatedUser ? 16 : 17}>
					<div className='tw-flex tw-justify-center tw-items-center h-full'>
						<Input size='large' className='tw-w-full' placeholder='Search products' />
					</div>
				</Col>

				<Col className='gutter-row tw-mt-2' span={authenticatedUser ? 3 : 2}>
					<div className='tw-flex tw-justify-end tw-gap-4 '>
						<Dropdown
							menu={{
								items,
							}}
							trigger={['click']}
						>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									<p className='tw-text-white tw-text-nowrap'>{authenticatedUser && authenticatedUser.username}</p>
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
