import React from 'react';
import { Card, Button } from 'antd';
import { FaCartPlus } from "react-icons/fa6";
import PRODUCT_IMAGE from '../../assets/images/product_1.webp'

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card
        hoverable
        className="tw-mb-3"
        cover={
          <div className='tw-py-5'>
            <img
              alt="product"
              src={PRODUCT_IMAGE}
              className="tw-h-32 tw-w-96 tw-object-contain"
            />
          </div>
        }
      >
        <div className="tw-px-3 tw-py-3">
          <p
            className="tw-font-semibold  tw-text-md"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.title}
          </p>
          <p className="tw-text-red-500 tw-text-xl">₱{product.price}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
