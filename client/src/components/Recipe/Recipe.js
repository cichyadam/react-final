import React from 'react';
import SaveRecipe from '../SaveRecipe/SaveRecipe';

const Recipe = (props) => {
    const {
        recipeToShow, ingredients, token, recipeId,
    } = props;

    const recipeData = {
        recipe_id: recipeId,
        name: recipeToShow.strMeal,
    };

    return (
        <div className="recipe-full">
            <div className="grid-2">
                <div>
                    <div className="div-img">
                        <img
                            className="img"
                            src={recipeToShow.strMealThumb}
                            alt={recipeToShow.strMeal}
                        />
                    </div>
                </div>
                <div>
                    <h1>{recipeToShow.strMeal}</h1>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                <span>{ingredient.measurement}</span>
                                <span>&nbsp;</span>
                                {ingredient.ingredient}
                            </li>
                        ))}
                    </ul>
                    <SaveRecipe token={token} recipeData={recipeData} />
                </div>
            </div>
            <div className="instructions">
                <p className="strong">Instructions:</p>
                <p>{recipeToShow.strInstructions}</p>
            </div>
        </div>
    );
}

export default Recipe;
