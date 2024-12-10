import React from 'react';
import { Button, Card, Col, Flex, Row, Divider } from 'antd';
import { FaCircleCheck, FaRegCircle } from 'react-icons/fa6';
import { cash_payment, gcash_payment } from '../../assets/images';

const Checkout = () => {
    return (
        <div className='tw-px-5 tw-py-20'>
            <Row gutter={16}>
                <Col
                    xs={{
                        span: 24,
                    }}
                    md={{
                        span: 14,
                    }}
                    lg={{
                        span: 16,
                    }}
                >
                    <Card
                        title='Shipping Address'
                        className='tw-mb-5 tw-border tw-border-gray-300'
                    >
                        <Flex vertical gap={5} className='tw-p-6'>
                            <p>Felix Angelo Siena</p>
                            <p>09971620530</p>
                            <p>
                                blk 14 lot 44, Minuyan li, San Jose Del Monte,
                                Bulacan
                            </p>
                        </Flex>
                    </Card>

                    <Card
                        title='Package 1 of 1'
                        className='tw-border tw-border-gray-300'
                    >
                        <Flex vertical className='tw-p-6'>
                            <Flex gap={10} wrap>
                                <Button
                                    icon={<FaCircleCheck />}
                                    color='primary'
                                    variant='outlined'
                                    className='tw-py-7'
                                >
                                    <Flex
                                        vertical
                                        justify='flex-start'
                                        align='flex-start'
                                        className='tw-ml-3'
                                    >
                                        <p>38.00</p>
                                        <p>Standard delivery</p>
                                    </Flex>
                                </Button>
                                <Button
                                    icon={<FaRegCircle />}
                                    className='tw-py-7 tw-border-blue-400'
                                >
                                    <Flex
                                        vertical
                                        justify='flex-start'
                                        align='flex-start'
                                        className='tw-ml-3'
                                    >
                                        <p>57.00</p>
                                        <p>Priority delivery</p>
                                    </Flex>
                                </Button>
                            </Flex>
                            <Flex gap={10} className='tw-my-8'>
                                <img src={gcash_payment} alt='' />
                                <div>
                                    <p>
                                        BOSS BOSSING Unisex Cotton T-Shirt -
                                        Comfortable & Stylish Casual Wear
                                    </p>
                                    <p className='tw-text-orange-500 tw-font-semibold tw-text-lg'>
                                        86.24
                                    </p>
                                </div>
                            </Flex>
                        </Flex>
                    </Card>
                </Col>
                <Col
                    xs={{
                        span: 24,
                    }}
                    md={{
                        span: 10,
                    }}
                    lg={{
                        span: 8,
                    }}
                >
                    <Card className='tw-p-6 tw-border tw-border-gray-300 tw-mt-5 md:tw-mt-0'>
                        <p className='tw-text-lg'>Select Payment Method</p>

                        <Flex
                            vertical
                            className='tw-mb-3 tw-p-3 tw-border tw-border-blue-500 tw-text-blue-500 tw-rounded tw-cursor-pointer'
                        >
                            <Flex justify='space-between'>
                                <Flex gap={10}>
                                    <img src={gcash_payment} alt='gcash logo' />

                                    <div className='tw-font-semibold'>
                                        <p>Gcash e-Wallet </p>
                                        <p className='tw-text-xs tw-text-gray-400'>
                                            Gcash e-Wallet
                                        </p>
                                    </div>
                                </Flex>
                                <FaCircleCheck className='tw-text-lg tw-mr-3' />
                            </Flex>
                        </Flex>
                        <Flex
                            vertical
                            className='tw-mb-3 tw-p-3 tw-border hover:tw-border-blue-500 hover:tw-text-blue-500 tw-rounded tw-cursor-pointer'
                        >
                            <Flex justify='space-between'>
                                <Flex gap={10}>
                                    <img src={cash_payment} alt='cash logo' />

                                    <div className='tw-font-semibold'>
                                        <p>Cash on Delivery</p>
                                        <p className='tw-text-xs tw-text-gray-400'>
                                            Pay when you receive
                                        </p>
                                    </div>
                                </Flex>
                                <FaRegCircle className='tw-text-lg tw-mr-3' />
                            </Flex>
                        </Flex>

                        <section>
                            <p className='tw-text-lg tw-mb-8'>Order Summary</p>
                            <>
                                <div className='tw-flex tw-justify-between tw-mb-3'>
                                    <p>Subtotal (1 Items)</p>
                                    <p>₱86.24</p>
                                </div>

                                <div className='tw-flex tw-justify-between'>
                                    <p>Shipping Fee</p>
                                    <p>₱38.00</p>
                                </div>

                                {/* <div className='tw-flex tw-justify-between'>
                                    <p>Discount</p>
                                    <p>0.00</p>
                                </div> */}
                            </>
                            <Divider className='tw-border tw-border-gray-300' />
                            <div className='tw-flex tw-justify-between tw-text-xl  tw-mb-5 tw-font-semibold'>
                                <p>SubTotal</p>
                                <p className='tw-text-orange-500 '>₱124.24</p>
                            </div>
                        </section>
                        <Button type='primary' block>
                            Buy Now
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Checkout;
