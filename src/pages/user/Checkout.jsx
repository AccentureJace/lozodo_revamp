import { Button, Card, Col, Flex, Row, Divider } from 'antd';
import React from 'react';
import { FaCircleCheck, FaRegCircleCheck } from 'react-icons/fa6';
import { cash_payment, gcash_payment } from '../../assets/images';

const Checkout = () => {
    return (
        <div className='tw-px-5 tw-py-20'>
            <Row gutter={16}>
                <Col span={16}>
                    <Card
                        title='Shipping Address'
                        extra={
                            <Button color='default' variant='link'>
                                Edit
                            </Button>
                        }
                        className='tw-mb-5'
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

                    <Card title='Package 1 of 1'>
                        <Flex vertical gap={5} className='tw-p-6'>
                            <Flex gap={10}>
                                <Button
                                    icon={
                                        <FaCircleCheck className='tw-text-xl' />
                                    }
                                    color='primary'
                                    variant='outlined'
                                    className='tw-px-5 tw-py-7'
                                >
                                    <Flex
                                        vertical
                                        justify='flex-start'
                                        align='flex-start'
                                        className='tw-ml-5'
                                    >
                                        <p>38.00</p>
                                        <p>Priority delivery</p>
                                    </Flex>
                                </Button>
                                <Button
                                    icon={
                                        <FaRegCircleCheck className='tw-text-xl' />
                                    }
                                    className='tw-px-5 tw-py-7 tw-border-blue-400'
                                >
                                    <Flex
                                        vertical
                                        justify='flex-start'
                                        align='flex-start'
                                        className='tw-ml-5'
                                    >
                                        <p>57.00</p>
                                        <p>Priority delivery</p>
                                    </Flex>
                                </Button>
                            </Flex>
                            <Flex gap={30} className='tw-my-8'>
                                <div className='tw-w-24 tw-h-21 tw-bg-black'></div>
                                <div>
                                    <p className='tw-text-lg'>
                                        BOSS BOSSING Unisex Cotton T-Shirt -
                                        Comfortable & Stylish Casual Wear
                                    </p>
                                    <span className='tw-text-orange-500 tw-font-semibold tw-text-lg'>
                                        86.24
                                    </span>
                                </div>
                            </Flex>
                        </Flex>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='tw-p-6 tw-border tw-border-gray-300'>
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
                                <FaRegCircleCheck className='tw-text-lg tw-mr-3' />
                            </Flex>
                        </Flex>

                        <section>
                            <p className='tw-text-lg tw-leading-9'>
                                Order Summary
                            </p>
                            <>
                                <p className='tw-text-right tw-mt-5'>38.00</p>
                                <div className='tw-flex tw-justify-between tw-mt-2'>
                                    <p>Discount</p>
                                    <p>0.00</p>
                                </div>
                            </>
                            <hr className='tw-border tw-border-gray-300 tw-my-4' />
                            <p className='tw-text-right tw-text-orange-500 tw-text-lg tw-mb-2'>
                                86.24
                            </p>
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
