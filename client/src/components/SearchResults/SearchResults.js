import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchResults = (props) => {
    const { results } = props;
    return (
        <div className="container results">
            {(results.length !== 0
                && results.meals !== null
                && results.meals.map((recipe) => (
                    <NavLink
                        className="recipe-item"
                        key={recipe.idMeal}
                        id={recipe.idMeal}
                        to={`recipe/${recipe.idMeal}`}
                    >
                        <div className="div-img">
                            <img
                                className="img"
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                            />
                        </div>
                        <h3>{recipe.strMeal}</h3>
                    </NavLink>

                ))
            ) || (
                <div className="noResult">There are no recipes matching your criteria</div>
            )}
        </div>
    );
};

export default SearchResults;
