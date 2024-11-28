import React from 'react'
import { Carousel } from 'antd';
import banner_1 from '../../assets/images/banners/banner_1.png';




const ProductBanner = () => {
  return (
    <div>
       <Carousel autoplay>
            <div>
                <img style={{maxWidth:'100%', objectFit:"cover"}} alt="example" src={banner_1} />
            </div>
        </Carousel>
    </div>
  )
}



export default ProductBanner
