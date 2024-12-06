import { Button, Card, Col, Divider, Flex, Row, Typography } from 'antd';
import React from 'react';
import { FaCircleCheck, FaRegCircleCheck } from 'react-icons/fa6';

const Checkout = () => {
    return (
        <div className='tw-p-10'>
            <Row gutter={16}>
                <Col span={16}>
                    <Card
                        title='Shipping Address'
                        extra={
                            <Button color='primary' variant='link'>
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
                                {/* <img src='' alt='img' /> */}
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
                    <Card className='tw-p-6'>
                        <p className='tw-text-2xl tw-leading-9'>
                            Select Payment Method
                        </p>

                        <section>
                            {' '}
                            <div className='tw-w-10 tw-h-10 tw-bg-blue-400'></div>
                        </section>

                        <Flex vertical gap={10}>
                            <Flex
                                justify='space-between'
                                align='center'
                                className='tw-p-5'
                            >
                                <Flex gap={10}>
                                    <div className='tw-w-10 tw-h-10 tw-bg-blue-400'></div>
                                    <p className='tw-font-semibold tw-text-xl'>
                                        Gcash e-Wallet <br />
                                        <span className='tw-text-xs tw-text-gray-400'>
                                            Gcash e-Wallet
                                        </span>
                                    </p>
                                </Flex>
                                <FaCircleCheck className='tw-text-xl tw-text-blue-500' />
                            </Flex>

                            {/* <Flex
                                    icon={
                                        <FaRegCircleCheck className='tw-text-xl' />
                                    }
                                    className='tw-px-5 tw-py-7 tw-border-blue-400'
                                >
                                    <Flex align='center' className='tw-ml-5'>
                                        <div className='tw-w-10 tw-h-10 tw-bg-blue-400'></div>
                                        <div>
                                            <p className='tw-font-semibold'>
                                                G-Cash e-Wallet
                                            </p>
                                            <p className='tw-text-gray-500 tw-text-sm'>
                                                Gcash e-wallet
                                            </p>
                                        </div>
                                    </Flex>
                                </Flex> */}
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Checkout;
