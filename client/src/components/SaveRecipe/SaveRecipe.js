import React from 'react';
import RecipeService from '../../services/RecipeService';

export default class SaveRecipe extends React.Component {
    handleSave = async () => {
        const recipe = {
            recipe_id: this.props.recipeData.recipe_id,
            name: this.props.recipeData.name,
        }
        console.log(recipe)
        const response = (await RecipeService.saveRecipe(recipe, this.props.token)).data;
        console.log(response)
    }
    render() {

        if (this.props.token === null) {
            return(
                <p>Login or Register to save a recipe to favourite recipes</p>
            );
        };
        return (
            <button onClick={this.handleSave}>Save to favourites</button>
        )
    }
}