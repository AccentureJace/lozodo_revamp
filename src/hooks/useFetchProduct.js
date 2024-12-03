import { useEffect, useState } from 'react';
import productService from '../services/product';
import { handleFormatAmountToPHP } from '../utils';

export default function useFetchProduct() {
	const [products, setProducts] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const fetchProducts = async () => {
		try {
			const response = await productService.getAllProducts();
			const allProducts = response.products.map((product) => {
				return {
					...product,
					price: handleFormatAmountToPHP(product.price),
					//decode image from base64
				};
			});
			setProducts(allProducts);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return { products, isLoading };
}
