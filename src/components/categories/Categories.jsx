import React from 'react';
import { Divider, Flex } from 'antd';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useCategoryHooks } from '../../hooks';

const Categories = () => {
    const { categories, handleSelectCategory, selectedCategory } =
        useCategoryHooks();

    return (
        <Flex
            vertical
            className='tw-bg-white tw-h-40 tw-rounded-md tw-mb-5 tw-p-8'
        >
            <h1 className='tw-font-bold'>Categories</h1>
            <Divider className='tw-border-[1.5px] tw-border-black' />
            <Flex justify='space-between' align='center'>
                {categories.length > 8 && (
                    <BiLeftArrow className='tw-text-xl' />
                )}
                <Flex gap={20}>
                    {categories?.map((category) => (
                        <div
                            key={category.category_id}
                            className={`tw-border tw-border-gray-500 tw-rounded-md tw-px-6 tw-py-2 tw-text-sm tw-font-semibold hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-none tw-cursor-pointer ${
                                selectedCategory === category.category_id
                                    ? 'tw-bg-blue-500 tw-text-white tw-border-none'
                                    : 'tw-border-gray-500'
                            }`}
                            onClick={() =>
                                handleSelectCategory(category.category_id)
                            }
                        >
                            {category.category_name}
                        </div>
                    ))}
                </Flex>
                {categories.length > 8 && (
                    <BiRightArrow className='tw-text-xl' />
                )}
            </Flex>
        </Flex>
    );
};

export default Categories;
