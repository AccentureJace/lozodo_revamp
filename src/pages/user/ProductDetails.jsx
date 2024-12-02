import React from 'react'
import { useParams } from 'react-router-dom';
import { Col, Row, Card, Button, Divider } from 'antd';
import PRODUCT_IMAGE from '../../assets/images/product_1.webp'
import { FaPlus, FaMinus  } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { GiShoppingBag, GiShieldDisabled} from "react-icons/gi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { TbTruckReturn } from "react-icons/tb";


const ProductDetails = () => {
    const {id} = useParams();
  return (
    <div className='tw-py-10 tw-px-10'>
        <Row>
            <Col span={16}>
                <Card>
                <Row>
                    <Col span={14}>
                        <img
                            alt="product"
                            src={PRODUCT_IMAGE}
                            className=" tw-w-100 tw-object-fill tw-p-5"
                        />
                    </Col>
                    <Col span={10} className='tw-py-5 tw-px-3'>
                            <p className='tw-text-md tw-font-bold'>BOSS BOSSING Unisex Cotton T-Shirt - Comfortable & Stylish Casual Wear</p>
                            <p>81.k Sold</p>
                            <p className='tw-pt-5'>Category: <span>Children Toys</span></p>
                            <p className='tw-text-4xl tw-text-red-500'>₱168</p>
                            <div className='tw-pt-10 tw-flex tw-gap-3'>
                                <p className='tw-text-md tw-pt-1'>Quantity</p>
                                <Button icon={<FaPlus />} />
                                <p className='tw-text-lg'>1</p>
                                <Button icon={<FaMinus  />} />
                            </div>
                        <div className='tw-pt-10 tw-flex tw-gap-3 '>
                            <div className='tw-bg-blue-500 tw-px-5 tw-py-2 tw-flex tw-gap-2'>
                            <GiShoppingBag  className='tw-text-white tw-text-xl'/>
                            <p className='tw-text-white'>Buy Now</p>
                            </div>
                            <div className='tw-bg-blue-600 tw-px-5 tw-py-2 tw-flex tw-gap-2'>
                                <ImCart className='tw-text-white tw-text-xl'/>
                                <p className='tw-text-white'>Add to Cart</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                </Card>   
            </Col>
            <Col span={8}>
                  <Card className='tw-mx-1 tw-px-5 tw-py-10'>
                        <p className='tw-text-xl tw-font-bold'>Product Details</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem totam libero error facere officia vel quod voluptate, nostrum, culpa nam eius quas aliquid nisi ex veniam aperiam aut optio magni iste quo quam. Laboriosam eveniet molestiae in porro minus pariatur rerum. Voluptates aperiam et fugiat, pariatur sequi sunt iste?</p>
                    <Divider />
                    <p className='tw-text-lg tw-font-bold'>Return & Warranty</p>
                    <div className='tw-flex tw-gap-2'>
                        <CgArrowsExchangeAlt  className='tw-text-xl'/>
                        <p>Change of mind returns</p>
                    </div>
                    <div className='tw-flex tw-gap-2'>
                        <TbTruckReturn  className='tw-text-xl'/>
                        <p>7 Days Free Returns</p>
                    </div>
                    <div className='tw-flex tw-gap-2'>
                        <GiShieldDisabled className='tw-text-xl'/>     
                    <p>Warranty not available</p>
                    </div>
                  </Card>
            </Col>
        </Row>
    </div>
  )
}




export default ProductDetails
