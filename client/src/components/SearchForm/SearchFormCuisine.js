import React from 'react';
import './SearchForm.css';

const SearchFormCategory = (props) => {
    const { submitMethod, cuisines } = props;
    return (
        <div className="container container-form">
            <h2>Search by cuisine</h2>
            <form
                className="form-search"
                onSubmit={((event) => submitMethod(event))}
            >
                <div className="input-wrapper">
                    <select id="cuisines" name="cuisines">
                        {cuisines.meals.map((cuisine, index) => (
                            <option
                                key={`type-${index + 1}`}
                                name={cuisine.strArea}
                            >
                                {cuisine.strArea}
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
