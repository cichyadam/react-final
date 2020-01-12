import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import AuthNav from './components/AuthNav/AuthNav';
import ListOfCategories from './components/ListOfCategories/ListOfCategories';
import ListOfCuisines from './components/ListOfCuisines/ListOfCuisines';
import ListOfIngredients from './components/ListOfIngredients/ListOfIngredients';
import RecipePage from './components/Recipe/RecipePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import LogoutPage from './components/LogoutPage/LogoutPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import HomePage from './components/HomePage/HomePage';
import ChatBox from "./components/ChatBox/ChatBox";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token: null,
            username: null
        }
    };

    componentDidMount() {
        const token = sessionStorage.getItem('token');
        const username = sessionStorage.getItem('username');

        if(token){
            this.setState({token});
        }
        if(username){
            this.setState({username})
        }
    };

    saveUser = (username) => {
        this.setState({username})
    }

    saveToken = (token) => {
        this.setState({token});
    };

    removeToken = () => {
        this.setState({
            token: null,
            username:null
        });
    };


    render() {
        const { token,username } = this.state;


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
                                        <a href="/ingredient">Search by</a>
                                        <div className="dropdownContent">
                                            <Link to="/ingredient">Ingredient</Link>
                                            <Link to="/category">Category</Link>
                                            <Link to="/cuisine">Cuisine</Link>
                                        </div>
                                    </div>
                                </li>
                                <AuthNav token={token}/>
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path="/">
                                <HomePage/>
                            </Route>
                            <Route path="/register">
                                <RegisterPage token={token} saveToken={this.saveToken} saveUser={this.saveUser}/>
                            </Route>
                            <Route path="/login">
                                <LoginPage token={token} saveToken={this.saveToken} saveUser={this.saveUser}/>
                            </Route>
                            <Route path="/logout">
                                <LogoutPage logout={this.removeToken} />
                            </Route>
                            <Route
                                path="/profile"
                                render={(props) => <ProfilePage {...props} username={username} token={token} />}
                            />
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
                                    <RecipePage {...props} token={token} />
                                )}
                            />
                        </Switch>
                        <ChatBox name={username} />
                    </div>
                </Router>
            </div>
        );

    }
}

export default App;
