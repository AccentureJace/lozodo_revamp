import React, { useState } from 'react';
import { Divider, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../routes/endpoints';
import { AuthForm } from '../../components';
import authService from '../../services/auth';
import { INPUT_FIELDS } from '../../constants/auth';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from '../../assets/images/sign-in_icon.svg';

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
                console.log('Login successful:', response);

                setTimeout(() => {
                    navigate('/');
                }, 1500);
                toast.success('Login successful!');
            }
            if (response.status === 401) {
                console.log('Login failed:', response.status.message);
                setError({ general: 'Username or password is incorrect' });
            } else {
                console.log('Login failed with status:', response.status);
                setError({
                    general: 'An error occurred. Please try again later.',
                });
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            toast.error('Login failed!');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='tw-flex tw-justify-center tw-items-center tw-min-h-screen'>
            <section className='tw-absolute tw-w-[350px] tw-h-[500px] md:tw-w-[600px] md:tw-h-[550px] tw-bg-[#0D99FF] tw-rounded-xl tw--rotate-[170deg] tw-border tw-border-gray-600'></section>
            <section className='tw-absolute tw-px-5 tw-py-10 md:tw-p-14 tw-w-[350px] md:tw-w-[600px] tw-h-auto tw-rounded-xl tw-border tw-border-gray-400 tw-bg-white'>
                <Flex justify='space-between' className='tw-px-2'>
                    <div className='tw-font-extrabold'>
                        <h1 className='tw-text-3xl'>Lozodo</h1>
                        <p>Skip the rest, Just add to cart</p>
                    </div>
                    <img src={Icon} alt='icon' className='tw-w-8 md:tw-w-9' />
                </Flex>
                <Divider />
                {error.general && (
                    <p className='tw-text-red-500 tw-px-2'>{error.general}</p>
                )}
                <AuthForm
                    fields={INPUT_FIELDS}
                    handleChange={handleChangeInput}
                    handleSubmit={handleSubmitForm}
                    isSignIn={true}
                    isSubmitting={isSubmitting}
                />
                <Flex justify='center' align='center' gap='small'>
                    <p className='tw-text-sm md:tw-text-base tw-italic'>
                        Don't have an account?
                    </p>
                    <Link
                        to={ENDPOINTS.PATH_REGISTER}
                        className='tw-text-[#0D99FF] tw-font-semibold tw-cursor-pointer tw-text-sm md:tw-text-base'
                    >
                        Create an account
                    </Link>
                </Flex>
            </section>
            <ToastContainer
                position='bottom-right'
                autoClose={1000}
                draggable={false}
                theme='colored'
                transition={Bounce}
            />
        </main>
    );
};

export default Signin;
