import { Col, Row, Input, Badge, Dropdown, Space, Button } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { lozodo_logo } from '../../assets/images';

const StoreHeader = () => {
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
					<div>
						<img
							src={lozodo_logo}
							className='tw-h-10 tw-px-4'
							alt='Logo'
						/>
					</div>
				</Col>

				<Col className='gutter-row' span={17}>
					<div className='tw-flex tw-justify-center tw-items-center h-full'>
						<Input
							size='large'
							className='tw-w-full'
							placeholder='Search products'
						/>
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
						<Badge count={0} showZero>
							<AiOutlineShoppingCart className='tw-text-3xl tw-text-white' />
						</Badge>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default StoreHeader;
