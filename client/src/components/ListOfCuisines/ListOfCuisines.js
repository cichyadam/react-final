import React, { useState, useEffect } from 'react';
import FilterService from '../../services/FilterService';
import SearchService from '../../services/SearchService';
import {MoonLoader} from "react-spinners";
import SearchFormCuisine from '../SearchForm/SearchFormCuisine';
import SearchResultsCuisines from "../SearchResults/SearchResultsCuisines";

const ListOfCuisines = () => {
    const [cuisines, updateCuisines] = useState([]);
    const [searchedCuisineRecipes, setSearchedCuisine] = useState([]);

    const getCuisines = async () => {
        const response = (await FilterService.getCuisines()).data;
        updateCuisines(response);
    };


    useEffect(() => {
        getCuisines();
    }, []);

    const handleCuisine = async (event) => {
        event.preventDefault();
        const chosenCuisine = document.querySelector('#cuisines').value;
        try {
            const response = await SearchService.getItemsByCuisine(chosenCuisine);
            setSearchedCuisine(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    if (cuisines.length === 0 || cuisines.meals === null) {
        return (
            <div className="loader">
                <MoonLoader/>
            </div>
        );
    } return (
        <div className="page">
            <SearchFormCuisine submitMethod={handleCuisine} cuisines={cuisines} />
            <SearchResultsCuisines searchedCuisineRecipes={searchedCuisineRecipes} />
        </div>


    );
};

export default ListOfCuisines;
