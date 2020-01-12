import React, { useState } from 'react';
import SearchService from '../../services/SearchService';
import '../SearchForm/SearchForm.css';
import SearchResults from '../SearchResults/SearchResults';

const ListOfIngredients = () => {
    const [searchedIngredientRecipes, setSearchedIngredient] = useState([]);

    const handleIngredient = async (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('#ingredientSearch');
        const chosenIngredient = searchInput.value;
        searchInput.value = '';
        try {
            const response = await SearchService.getItemsByIngredient(chosenIngredient);
            setSearchedIngredient(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <section className="section">
            <div className="container container-form">
                <h2>Search by ingredient</h2>
                <form
                    className="form-search"
                    onSubmit={(event) => handleIngredient(event)}
                >
                    <div className="input-wrapper">
                        <input id="ingredientSearch" type="text" placeholder="Type ingredient" />
                        <button className="btn btn-prim" type="submit">Search</button>
                    </div>
                </form>
            </div>
            <SearchResults results={searchedIngredientRecipes} />
        </section>
    );
};

export default ListOfIngredients;
