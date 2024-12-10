import { useState } from 'react';
import { Layout, Menu, Button, Flex } from 'antd';
import {
	Dashboard,
	People,
	Inventory,
	Category,
	BarChart,
	ChevronLeft,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import lozodo_logo from '../../assets/images/lozodo_logo.png';

const { Sider } = Layout;

const items = [
	{
		key: '/admin',
		icon: <Dashboard />,
		label: 'Dashboard',
	},
	{
		key: '/admin/users',
		icon: <People />,
		label: 'Users',
	},
	{
		key: '/admin/products',
		icon: <Inventory />,
		label: 'Products',
	},
	{
		key: '/admin/categories',
		icon: <Category />,
		label: 'Categories',
	},
	{
		key: '/admin/transactions',
		icon: <BarChart />,
		label: 'Transactions',
	},
];

const AdminSidebar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
			theme='light'
			className='tw-bg-blue-600 border-r'
			trigger={null}
		>
			<Flex className='tw-flex tw-h-16 tw-items-center tw-justify-center tw-border-b'>
				<img src={lozodo_logo} className='tw-h-10' alt='Logo' />
			</Flex>
			<Flex justify='end' className='tw-mt-2 tw-mr-2'>
				<Button
					type='primary'
					onClick={toggleCollapsed}
					className='tw-flex tw-mb-2 tw-justify-end'
				>
					{collapsed ? <MenuIcon /> : <ChevronLeft />}
				</Button>
			</Flex>
			<Menu
				defaultSelectedKeys={['/admin']}
				mode='inline'
				inlineCollapsed={collapsed}
				items={items}
				theme='dark'
				className='tw-bg-blue-600 tw-h-full'
			/>
		</Sider>
	);
};

export default AdminSidebar;
