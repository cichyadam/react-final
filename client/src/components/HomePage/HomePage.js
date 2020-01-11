import React from 'react';
import './HomePage.css';
// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.Component {
    render() {
        return (
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Recipe Website</h1>
                    <p>Look up for many different recipes and save your favourite ones !</p>
                </div>
            </div>
        );
    }
}
