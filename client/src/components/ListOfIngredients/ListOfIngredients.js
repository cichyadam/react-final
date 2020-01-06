import React, { useState, useEffect } from 'react';
import SearchService from '../../services/SearchService';

const ListOfIngredients = () => {
    const [searchedIngredientRecipes,setSearchedIngredient] = useState([]);

    const handleIngredient = async event => {
        event.preventDefault();
        let searchInput = document.querySelector('#ingredientSearch');
        let chosenIngredient = searchInput.value;
        searchInput.value = '';
        try {
            const response = await SearchService.getItemsByIngredient(chosenIngredient);
            setSearchedIngredient(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    return(
        <div>
            <form
                onSubmit={event => handleIngredient(event)}
            >
                <input id='ingredientSearch' type="text"/>
                <button>Search by ingredient</button>
            </form>
            <div
                className="recipes-container"
                style={{
                    display:'grid',
                    gridTemplateColumns: 'repeat(4,1fr)'
                }}
            >
                {(searchedIngredientRecipes.length !== 0 &&
                    searchedIngredientRecipes.meals.map((recipe) => (
                        <div key={recipe.idMeal} id={recipe.idMeal}>
                            <img
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                                style={{
                                    width: '50%'
                                }}
                            />
                            <h3>{recipe.strMeal}</h3>
                        </div>
                    ))
                ) || (
                    <div>There are no recipes matching your criteria</div>
                )}
            </div>
        </div>
    )
}
export default ListOfIngredients;