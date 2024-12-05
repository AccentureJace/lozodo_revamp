import { useEffect, useState } from 'react';
import productService from '../../services/product';
import { handleFormatAmountToPHP } from '../../utils';
import { toast } from 'react-toastify';

export default function useProductHooks() {
	const [products, setProducts] = useState();
	const [selectedProduct, setSelectedProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [status, setStatus] = useState({});

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const response = await productService.getAllProducts();

		const { products, status, data } = response;

		if (!products) {
			toast.error(data.error);
			setStatus({ code: status, message: data.error });
		} else {
			const all_products = response.products.map((product) => {
				return {
					...product,
					price: handleFormatAmountToPHP(product.price),
					product_img: `data:image/png;base64,${product.product_img}`,
				};
			});
			setProducts(all_products);
			setStatus({ code: 200, message: 'Success' });
			setIsLoading(false);
		}
	};

	const fetchProductById = async (product_id) => {
		const response = await productService.getProductById(product_id);

		const { product, status, data } = response;

		if (!product) {
			toast.error(data.error);
			setStatus({ code: status, message: data.error });
		} else {
			setSelectedProduct({
				...product,
				price: handleFormatAmountToPHP(product.price),
				product_img: `data:image/png;base64,${product.product_img}`,
			});
		}
		setIsLoading(false);
	};

	const fetchProductDetailsIfLoggedOut = async (product_id) => {
		const response = await productService.getAllProducts();

		const { products, status, data } = response;

		if (!products) {
			toast.error(data.error);
			setStatus({ code: status, message: data.error });
		} else {
			const product_data = products.find(
				(product) => product.product_id === product_id
			);

			setSelectedProduct({
				...product_data,
				price: handleFormatAmountToPHP(product_data.price),
				product_img: `data:image/png;base64,${product_data.product_img}`,
			});
		}
		setIsLoading(false);
	};

	return {
		products,
		isLoading,
		status,
		selectedProduct,
		fetchProductById,
		fetchProductDetailsIfLoggedOut,
	};
}
