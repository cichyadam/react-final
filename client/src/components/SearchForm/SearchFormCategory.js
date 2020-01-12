import React from 'react';
import './SearchForm.css';

const SearchFormCategory = (props) => {
    const { submitMethod, categories } = props;
    return (
        <div className="container container-form">
            <h2>Search by category</h2>
            <form
                className="form-search"
                onSubmit={((event) => submitMethod(event))}
            >
                <div className="input-wrapper">
                    <select id="categories" name="categories">
                        {categories.meals.map((category, index) => (
                            <option
                                key={`type-${index + 1}`}
                                name={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                    <button className="btn btn-prim">Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchFormCategory;
