'use client';

import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    Dashboard,
    People,
    Inventory,
    Category,
    BarChart,
    ChevronLeft,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const menuItems = [
    { icon: Dashboard, label: 'Dashboard', key: '/', href: '/' },
    { icon: People, label: 'Users', key: '/users', href: '/' },
    { icon: Inventory, label: 'Products', key: '/products', href: '/' },
    {
        icon: Category,
        label: 'Categories',
        key: '/categories',
        href: '/',
    },
    {
        icon: BarChart,
        label: 'Transactions',
        key: '/transactions',
        href: '/',
    },
];

const AdminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme='light'
            className='tw-bg-blue-600 border-r'
            trigger={null}
        >
            <div className='tw-flex tw-h-16 tw-items-center tw-justify-center tw-border-b'>
                <h1
                    className={`text-2xl font-bold ${
                        collapsed ? 'hidden' : ''
                    }`}
                >
                    LOZODO
                </h1>
            </div>
            <Menu mode='inline' className='tw-bg-blue-600 tw-h-full'>
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} icon={<item.icon />}>
                        <Link href={item.href}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            <div
                className='tw-absolute tw-bottom-4 tw-right-4 tw-cursor-pointer'
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <MenuIcon /> : <ChevronLeft />}
            </div>
        </Sider>
    );
};

export default AdminSidebar;
