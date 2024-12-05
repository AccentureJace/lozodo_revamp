import { Col, Divider, Flex, message, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { categoryService } from '../../services';
import { toast } from 'react-toastify';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        // try {
        //     const response = await categoryService.getAllCategories();
        //     console.log('response: ', response);

        //     const all_categories = response.data.categories;

        //     setCategories(all_categories);
        //     console.log('all_categories: ', all_categories);
        //     console.log('response.data.categories: ', response.data.categories);
        // } catch (error) {
        //     console.error(error);
        // }

        const response = await categoryService.getAllCategories();
        if (!response) {
            console.error(error);
        } else {
            const all_categories = response.data.categories;
            setCategories(all_categories);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);
    // console.log('categories: ', categories);
    return (
        <div className='tw-bg-white tw-h-40 tw-my-10'>
            <h1>Categories</h1> <Divider />
            <div className='tw-bg-green-700 tw-flex tw-gap-4'>
                {categories.map((category) => {
                    <div className='tw-bg-blue' key={category.category_id}>
                        {category.category_name}
                    </div>;
                })}
            </div>
        </div>
    );
};

export default Categories;
