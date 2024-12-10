import { Select } from 'antd';
import React from 'react';
import { useCategoryHooks } from '../../hooks';

const Sorting = () => {
    const { selectedCategory } = useCategoryHooks();
    console.log('selectedCategory: ', selectedCategory);
    return (
        <div className='md:tw-flex tw-justify-between tw-my-8'>
            {selectedCategory ? (
                <>
                    <p className='tw-font-bold md:tw-text-xl'>
                        {selectedCategory}
                    </p>
                    <p className='tw-text-xs md:tw-text-sm'>
                        {`Showing results for ${selectedCategory}`}
                    </p>
                </>
            ) : (
                <span></span>
            )}

            <div className='tw-flex tw-gap-3 tw-items-center tw-mt-5 md:tw-mt-0'>
                <p className='tw-text-sm'>Sort By:</p>
                <Select
                    defaultValue='Top sales'
                    style={{ width: 180 }}
                    options={[
                        {
                            // value: 'Top sales',
                            label: 'Top sales',
                        },
                        {
                            // value: 'Price low to high',
                            label: 'Price low to high',
                        },
                        {
                            // value: 'Price high to low',
                            label: 'Price high to low',
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default Sorting;
