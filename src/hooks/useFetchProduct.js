import react, { useEffect, useState } from 'react';
import axios from "axios"


export default function useFetchProduct() {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=12');
            setProducts(response.data);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return { products, isLoading };

}