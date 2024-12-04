import React, { useState } from 'react';
import { Button, Divider, Flex, Form, Input, Spin } from 'antd';
import { FaRegEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services';
import { validateObject, handleConfirmPassword } from '../../utils';
import { PATH_LOGIN } from '../../constants/routes';
import {
    ADDRESS_MESSAGE,
    CONTACT_NUMBER_MESSAGE,
    FIRST_NAME_MESSAGE,
    LAST_NAME_MESSAGE,
    PASSWORD_MESSAGE,
    SUCCESSFUL_SIGNUP_MESSAGE,
    USERNAME_MESSAGE,
} from '../../constants/auth';
import { toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form] = Form.useForm();

    const handleSubmitForm = async (values) => {
        setIsSubmitting(true);

        const validation_errors = validateObject(values);
        if (Object.keys(validation_errors).length > 0) {
            Object.entries(validation_errors).forEach(([key, message]) => {
                form.setFields([
                    {
                        name: key,
                        errors: [message],
                    },
                ]);
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const registerData = {
                first_name: values.first_name,
                last_name: values.last_name,
                address: values.address,
                contact_number: values.contact_number,
                username: values.username,
                password: values.password,
            };
            const response = await authService.register(registerData);
            if (response.message === SUCCESSFUL_SIGNUP_MESSAGE) {
                form.resetFields();
                setTimeout(() => {
                    navigate(PATH_LOGIN);
                }, 1500);
                toast.success(response.message);
            } else {
                toast.error(response.response.data.error.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Flex
            justify='center'
            align='flex-start'
            className='tw-min-h-screen tw-my-20'
        >
            <section className='tw-absolute tw-w-[360px] tw-h-[500px] md:tw-w-[600px] md:tw-h-[600px] tw-bg-blue-600 tw-rounded-xl tw-rotate-[8deg] md:tw-rotate-[9deg] tw-border tw-border-gray-600'></section>
            <section className='tw-absolute tw-px-5 tw-py-10 md:tw-p-14 tw-w-[350px] md:tw-w-[600px] tw-h-auto tw-rounded-xl tw-border tw-border-gray-400 tw-bg-white'>
                <Flex justify='space-between'>
                    <div className='tw-font-extrabold'>
                        <h1 className='tw-text-3xl'>Lozodo</h1>
                        <p>Skip the rest, Just add to cart</p>
                    </div>
                    <FaRegEdit className='tw-text-4xl md:tw-text-5xl' />
                </Flex>
                <Divider />
                <Form layout='vertical' form={form} onFinish={handleSubmitForm}>
                    <Form.Item
                        label='First Name'
                        name='first_name'
                        rules={[
                            {
                                required: true,
                                message: FIRST_NAME_MESSAGE,
                            },
                        ]}
                        className='tw-mt-3'
                    >
                        <Input
                            variant='filled'
                            placeholder='Enter first name...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Last Name'
                        name='last_name'
                        rules={[
                            {
                                required: true,
                                message: LAST_NAME_MESSAGE,
                            },
                        ]}
                        className='tw-mt-3'
                    >
                        <Input
                            variant='filled'
                            placeholder='Enter last name...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Contact Number'
                        name='contact_number'
                        rules={[
                            {
                                required: true,
                                message: CONTACT_NUMBER_MESSAGE,
                            },
                        ]}
                        className='tw-mt-3'
                    >
                        <Input
                            variant='filled'
                            type='number'
                            placeholder='Enter contact number...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>
                    <Form.Item
                        label='Address'
                        name='address'
                        rules={[
                            {
                                required: true,
                                message: ADDRESS_MESSAGE,
                            },
                        ]}
                        className='tw-mt-3'
                    >
                        <Input
                            variant='filled'
                            placeholder='Enter address...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: USERNAME_MESSAGE,
                            },
                        ]}
                        className='tw-mt-3'
                    >
                        <Input
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
                                message: PASSWORD_MESSAGE,
                            },
                        ]}
                        className='tw-mt-8'
                    >
                        <Input.Password
                            variant='filled'
                            placeholder='Enter password...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Form.Item
                        label='Re-enter Password'
                        name='re_enter_password'
                        rules={[
                            {
                                required: true,
                                message: PASSWORD_MESSAGE,
                            },
                            { validator: handleConfirmPassword(form) },
                        ]}
                        className='tw-mt-8'
                    >
                        <Input.Password
                            variant='filled'
                            placeholder='Re-enter Password...'
                            className='tw-px-5 tw-py-3'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            size='large'
                            htmlType='submit'
                            disabled={isSubmitting}
                            className='tw-w-full tw-bg-blue-500 tw-text-white tw-font-bold tw-text-center tw-py-3 tw-rounded-lg tw-mt-8'
                        >
                            {isSubmitting ? (
                                <Flex
                                    justify='center'
                                    align='center'
                                    gap='small'
                                >
                                    <Spin size='small' />
                                    <span>Creating...</span>
                                </Flex>
                            ) : (
                                'Create'
                            )}
                        </Button>
                    </Form.Item>
                </Form>
                <Flex justify='center' align='center' gap='small'>
                    <p className='tw-text-sm md:tw-text-base tw-italic'>
                        Already have an account?
                    </p>
                    <Link
                        to={PATH_LOGIN}
                        className='tw-text-blue-500 tw-font-semibold tw-cursor-pointer tw-text-sm md:tw-text-base'
                    >
                        Log-in account
                    </Link>
                </Flex>
            </section>
        </Flex>
    );
};

export default Signup;
