import React, { useState, useEffect } from 'react';
import FilterService from '../../services/FilterService';
import SearchService from '../../services/SearchService';

const ListOfCategories = () => {
    const [categories,updateCategories] = useState([]);
    const [searchedCategoryRecipes,setSearchedCategory] = useState([]);

    const getCategories = async () => {
        const response = (await FilterService.getCategories()).data;
        updateCategories(response);
    }

    useEffect(() => {
        getCategories();
    }, []);

    const handleCategory = async event => {
        event.preventDefault();
        let chosenCategory = document.querySelector('#categories').value;
        try {
            const response = await SearchService.getItemsByCategory(chosenCategory);
            setSearchedCategory(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };


    if (categories.length === 0 ){
       return (
           <div>Loading categories</div>
       )
    } else {
        return(
            <div>
                <form
                    onSubmit={event => handleCategory(event)}
                >
                    <select id='categories' name="categories">
                        {
                            categories.meals.map( (category,index) =>
                                <option
                                    key={`type-${index + 1}`}
                                    name={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            )
                        }
                    </select>
                    <button>Search by category</button>
                </form>

                <div
                    className="recipes-container"
                    style={{
                        display:'grid',
                        gridTemplateColumns: 'repeat(4,1fr)'
                    }}
                >
                    {(searchedCategoryRecipes.length !== 0 &&
                        searchedCategoryRecipes.meals.map((recipe) => (
                            <div key={recipe.idMeal} id={recipe.idMeal}>
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                    style={{
                                        width: '50%'
                                    }}
                                />
                                <h3>{recipe.strMeal}</h3>
                            </div>
                        ))
                    ) || (
                        <div>There are no recipes matching your criteria</div>
                    )}
                </div>
            </div>
        )
    }

}

export default ListOfCategories;