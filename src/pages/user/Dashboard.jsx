import React from 'react'
import { StoreFooter, StoreHeader, ProductCard, ProductBanner } from '../../components'
import { Col, Row } from 'antd';
import  useFetchProduct from '../../hooks/useFetchProduct';



const Dashboard = () => {
const  { products, isLoading } = useFetchProduct();

  return (
    <div>
    
         <StoreHeader />
         <ProductBanner/>
         {isLoading ?
            <p>Loading ....</p>
          :    
          <div className='tw-px-5 tw-py-5'>
              <Row gutter={16}>
                {
                    products.map(product => (
                        <Col className="gutter-row" span={4}>
                            <ProductCard key={product.id} product={product}/>
                        </Col>
                    ))
                }
                </Row>
            </div>
            }
         <StoreFooter />
    </div>  
  )
}

export default Dashboard
 