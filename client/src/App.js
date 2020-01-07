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
                                <Link to="/ingredient">Search by ingredient</Link>
                            </li>
                            <li>
                                <Link to="/category">Search by category</Link>
                            </li>
                            <li>
                                <Link to="/cuisine">Search by cuisine</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
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
