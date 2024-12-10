import React from 'react';
import { gcash_payment } from '../../assets/images';
import { Button, Card, Collapse } from 'antd';
import { FaAngleDown } from 'react-icons/fa6';
import { useTransactionHooks } from '../../hooks';
import { style } from '@mui/system';

const Transaction = () => {
    const sample = [
        {
            key: '1',
            extra: (
                <Button
                    type='default'
                    size='large'
                    icon={<FaAngleDown />}
                    iconPosition='end'
                    className='tw-bg-neutral-300 tw-float-end'
                >
                    View More
                </Button>
            ),
            children: (
                <div className=''>
                    <div className='tw-flex tw-gap-2 tw-justify-start tw-items-start'>
                        <img src={gcash_payment} alt='' className='tw-w-20' />
                        <div>
                            <p>
                                BOSS BOSSING Unisex Cotton T-Shirt - Comfortable
                                & stylish Casual Wear
                            </p>
                            <p>
                                Qty: <span>2</span>
                            </p>
                        </div>
                    </div>

                    <div className='tw-flex tw-gap-2 tw-justify-start tw-items-start tw-mt-5'>
                        <img src={gcash_payment} alt='' className='tw-w-20' />
                        <div>
                            <p>
                                BOSS BOSSING Unisex Cotton T-Shirt - Comfortable
                                & stylish Casual Wear
                            </p>
                            <p>
                                Qty: <span>2</span>
                            </p>
                        </div>
                    </div>
                </div>
            ),
            showArrow: false,
        },
    ];
    const items = [
        {
            key: '1',
            label: (
                <section className='tw-flex tw-justify-between'>
                    <p>Transaction #: 091123652</p>
                    <p>Sub Total: 200,000</p>
                </section>
            ),
            children: (
                <>
                    <section className='tw-flex tw-justify-between'>
                        <div className='tw-flex tw-gap-2 tw-justify-start tw-items-start'>
                            <img
                                src={gcash_payment}
                                alt=''
                                className='tw-w-20'
                            />
                            <div>
                                <p>
                                    BOSS BOSSING Unisex Cotton T-Shirt -
                                    Comfortable & stylish Casual Wear
                                </p>
                                <p>
                                    Qty: <span>2</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='tw-font-bold tw-mb-3'>
                                Shipping Info
                            </p>
                            <p>
                                Minuyan II Rd. Blk 14 Lot 44 San Jose del Monte
                                Bulacan
                            </p>
                        </div>
                        <div>
                            <p className='tw-font-bold tw-mb-3'>
                                Package Status
                            </p>
                            <p className='tw-mb-3'>Date Order: Dec 10 2024</p>
                            <div className='tw-flex tw-gap-5 tw-text-xs tw-mb-10'>
                                <div>
                                    <p>Confirmed</p>
                                    <div className='tw-w-32 tw-h-6 tw-bg-red-600'></div>
                                </div>
                                <div>
                                    <p>Shipped</p>
                                    <div className='tw-w-32 tw-h-6 tw-bg-neutral-200'></div>
                                </div>
                                <div>
                                    <p>Delivered</p>
                                    <div className='tw-w-32 tw-h-6 tw-bg-neutral-200'></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Collapse accordion items={sample} ghost />
                </>
            ),
            showArrow: false,
        },
    ];

    return (
        <>
            <Collapse
                accordion
                items={items}
                defaultActiveKey={['1']}
                className='tw-m-10'
            />
        </>
    );
};

export default Transaction;
