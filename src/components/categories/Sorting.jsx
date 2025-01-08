import { Flex, Select } from 'antd';
import React from 'react';

const Sorting = ({ selectedCategory }) => {
    return (
        <main className='md:tw-flex tw-justify-between tw-my-8'>
            {selectedCategory ? (
                <Flex vertical>
                    <p className='tw-font-bold md:tw-text-xl tw-text-black'>
                        {selectedCategory}
                    </p>
                    <p className='tw-text-sm md:tw-text-base'>
                        {`Showing results for ${selectedCategory}`}
                    </p>
                </Flex>
            ) : (
                <span></span>
            )}

            <section className='tw-flex tw-gap-3 tw-items-center tw-mt-5 md:tw-mt-0'>
                <p>Sort By:</p>
                <Select
                    defaultValue='Top sales'
                    style={{ width: 180 }}
                    options={[
                        {
                            label: 'Top sales',
                        },
                        {
                            label: 'Price low to high',
                        },
                        {
                            label: 'Price high to low',
                        },
                    ]}
                />
            </section>
        </main>
    );
};

export default Sorting;
