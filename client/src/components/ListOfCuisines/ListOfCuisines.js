import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FilterService from '../../services/FilterService';
import SearchService from '../../services/SearchService';

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

    if (cuisines.length === 0) {
        return (
            <div>Loading cuisines</div>
        );
    } return (
        <div>
            <form
                onSubmit={(event) => handleCuisine(event)}
            >
                <select id="cuisines" name="cuisines">
                    {
                        cuisines.meals.map((cuisine, index) => (
                            <option
                                key={`type-${index + 1}`}
                                name={cuisine.strArea}
                            >
                                {cuisine.strArea}
                            </option>
                        ))
                    }
                </select>
                <button type="submit">Search by cuisine</button>
            </form>
            <div
                className="recipes-container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,1fr)',
                }}
            >
                {(searchedCuisineRecipes.length !== 0
                    && searchedCuisineRecipes.meals.map((recipe) => (
                        <div key={recipe.idMeal} id={recipe.idMeal}>
                            <img
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                                style={{
                                    width: '50%',
                                }}
                            />
                            <h3>{recipe.strMeal}</h3>
                            <NavLink to={`recipe/${recipe.idMeal}`}>
                                <button type="submit">See recipe</button>
                            </NavLink>
                        </div>
                    ))
                ) || (
                    <div>There are no recipes matching your criteria</div>
                )}
            </div>
        </div>


    );
};

export default ListOfCuisines;
