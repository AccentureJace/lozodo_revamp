import { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Divider, Spin } from 'antd';
import { toast } from 'react-toastify';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { GiShoppingBag, GiShieldDisabled } from 'react-icons/gi';
import { ImCart } from 'react-icons/im';
import { TbTruckReturn } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useAuthenticationStore } from '../../store';
import { handleFormatAmountToPHP } from '../../utils';
import { SUCCESS_ADD_TO_CART, ERROR_ADD_TO_CART } from '../../constants/cart';
import { useProductHooks, useCartHooks } from '../../hooks';

const ProductDetails = () => {
    const { id } = useParams();
    const {
        isLoading: addToCartLoading,
        addToCartLoggedIn,
        addToCartLoggedOut,
    } = useCartHooks();
    const [quantity, setQuantity] = useState(1);
    const { authenticatedUser } = useAuthenticationStore((state) => state);
    const {
        selectedProduct,
        isLoading,
        fetchProductById,
        fetchProductDetailsIfLoggedOut,
    } = useProductHooks();

    useEffect(() => {
        if (!id) return;
        //check if user is logged in. if yes, call fetchProductById else fetchProductDetailsIfLoggedOut
        // fetchProductById(id);
        fetchProductDetailsIfLoggedOut(id);
    }, [id]);

    const {
        product_img,
        product_name,
        sold,
        category,
        price,
        product_description,
    } = selectedProduct;

    const handleAddQuantity = () => {
        setQuantity((curr) => curr + 1);
    };

    const handleSubtractQuantity = () => {
        if (quantity > 1) {
            setQuantity((curr) => curr - 1);
        }
    };

    const handleAddToCart = async () => {
        if (authenticatedUser) {
            try {
                await addToCartLoggedIn({ product: selectedProduct, quantity });
                toast.success(SUCCESS_ADD_TO_CART);
            } catch (error) {
                toast.error(ERROR_ADD_TO_CART);
            }
        } else {
            await addToCartLoggedOut({ product: selectedProduct, quantity });
        }
        setQuantity(1);
    };

    return (
        <div className='tw-py-10 tw-px-10'>
            {isLoading ? (
                <div className='tw-flex tw-justify-center tw-items-center tw-py-10'>
                    <Spin size='large' />
                </div>
            ) : (
                <Row>
                    <Col span={16}>
                        <Card className='tw-py-14'>
                            <Row>
                                <Col span={9}>
                                    <img
                                        alt={product_name}
                                        src={product_img}
                                        className=' tw-w-96 tw-object-fill tw-p-5'
                                    />
                                </Col>
                                <Col span={10} className='tw-py-5 tw-px-3'>
                                    <p className='tw-text-2xl tw-font-bold'>
                                        {product_name}
                                    </p>
                                    <p>{sold} Sold</p>
                                    <p className='tw-pt-5'>
                                        Category:{' '}
                                        <span>
                                            {category &&
                                                category.map((categ) => {
                                                    return categ.category_name;
                                                })}
                                        </span>
                                    </p>
                                    <p className='tw-text-4xl tw-text-red-500'>
                                        {price &&
                                            handleFormatAmountToPHP(price)}
                                    </p>
                                    <div className='tw-pt-10 tw-flex tw-gap-3'>
                                        <p className='tw-text-md tw-pt-1'>
                                            Quantity
                                        </p>
                                        <Button
                                            icon={<FaPlus />}
                                            onClick={handleAddQuantity}
                                        />
                                        <p className='tw-text-lg'>{quantity}</p>
                                        <Button
                                            icon={<FaMinus />}
                                            onClick={handleSubtractQuantity}
                                        />
                                    </div>
                                    <div className='tw-pt-10 tw-flex tw-gap-3 '>
                                        <Button className='tw-bg-red-500 tw-px-5 tw-py-5 tw-flex tw-gap-2 tw-text-white'>
                                            <GiShoppingBag className='tw-text-xl' />
                                            <p>Buy Now</p>
                                        </Button>
                                        <Button
                                            className='tw-bg-blue-500 tw-px-5 tw-py-5 tw-flex tw-gap-2 tw-items-center tw-text-white'
                                            onClick={handleAddToCart}
                                            disabled={addToCartLoading}
                                        >
                                            <ImCart className=' tw-text-xl tw-container tw-pe-2' />
                                            <p>Add to Cart</p>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className='tw-mx-1 tw-px-5 tw-py-24'>
                            <p className='tw-text-xl tw-font-bold'>
                                Product Details
                            </p>
                            <p className='tw-pl-2'>{product_description}</p>
                            <Divider />
                            <p className='tw-text-lg tw-font-bold'>
                                Return & Warranty
                            </p>
                            <div className='tw-flex tw-gap-2 tw-pl-2'>
                                <CgArrowsExchangeAlt className='tw-text-xl' />
                                <p>Change of mind returns</p>
                            </div>
                            <div className='tw-flex tw-gap-2 tw-pl-2'>
                                <TbTruckReturn className='tw-text-xl' />
                                <p>7 Days Free Returns</p>
                            </div>
                            <div className='tw-flex tw-gap-2 tw-pl-2'>
                                <GiShieldDisabled className='tw-text-xl' />
                                <p>Warranty not available</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default ProductDetails;
