import React from 'react';
import './SearchForm.css';
// eslint-disable-next-line react/prefer-stateless-function
export default class SearchFormCategory extends React.Component {
    render() {
        const { submitMethod, cuisines } = this.props;
        return (
            <>
                <form
                    className="searchForm"
                    onSubmit={((event) => submitMethod(event))}
                >
                    <p>Search by cuisine</p>
                    <select id="cuisines" name="cuisines">
                        {
                            cuisines.meals.map((cuisine, index) => (
                                <option
                                    key={`type-${index + 1}`}
                                    name={cuisine.strArea}
                                >
                                    {cuisine.strArea}
                                </option>
                            ))
                        }
                    </select>
                    <button type="submit">Search</button>
                </form>
            </>
        );
    }
}
