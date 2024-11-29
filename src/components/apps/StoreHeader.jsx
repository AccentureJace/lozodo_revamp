import React from 'react'
import { Col, Row, Input } from 'antd';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import lozodo_logo from "../../assets/images/lozodo_logo.png";

const StoreHeader = () => {
  return (
    <div className='flex'>
			<Row className='tw-bg-blue-600 tw-py-3 tw-px-5'>
				<Col className="gutter-row" span={4}>
					<div>
						<img src={lozodo_logo} className='tw-h-10' alt="Logo" />
					</div>
				</Col>

				<Col className="gutter-row" span={17}>
						<div className='tw-flex tw-justify-center tw-items-center h-full'>
							<Input size='large' className='tw-w-full' />
						</div>
				</Col>

				<Col className="gutter-row" span={2}>
						<div className='tw-flex tw-justify-end tw-gap-3 '>
							<FiUser className='tw-text-3xl tw-text-white' />
							<AiOutlineShoppingCart className='tw-text-3xl tw-text-white' />
						</div>
				</Col>
			</Row>
		</div>
  )
}

export default StoreHeader
