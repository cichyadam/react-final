import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchService from '../../services/SearchService';

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
    if(searchedIngredientRecipes === null){
        return (
            <div>Any recipes found related to searched ingredient</div>
        );

    }
    return (
        <div>
            <form
                className="searchForm"
                onSubmit={(event) => handleIngredient(event)}
            >
                <input id="ingredientSearch" type="text" />
                <button type="submit">Search by ingredient</button>
            </form>
            <div
                className="recipes-container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,1fr)',
                }}
            >
                {(searchedIngredientRecipes.length !== 0
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
                    <div>There are no recipes matching your criteria</div>
                )}
            </div>
        </div>
    );
};

export default ListOfIngredients;
