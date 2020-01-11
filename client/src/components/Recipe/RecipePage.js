import React, { useState, useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import RecipeService from '../../services/RecipeService';
import '../ListOfCategories/ListOfResults.css';
import './RecipePage.css';
import Recipe from './Recipe';


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
                <MoonLoader />
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
        <section className="section">
            <div className="container">
                <div className="Recipe">
                    <Recipe
                        ingredients={ingredients}
                        recipeToShow={recipeToShow}
                        token={props.token}
                        recipeId={props.match.params.id}
                    />
                </div>
            </div>
        </section>


    );
};

export default RecipePage;
