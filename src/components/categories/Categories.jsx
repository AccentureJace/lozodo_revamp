import { Col, Divider, Flex, message, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { categoryService } from '../../services';
import { toast } from 'react-toastify';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
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

    return (
        <Flex
            vertical
            className='tw-bg-white tw-h-[289px] tw-rounded-md  tw-mb-5 tw-p-8'
        >
            <h1 className='tw-font-bold'>Categories</h1>
            <Divider className='tw-border-1 tw-bg-black' />
            <Flex justify='space-between' align='center'>
                <BiLeftArrow />
                {/* <Row className='tw-bg-green-700'>
                    {categories?.map((category) => (
                        <Col className='tw-bg-blue' key={category.category_id}>
                            {category.category_name}
                        </Col>
                    ))}

                    <Col>kjdhjs</Col>
                    <Col>kjfjke</Col>
                </Row> */}

                <Row className='tw-gap-5'>
                    <Col>rcol1</Col>
                    <Col>rcol2</Col>
                    <Col>rcol3</Col>
                </Row>

                <BiRightArrow />
            </Flex>
        </Flex>
    );
};

export default Categories;
