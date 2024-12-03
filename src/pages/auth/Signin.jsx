import React, { useState } from 'react';
import { Button, Divider, Flex, Form, Input, Spin } from 'antd';
import { RiLock2Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';
import { PRODUCT_DASHBOARD } from '../../constants/routes';

const Signin = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState({ username: '', password: '' });
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = async (values) => {
        setIsSubmitting(true);

        const loginData = {
            username: values.username,
            password: values.password,
        };

        try {
            const response = await authService.login(loginData);
            if (response.status === 200) {
                setTimeout(() => {
                    navigate({ PRODUCT_DASHBOARD });
                }, 1500);
                toast.success('Login successful!');
            }
            if (response.status === 401) {
                setError({
                    username: 'Incorrect username',
                    password: 'Incorrect password',
                });
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        } catch (error) {
            toast.error('Login failed: ', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='tw-flex tw-justify-center tw-items-center tw-min-h-screen'>
            <section className='tw-absolute tw-w-[350px] tw-h-[500px] md:tw-w-[600px] md:tw-h-[550px] tw-bg-blue-600 tw-rounded-xl tw--rotate-[170deg] tw-border tw-border-gray-600'></section>
            <section className='tw-absolute tw-px-5 tw-py-10 md:tw-p-14 tw-w-[350px] md:tw-w-[600px] tw-h-auto tw-rounded-xl tw-border tw-border-gray-400 tw-bg-white'>
                <Flex justify='space-between'>
                    <div className='tw-font-extrabold'>
                        <h1 className='tw-text-3xl'>Lozodo</h1>
                        <p>Skip the rest, Just add to cart</p>
                    </div>
                    <RiLock2Line className='tw-text-4xl md:tw-text-5xl' />
                </Flex>
                <Divider />
                <Form layout='vertical' onFinish={handleSubmitForm}>
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter valid username',
                            },
                        ]}
                        className='tw-mt-3'
                    >
                        <Input
                            type='text'
                            onChange={handleChangeInput}
                            variant='filled'
                            placeholder='Enter username...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>
                    {error.username && (
                        <p className='tw-text-red-500 tw-text-sm'>
                            {error.username}
                        </p>
                    )}
                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter valid password',
                            },
                        ]}
                        className='tw-mt-8'
                    >
                        <Input.Password
                            onChange={handleChangeInput}
                            variant='filled'
                            placeholder='Enter password...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>
                    {error.password && (
                        <p className='tw-text-red-500 tw-text-sm'>
                            {error.password}
                        </p>
                    )}
                    <Form.Item>
                        <Link className='tw-italic tw-float-end tw-text-base'>
                            Forgot Password
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            size='large'
                            htmlType='submit'
                            disabled={isSubmitting}
                            className='tw-w-full tw-bg-blue-500 tw-text-white tw-font-bold tw-text-center tw-py-3 tw-rounded-lg'
                        >
                            {isSubmitting ? (
                                <Flex
                                    justify='center'
                                    align='center'
                                    gap='small'
                                >
                                    <Spin size='small' />
                                    <span>Submitting...</span>
                                </Flex>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </Form.Item>
                </Form>
                <Flex justify='center' align='center' gap='small'>
                    <p className='tw-text-sm md:tw-text-base tw-italic'>
                        Don't have an account?
                    </p>
                    <Link className='tw-text-blue-500 tw-font-semibold tw-cursor-pointer tw-text-sm md:tw-text-base'>
                        Create an account
                    </Link>
                </Flex>
            </section>
        </main>
    );
};

export default Signin;
