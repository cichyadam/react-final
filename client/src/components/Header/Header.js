import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { token } = props;
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">Home</Link>
                </div>
                <nav>
                    <div className="dropdown">
                        <a href="/ingredient">Search</a>
                        <div className="dropdownContent">
                            <Link to="/ingredient">Ingredient</Link>
                            <Link to="/category">Category</Link>
                            <Link to="/cuisine">Cuisine</Link>
                        </div>
                    </div>
                </nav>
                <div>
                    {token ? (
                        <div className="nav-user">
                            <Link to="/profile">Profile</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    ) : (
                        <div className="nav-user">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
