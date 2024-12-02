import React from 'react';
import Form from 'antd/es/form/Form';
import Input from 'antd/es/input/Input';
import { Button, Flex, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../../routes/endpoints';

const AuthForm = ({
    fields,
    handleChange,
    handleSubmit,
    isSignIn,
    isSubmitting,
}) => {
    return (
        <Form layout='vertical' onFinish={handleSubmit}>
            {fields.map((field) => (
                <Form.Item
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid input',
                        },
                    ]}
                    className='tw-mt-5'
                >
                    <Input
                        type={field.type}
                        onChange={handleChange}
                        variant='filled'
                        placeholder={field.placeholder}
                        className='tw-px-5 tw-py-3'
                    />
                </Form.Item>
            ))}

            {isSignIn ? (
                <Form.Item>
                    <Link
                        to={ENDPOINTS.PATH_RESET_PASSWORD}
                        className='tw-italic tw-float-end'
                    >
                        Forgot Password
                    </Link>
                </Form.Item>
            ) : null}

            <Form.Item>
                <Button
                    type='primary'
                    size='large'
                    htmlType='submit'
                    disabled={isSubmitting}
                    className='tw-w-full tw-bg-[#0D99FF] tw-text-[#FFFCFC] tw-font-bold tw-text-center tw-py-3 tw-rounded-lg'
                >
                    {isSubmitting ? (
                        <Flex justify='center' align='center' gap='small'>
                            <Spin size='small' />
                            <span>Submitting...</span>
                        </Flex>
                    ) : (
                        'Submit'
                    )}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AuthForm;
