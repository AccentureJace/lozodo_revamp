import { useEffect, useState } from 'react';
import categoryService from '../../services/category';
import { toast } from 'react-toastify';

export default function useCategoryHooks() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortOption, setSortOption] = useState('Top sales')
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await categoryService.getAllCategories();
        if (!response) {
            toast.error(error)
        } else {
            const all_categories = response.data.categories;
            setCategories(all_categories);
            console.log('all_categories: ', all_categories)
        }
    };

    const handleSelectCategory = (category_id) => {
        setSelectedCategory(category_id);
        console.log('selectedCategory in handleSelectcategory: ', selectedCategory);
    }

    // const handleSortProducts = () => {
    //     let filtered = selectedCategory
    //         ? products.filter((product) => product.category_id === selectedCategory)
    //         : products;

    //     if (sortOption === 'Price low to high') {
    //         filtered = filtered.sort((a, b) => a.price - b.price);
    //     } else if (sortOption === 'Price high to low') {
    //         filtered = filtered.sort((a, b) => b.price - a.price);
    //     } else if (sortOption === 'Top sales') {
    //         filtered = filtered.sort((a, b) => b.sold - a.sold);
    //     }

    //     setFilteredProducts(filtered);
    // };

    return{
        categories,
        selectedCategory,
        filteredProducts,
        sortOption,
        setSortOption,
        handleSelectCategory,
        // handleSortProducts
    }
}