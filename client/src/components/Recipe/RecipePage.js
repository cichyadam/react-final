import React, { useState, useEffect } from 'react';
import RecipeService from '../../services/RecipeService';
import MoonLoader from "react-spinners/MoonLoader";
import '../ListOfCategories/ListOfResults.css'
import './RecipePage.css'


const RecipePage = (props) => {
    const [recipe, setRecipe] = useState(null);

    const getRecipe = async (id) => {
        try {
            return (await RecipeService.getRecipe(id)).data;
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        const recipeId = props.match.params.id;
        getRecipe(recipeId).then((res) => setRecipe(res));
    }, []);

    if (recipe == null) {
        return (
            <div className="loader">
                <MoonLoader/>
            </div>
        );
    }
    const recipeToShow = recipe.meals[0];
    const ingredients = [];

    for (let i = 1; i < 21; i++) {
        let ingredient = `strIngredient${i}`;
        ingredient = ingredient.split('.').reduce((o, i) => o[i], recipeToShow);
        let measurement = `strMeasure${i}`;
        measurement = measurement.split('.').reduce((o, i) => o[i], recipeToShow);
        ingredients.push({
            id: i,
            measurement,
            ingredient,
        });
        if (ingredient === '' || ingredient === null) {
            break;
        }
    }
    ingredients.pop();
    return (
        <div className="page">
            <div className="Recipe">
                <div className="image">
                    <img
                        src={recipeToShow.strMealThumb}
                        alt={recipeToShow.strMeal}
                    />
                </div>
                <div className="instructions">
                    <h2>{recipeToShow.strMeal}</h2>
                    <p className="strong">Ingredients:</p>
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                <span>{ingredient.measurement}</span>
                                <span>&nbsp;</span>
                                {ingredient.ingredient}
                            </li>
                        ))}
                    </ul>
                    <p className="strong">Instructions:</p>
                    <p>{recipeToShow.strInstructions}</p>
                </div>
            </div>
        </div>

    );
};

export default RecipePage;
