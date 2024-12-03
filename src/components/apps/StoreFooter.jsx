import { Row, Col, Divider } from 'antd';
import {
	FaHome,
	FaGlobeAfrica,
	FaFacebookSquare,
	FaTwitterSquare,
	FaInstagram,
	FaPinterest,
} from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import {
	LOZODO_ADDRESS,
	LOZODO_EMAIL,
	LOZODO_NUMBER,
} from '../../constants/common';
import { lozodo_logo } from '../../assets/images';

const StoreFooter = () => {
	return (
		<div className='tw-bg-blue-600 tw-pt-3'>
			<Row className=' tw-py-3 tw-px-5'>
				<Col className='gutter-row' span={8}>
					<div>
						<img
							src={lozodo_logo}
							className='tw-h-10 tw-mb-3'
							alt='Logo'
						/>
						<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1 tw-px-4'>
							<FaHome className='tw-text-lg' />
							<div className='tw-font-mono tw-text-base tw-font-bold tw-text-white'>
								{LOZODO_ADDRESS}
							</div>
							<p className='tw-font-normal tw-text-sm'> </p>
						</div>

						<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1 tw-px-4'>
							<IoMdCall className='tw-text-lg' />
							<div className='tw-font-mono tw-text-base tw-font-bold tw-text-white'>
								{LOZODO_NUMBER}
							</div>
						</div>

						<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1 tw-px-4'>
							<FaGlobeAfrica className='tw-text-lg' />
							<div className='tw-font-mono tw-text-base tw-font-bold tw-text-white'>
								{LOZODO_EMAIL}
							</div>
						</div>
					</div>
				</Col>
				<Col className='gutter-row' span={8}>
					<div>
						<p className='tw-font-mono tw-text-xl tw-font-bold tw-text-white'>
							Accepted Payment
						</p>
					</div>
				</Col>
				<Col className='gutter-row' span={8}>
					<div className='tw-font-mono tw-text-xl tw-font-bold tw-text-white'>
						Connect us
					</div>
					<div className='tw-flex tw-px-4'>
						<FaFacebookSquare className='tw-text-3xl tw-text-white' />
						&emsp;
						<FaTwitterSquare className='tw-text-3xl tw-text-white' />
						&emsp;
						<FaInstagram className='tw-text-3xl tw-text-white' />
						&emsp;
						<FaPinterest className='tw-text-3xl tw-text-white' />
					</div>
				</Col>
			</Row>

			<div className='tw-pb-5'>
				<Divider style={{ background: 'white' }} />
				<p className='tw-text-white tw-text-center tw-font-normal'>
					© 2024 Lozodo. All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default StoreFooter;
