import React from 'react';
import ListOfCategories from '../ListOfCategories/ListOfCategories';
import ListOfCuisines from '../ListOfCuisines/ListOfCuisines';
import ListOfIngredients from '../ListOfIngredients/ListOfIngredients';

const ListOfRecipes = () => {

    return(
        <div className='listOfRecipes'>
            <div className="form">
                <h1>Search for recipes</h1>
                <ListOfCategories/>
                <ListOfCuisines/>
                <ListOfIngredients/>
            </div>

        </div>
    )
}

export default ListOfRecipes;

