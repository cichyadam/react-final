import React from 'react';
import SaveRecipe from "../SaveRecipe/SaveRecipe";

export default class Recipe extends React.Component{
    render() {
        const {recipeToShow, ingredients, token, recipeId} = this.props;

        const recipeData = {
            recipe_id : recipeId,
            name: recipeToShow.strMeal
        };

        return (
            <React.Fragment>
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
                    <SaveRecipe token={token} recipeData={recipeData}/>
                </div>
            </React.Fragment>
        );
    }
}