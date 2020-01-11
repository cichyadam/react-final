import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default class SearchResultsCategories extends React.Component {
    render() {
        const { searchedCategoryRecipes } = this.props;
        return (
            <div
                className="recipes-container"

            >
                {(searchedCategoryRecipes.length !== 0
                    && searchedCategoryRecipes.meals.map((recipe) => (
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
