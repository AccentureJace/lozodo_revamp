import { Col, Row, Input, Badge, Dropdown, Space, Button, Typography } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	useCartHooks();

	useEffect(() => {
		if (JWTStorage.getToken()) {
			const loadUser = async () => {
				try {
					const user = await userService.getUserByUUID();
					if (user.data) {
						setAuthenticatedUser(user.data);
					}
				} catch (error) {
					toast.error('Error with fetching API');
				}
			};

			loadUser();
		}
	}, []);

	const handleLogout = async () => {
		await authService.logout();
		setAuthenticatedUser(null);
		navigate('/');
	};

	const items = authenticatedUser
		? [
				{
					label: (
						<Button className='tw-flex tw-w-full tw-justify-start'>
							<FiUser className='tw-text-sm' />
							Manage Account
						</Button>
					),
					key: '0',
				},
				{
					label: (
						<Button className='tw-flex tw-w-full tw-justify-start'>
							<FaEdit className='tw-text-sm ' /> Change Password
						</Button>
					),
					key: '1',
				},
				{
					label: (
						<Button className='tw-flex tw-w-full tw-justify-start' onClick={handleLogout}>
							<FaEdit className='tw-text-sm' /> Sign-out
						</Button>
					),
					key: '2',
				},
		  ]
		: [
				{
					label: (
						<Link to={PATH_LOGIN}>
							<Button className='tw-flex tw-w-full tw-justify-start'>
								<FiUser className='tw-text-sm ' />
								Sign-in
							</Button>
						</Link>
					),
					key: '0',
				},
				{
					label: (
						<Link to={PATH_REGISTER}>
							<Button variant='text' className='tw-flex tw-w-full tw-justify-start'>
								<FaEdit className='tw-text-sm ' /> Sign-up{' '}
							</Button>
						</Link>
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
									<p className='tw-text-white tw-text-nowrap tw-font-semibold tw-text-lg'>{authenticatedUser && authenticatedUser.username}</p>
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
