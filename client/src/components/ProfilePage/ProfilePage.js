import React from 'react';
import {NavLink} from "react-router-dom";
import RecipeService from '../../services/RecipeService';
import './ProfilePage.css'

export default class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favourites:[]
        }
    };

    componentDidMount() {
        const { username, token } = this.props
        if (username) {
            this.getFavourites()
        }
    }

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
            console.log(response);
            this.getFavourites();
        } catch (err){

        }
    }

    render() {
        const {username} = this.props;
        const {favourites} = this.state;

        return (
            <section className="section profile">
                <div className="container">
                    <div className="profileInfo">
                        <h1>Hi {username}</h1>
                    </div>
                    <div className="favourite-recipes">
                        <h3>Your favourite recipes</h3>
                        <table>
                            <thead>
                            <tr className="table-row">
                                <th>Recipe name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                favourites.map((recipe,index)=>(
                                    <tr key={index}  className="table-row">
                                        <td>
                                            <NavLink to={`recipe/${recipe.recipe_id}`}>
                                                {recipe.name}
                                            </NavLink>
                                        </td>
                                        <td>
                                            <a onClick={() => this.handleDelete(recipe.recipe_id)}>Delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}