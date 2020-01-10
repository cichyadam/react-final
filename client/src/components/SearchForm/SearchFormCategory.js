import React from 'react';
import './SearchForm.css';

export default class SearchFormCategory extends React.Component{
    render() {
        const {submitMethod,categories} = this.props;
        return (
            <React.Fragment>
                <form
                    className="searchForm"
                    onSubmit={(event => submitMethod(event))}
                >
                    <p>Search by category</p>
                    <select id="categories" name="categories">
                        {
                            categories.meals.map((category, index) => (
                                <option
                                    key={`type-${index + 1}`}
                                    name={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))
                        }
                    </select>
                    <button type="submit">Search</button>
                </form>
            </React.Fragment>
        );
    }
}