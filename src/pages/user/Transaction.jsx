import { Flex } from 'antd';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Transaction = () => {
    const [viewMoreState, setViewMoreState] = useState({});

    const transactions = [
        {
            transaction_id: '24c4aab7-7477-44d1-bb27-9112b9d517d7',
            date_created: '2025-01-08T14:06:31.7541',
            cart: [
                {
                    items: [
                        {
                            quantity: 5,
                            total_price: 10500,
                            product_img: 'https://via.placeholder.com/100',
                            product_name:
                                'BOSS BOSSING Unisex Cotton T-Shirt - Comfortable & Stylish Casual Wear',
                        },
                        {
                            quantity: 1,
                            total_price: 25000,
                            product_img: 'https://via.placeholder.com/100',
                            product_name: 'Smartphone',
                        },
                    ],
                },
            ],
        },
        {
            transaction_id: '24c4aab7-7477-44d1-bb27-9112b9d517d7',
            date_created: '2025-01-05T14:06:31.7541',
            cart: [
                {
                    items: [
                        {
                            quantity: 3,
                            total_price: 10500,
                            product_img: 'https://via.placeholder.com/100',
                            product_name: 'Running Shoes',
                        },
                        {
                            quantity: 2,
                            total_price: 48000,
                            product_img: 'https://via.placeholder.com/100',
                            product_name: 'Smartwatch',
                        },
                    ],
                },
            ],
        },
        {
            transaction_id: '43877ebb-0390-4fc9-b0e0-0dc82d704a6c',
            date_created: '2024-11-19T07:21:21.854',
            cart: [
                {
                    items: [
                        {
                            quantity: 5,
                            total_price: 20000,
                            product_img: 'https://via.placeholder.com/100',
                            product_name: 'Wireless Earbuds',
                        },
                    ],
                },
            ],
        },
    ];

    const handleGetStatus = (orderDate) => {
        const today = new Date();
        const orderDay = new Date(orderDate);
        const diffTime = today - orderDay;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        let status = '';
        let color = {
            confirmed: 'tw-bg-gray-300',
            shipped: 'tw-bg-gray-300',
            delivered: 'tw-bg-gray-300',
        };

        if (diffDays === 0) {
            status = 'Confirmed';
            color.confirmed = 'tw-bg-red-500';
        } else if (diffDays <= 3) {
            status = 'Shipped';
            color.confirmed = 'tw-bg-red-500';
            color.shipped = 'tw-bg-yellow-500';
        } else if (diffDays >= 4) {
            status = 'Delivered';
            color.confirmed = 'tw-bg-red-500';
            color.shipped = 'tw-bg-yellow-500';
            color.delivered = 'tw-bg-green-500';
        }

        return { status, color };
    };

    const handleToggleViewMore = (transactionId) => {
        setViewMoreState((prevState) => ({
            ...prevState,
            [transactionId]: !prevState[transactionId],
        }));
    };

    return (
        <>
            {transactions.map((transaction) => (
                <main
                    key={transaction.transaction_id}
                    className='tw-my-5 tw-mx-10 tw-border-2 tw-border-gray-300'
                >
                    <Flex
                        justify='space-between'
                        className='tw-border-b-2 tw-border-gray-300 tw-py-5 tw-px-10 tw-bg-zinc-200'
                    >
                        <p>Transaction #: {transaction.transaction_id}</p>
                        <p>
                            Sub-Total: ₱
                            {transaction.cart?.[0]?.items?.[0]?.total_price}
                        </p>
                    </Flex>
                    <Flex vertical align='space-between'>
                        {transaction.cart?.[0]?.items
                            .slice(0, 1)
                            .map((product, index) => (
                                <Flex
                                    key={index}
                                    className='tw-py-5 tw-px-10'
                                    justify='space-between'
                                    align='flex-start'
                                >
                                    <Flex align='center' gap='small'>
                                        <img
                                            src={
                                                product.product_img ||
                                                'https://via.placeholder.com/100'
                                            }
                                            alt={product.product_name}
                                            className='tw-w-24 tw-h-24 tw-object-cover tw-rounded-md'
                                        />
                                        <section>
                                            <p>{product.product_name}</p>
                                            <p>Qty: {product.quantity}</p>
                                        </section>
                                    </Flex>
                                    <section>
                                        <p className='tw-font-bold tw-mb-3'>
                                            Shipping Info
                                        </p>
                                        <span></span>
                                    </section>
                                    <section>
                                        <p className='tw-font-bold tw-mb-3'>
                                            Package Status
                                        </p>
                                        <p className='tw-mb-3'>
                                            Date Order:{' '}
                                            {transaction.date_created}
                                        </p>
                                        <Flex gap='middle'>
                                            <div>
                                                <p>Confirmed</p>
                                                <div
                                                    className={`tw-w-32 tw-h-6 ${
                                                        handleGetStatus(
                                                            transaction.date_created
                                                        ).color.confirmed
                                                    }`}
                                                ></div>
                                            </div>
                                            <div>
                                                <p>Shipped</p>
                                                <div
                                                    className={`tw-w-32 tw-h-6 ${
                                                        handleGetStatus(
                                                            transaction.date_created
                                                        ).color.shipped
                                                    }`}
                                                ></div>
                                            </div>
                                            <div>
                                                <p>Delivered</p>
                                                <div
                                                    className={`tw-w-32 tw-h-6 ${
                                                        handleGetStatus(
                                                            transaction.date_created
                                                        ).color.delivered
                                                    }`}
                                                ></div>
                                            </div>
                                        </Flex>
                                    </section>
                                </Flex>
                            ))}

                        {viewMoreState[transaction.transaction_id] &&
                            transaction.cart?.[0]?.items
                                .slice(1)
                                .map((product, index) => (
                                    <Flex
                                        align='center'
                                        gap='small'
                                        key={index}
                                        className='tw-p-5 tw-pt-0'
                                    >
                                        <img
                                            src={
                                                product.product_img ||
                                                'https://via.placeholder.com/100'
                                            }
                                            alt={product.product_name}
                                            className='tw-w-24 tw-h-24 tw-object-cover tw-rounded-md'
                                        />
                                        <section>
                                            <p>{product.product_name}</p>
                                            <p>Qty: {product.quantity}</p>
                                        </section>
                                    </Flex>
                                ))}

                        {transaction.cart?.[0]?.items.length > 1 && (
                            <Flex justify='flex-end'>
                                <button
                                    className='tw-bg-neutral-300 tw-m-5 tw-w-80 tw-rounded-md tw-text-lg tw-p-2'
                                    onClick={() =>
                                        handleToggleViewMore(
                                            transaction.transaction_id
                                        )
                                    }
                                >
                                    {viewMoreState[
                                        transaction.transaction_id
                                    ] ? (
                                        <Flex
                                            justify='center'
                                            align='center'
                                            gap='middle'
                                        >
                                            <p>View Less</p>
                                            <span>
                                                <FaAngleUp />
                                            </span>
                                        </Flex>
                                    ) : (
                                        <Flex
                                            justify='center'
                                            align='center'
                                            gap='middle'
                                        >
                                            <p>View More</p>
                                            <span>
                                                <FaAngleDown />
                                            </span>
                                        </Flex>
                                    )}
                                </button>
                            </Flex>
                        )}
                    </Flex>
                </main>
            ))}
        </>
    );
};

export default Transaction;
