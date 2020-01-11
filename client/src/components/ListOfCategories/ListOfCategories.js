import React, { useState, useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import FilterService from '../../services/FilterService';
import SearchService from '../../services/SearchService';
import './ListOfResults.css';
import SearchFormCategory from '../SearchForm/SearchFormCategory';
import SearchResultsCategories from '../SearchResults/SearchResultsCategories';

const ListOfCategories = () => {
    const [categories, updateCategories] = useState([]);
    const [searchedCategoryRecipes, setSearchedCategory] = useState([]);

    const getCategories = async () => {
        const response = (await FilterService.getCategories()).data;
        updateCategories(response);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleCategory = async (event) => {
        event.preventDefault();
        const chosenCategory = document.querySelector('#categories').value;
        try {
            const response = await SearchService.getItemsByCategory(chosenCategory);
            setSearchedCategory(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };


    if (categories.length === 0 || categories.meals === null) {
        return (
            <div className="loader">
                <MoonLoader />
            </div>
        );
    }
    return (
        <section className="section">
            <SearchFormCategory submitMethod={handleCategory} categories={categories} />
            <SearchResultsCategories searchedCategoryRecipes={searchedCategoryRecipes} />
        </section>
    );
};

export default ListOfCategories;
