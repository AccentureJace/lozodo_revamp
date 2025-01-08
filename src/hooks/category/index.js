import { useEffect, useState } from 'react';
import categoryService from '../../services/category';
import { toast } from 'react-toastify';

export default function useCategoryHooks() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

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
        }
    };

    const handleSelectCategory = (category_name) => {
        setSelectedCategory(category_name);
    }


    return{
        categories,
        selectedCategory,
        handleSelectCategory,
    }
}