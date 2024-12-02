import React from 'react'
import { Row, Col, Carousel } from 'antd';
import banner_1 from '../../assets/images/banners/banner_1.png';
import sideBanner from '../../assets/images/side_banner.png';




const ProductBanner = () => {
  return (
    <div className='tw-pb-5'>
        <Row>
            <Col span={24}>
            <Carousel autoplay>
                <div>
                    <img style={{maxWidth:'100%', objectFit:"cover"}} alt="example" src={banner_1} />
                </div>
            </Carousel>
            </Col>
       
        </Row>
      
    </div>
  )
}



export default ProductBanner
