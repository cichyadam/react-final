import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import ListOfCategories from './components/ListOfCategories/ListOfCategories';
import ListOfCuisines from './components/ListOfCuisines/ListOfCuisines';
import ListOfIngredients from './components/ListOfIngredients/ListOfIngredients';
import RecipePage from './components/Recipe/RecipePage';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <a>Search by</a>
                                    <div className="dropdownContent">
                                        <Link to="/ingredient">Ingredient</Link>
                                        <Link to="/category">Category</Link>
                                        <Link to="/cuisine">Cuisine</Link>
                                    </div>
                                </div>

                            </li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">

                        </Route>
                        <Route path="/ingredient">
                            <ListOfIngredients />
                        </Route>
                        <Route path="/category">
                            <ListOfCategories />
                        </Route>
                        <Route path="/cuisine">
                            <ListOfCuisines />
                        </Route>
                        <Route
                            exact
                            path="/recipe/:id"
                            render={(props) => (
                                <RecipePage {...props} />
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
