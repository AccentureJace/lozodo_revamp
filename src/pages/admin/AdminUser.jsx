import { Layout } from 'antd';
import {
	AdminHeader,
	AdminSidebar,
	AdminUserTable,
} from '../../components/admin';

const { Content } = Layout;

const AdminUser = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<AdminSidebar />
			<Layout>
				<AdminHeader />
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: '#fff',
					}}
				>
					<h2 className='tw-mb-6 tw-text-2xl tw-font-semibold'>
						Manage Users
					</h2>
					<div className='tw-space-y-6'>
						<AdminUserTable />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default AdminUser;
