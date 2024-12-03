import React, { useState } from 'react';
import { Divider, Flex } from 'antd';
import { RiLock2Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';
// import Icon from '../../assets/images/sign-in_icon.svg';

const Signin = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState({});
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
                    navigate('/');
                }, 1500);
                toast.success('Login successful!');
            }
            if (response.status === 401) {
                setError({ general: 'Username or password is incorrect' });
            } else {
                setError({
                    general: 'An error occurred. Please try again later.',
                });
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
                <Flex justify='space-between' className='tw-px-2'>
                    <div className='tw-font-extrabold'>
                        <h1 className='tw-text-3xl'>Lozodo</h1>
                        <p>Skip the rest, Just add to cart</p>
                    </div>
                    {/* <img src={Icon} alt='icon' className='tw-w-8 md:tw-w-9' /> */}
                    <RiLock2Line className='tw-text-xl' />
                </Flex>
                {/* <div className='tw-flex tw-justify-between'>
                    <div className='tw-font-extrabold'>
                        <h1 className='tw-text-3xl'>Lozodo</h1>
                        <p>Skip the rest, Just add to cart</p>
                    </div>
                    <RiLock2Line className='tw-w-10' />
                </div> */}

                <Divider />

                {error.general && (
                    <p className='tw-text-red-500 tw-px-2'>{error.general}</p>
                )}

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
                    >
                        <Input
                            type='text'
                            onChange={handleChangeInput}
                            variant='filled'
                            placeholder='Enter username...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter valid username',
                            },
                        ]}
                        className='tw-mt-5'
                    >
                        <Input.Password
                            onChange={handleChangeInput}
                            variant='filled'
                            placeholder='Enter password...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Link className='tw-italic tw-float-end'>
                        Forgot Password
                    </Link>

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
                    <Link className='tw-text-blue-600 tw-font-semibold tw-cursor-pointer tw-text-sm md:tw-text-base'>
                        Create an account
                    </Link>
                </Flex>
            </section>
        </main>
    );
};

export default Signin;
