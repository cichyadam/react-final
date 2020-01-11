import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default class SearchResultsCuisines extends React.Component {
    render() {
        const { searchedCuisineRecipes } = this.props;
        return (
            <div className="recipes-container">
                {(searchedCuisineRecipes.length !== 0
                    && searchedCuisineRecipes.meals.map((recipe) => (
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
                    <div className="noResult">There are no recipes matching your criteria</div>
                )}
            </div>
        );
    }
}
