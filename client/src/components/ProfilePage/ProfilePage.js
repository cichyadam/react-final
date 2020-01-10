import React from 'react';
import {NavLink} from "react-router-dom";
import RecipeService from '../../services/RecipeService';

export default class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favourites:[]
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.favourites === this.state.favourites) {
            this.getFavourites()
        }
    }

    getFavourites = async () => {
        try {
            const response = (await RecipeService.getFavourites(this.props.token)).data;
            this.setState({
                    favourites: response,
            }
            )
        } catch (err) {

        }
    };

    handleDelete = async (id) =>{
        try{
            const data = {id}
            const response = (await RecipeService.removeRecipe(data,this.props.token)).data;
            console.log(response)
        } catch (err){

        }
    }

    render() {
        const {username} = this.props;
        const {favourites} = this.state;

        return (
            <div style={{
                paddingTop: '60px',
            }}>
                <h1>Hi {username}</h1>
                <h3>Your favourite recipes:</h3>
                {
                    favourites.map((recipe,index)=>(
                        <div key={index}>
                            <NavLink to={`recipe/${recipe.recipe_id}`}>
                               <p>{recipe.name}</p>
                            </NavLink>
                            <button onClick={() => this.handleDelete(recipe.recipe_id)}>Delete from favourites</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}