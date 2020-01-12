import React from 'react';
import RecipeService from '../../services/RecipeService';

export default class SaveRecipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            status: '',
        }
    };

    handleSave = async () => {
        const recipe = {
            recipe_id: this.props.recipeData.recipe_id,
            name: this.props.recipeData.name,
        };
        const response = (await RecipeService.saveRecipe(recipe, this.props.token)).data;

        if(response[1]){
            this.setState({
                message: 'Recipe was successfully added to your favourites.',
                status: 'success'
            })
        } else{
            this.setState({
                message: 'Recipe is already added to your favourites.',
                status: 'warning'
            })
        }
    };

    render() {
        const {message,status} = this.state;
        if (this.props.token === null) {
            return(
                <p>Login to save a recipe to your favourites</p>
            );
        }
        return (
            <React.Fragment>
                <button className="btn btn-prim" onClick={this.handleSave}>Save to favourites</button>
                <div className={status}>{message}</div>
            </React.Fragment>
        );
    };
};
