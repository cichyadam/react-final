import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchService from '../../services/SearchService';
import '../SearchForm/SearchForm.css'

const ListOfIngredients = () => {
    const [searchedIngredientRecipes, setSearchedIngredient] = useState([]);

    const handleIngredient = async (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('#ingredientSearch');
        const chosenIngredient = searchInput.value;
        searchInput.value = '';
        try {
            const response = await SearchService.getItemsByIngredient(chosenIngredient);
            setSearchedIngredient(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="page">
            <form
                className="searchForm"
                onSubmit={(event) => handleIngredient(event)}
            >
                <p>Search by ingredient:</p>
                <input id="ingredientSearch" type="text" />
                <button type="submit">Search</button>
            </form>
            <div
                className="recipes-container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,1fr)',
                }}
            >
                {(searchedIngredientRecipes.length !== 0
                    && searchedIngredientRecipes.meals !== null
                    && searchedIngredientRecipes.meals.map((recipe) => (
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
                    <div className="noResult">There are no recipes found yet or we could not find any recipes to searched ingredient</div>
                )}
            </div>
        </div>
    );
};

export default ListOfIngredients;
