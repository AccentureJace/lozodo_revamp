import React from 'react'
import { Row, Col, Divider } from 'antd'
import lozodo_logo from '../../assets/images/lozodo_logo.png'
import { FaHome, FaGlobeAfrica, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaPinterest   } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const StoreFooter = () => {
  return (
    <div className='tw-bg-blue-600 tw-pt-3'>
    	<Row className=' tw-py-3 tw-px-5' >
					<Col className="gutter-row" span={8}>
						<div>
							<img src={lozodo_logo} className='tw-h-10 tw-mb-3' alt="Logo" />
								<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1'>
										<FaHome className='tw-text-lg'/>
										<div className='tw-font-mono tw-text-base tw-font-bold tw-text-white'>Cybergate Tower 1, Mandaluyong City</div>
										<p className='tw-font-normal tw-text-sm'> </p>
								</div>

								<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1'>
									<IoMdCall className='tw-text-lg'/>
									<div className='tw-font-mono tw-text-base tw-font-bold tw-text-white'>(+63) 997-162-0530</div>
								</div>

								<div className='tw-flex tw-gap-2 tw-text-white tw-mb-1'>
									<FaGlobeAfrica className='tw-text-lg'/>
									<div className='tw-font-mono tw-text-base tw-font-bold tw-text-white'>Lozodosupport@gmail.com</div>
								</div>
						</div>
					</Col>
					<Col className="gutter-row" span={8}>
						<div>
							<p className='tw-font-mono tw-text-xl tw-font-bold tw-text-white'>Accepted Payment</p>
						
						</div>
					</Col>
					<Col className="gutter-row" span={8}>
						<div className='tw-font-mono tw-text-xl tw-font-bold tw-text-white'>Connect us</div>
						<div className='tw-flex'>
							<FaFacebookSquare  className='tw-text-3xl tw-text-white'/>
							<FaTwitterSquare   className='tw-text-3xl tw-text-white'/>
							<FaInstagram   className='tw-text-3xl tw-text-white'/>
							<FaPinterest   className='tw-text-3xl tw-text-white'/>
						</div>	
					</Col>
			</Row>
			
			<div className='tw-pb-5'>
			<Divider style={{background:'white'}}/>
					<p className='tw-text-white tw-text-center tw-font-normal'>© Copyright, Lozodo, Alright reserve @2024</p>
				
			</div>
    </div>
  )
}

export default StoreFooter
