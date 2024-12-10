import { Table, Tag } from 'antd';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const AdminUserTable = () => {
	const columns = [
		{
			title: 'First Name',
			dataIndex: 'first_name',
			showSorterTooltip: {
				target: 'full-header',
			},
			filters: [
				{
					text: 'Joe',
					value: 'Joe',
				},
				{
					text: 'Jim',
					value: 'Jim',
				},
			],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Last Name',
			dataIndex: 'last_name',
		},
		{
			title: 'Contact Number',
			dataIndex: 'contact_number',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
		{
			title: 'Role',
			dataIndex: 'role',
			render: () => (
				<>
					{'Admin' === 'SuperAdmin' ? (
						<Tag color='red'>Super Admin</Tag>
					) : 'Admin' === 'Admin' ? (
						<Tag color='orange'>Admin</Tag>
					) : (
						<Tag color='green'>User</Tag>
					)}
				</>
			),
		},
		{
			title: 'Actions',
			dataIndex: '',
			key: 'x',
			render: () => (
				<>
					<button>
						<FaEdit />
					</button>{' '}
					&emsp;{' '}
					<button>
						<FaTrashAlt />
					</button>
				</>
			),
		},
	];
	const data = [
		{
			key: '1',
			first_name: 'John',
			last_name: 'Brown',
			contact_number: '091234567890',
			address: 'New York No. 1 Lake Park',
			role: 'Admin',
		},
		{
			key: '2',
			first_name: 'John',
			last_name: 'Brown',
			contact_number: '091234567890',
			address: 'New York No. 1 Lake Park',
			role: 'Admin',
		},
		{
			key: '3',
			first_name: 'John',
			last_name: 'Brown',
			contact_number: '091234567890',
			address: 'New York No. 1 Lake Park',
			role: 'Admin',
		},
		{
			key: '4',
			first_name: 'John',
			last_name: 'Brown',
			contact_number: '091234567890',
			address: 'New York No. 1 Lake Park',
			role: 'Admin',
		},
	];
	const onChange = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	};

	return (
		<Table
			columns={columns}
			dataSource={data}
			onChange={onChange}
			showSorterTooltip={{
				target: 'sorter-icon',
			}}
		/>
	);
};

export default AdminUserTable;
