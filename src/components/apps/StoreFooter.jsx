import React from 'react'
import { Row, Col } from 'antd'
import lozodo_logo from '../../assets/images/lozodo_logo.png'
import { FaHome, FaGlobeAfrica } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const StoreFooter = () => {
  return (
    <div className='tw-bg-blue-600'>
    	<Row gutter={16} className=' tw-py-3 tw-px-5' >
					<Col className="gutter-row" span={8}>
						<div>
							<img src={lozodo_logo} className='tw-h-10 tw-mb-3' alt="Logo" />
								<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1'>
										<FaHome className='tw-text-lg'/>
										<p className='tw-font-normal tw-text-sm'> Cybergate Tower 1, Mandaluyong City</p>
								</div>

								<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1'>
									<IoMdCall className='tw-text-lg'/>
									<p className='tw-font-normal tw-text-sm'>(+63) 997-162-0530</p>
								</div>

								<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1'>
									<FaGlobeAfrica className='tw-text-lg'/>
									<p className='tw-font-normal tw-text-sm'>Lozodosupport@gmail.com</p>
								</div>
						</div>
					</Col>
					<Col className="gutter-row" span={8}>
						<div>col-6</div>
					</Col>
					<Col className="gutter-row" span={8}>
						<div >col-6</div>
					</Col>
			</Row>
			<div className='tw-pb-5'>
					<p className='tw-text-white tw-text-center tw-font-normal'>© Copyright, Lozodo, Alright reserve @2024</p>
			</div>
    </div>
  )
}

export default StoreFooter
