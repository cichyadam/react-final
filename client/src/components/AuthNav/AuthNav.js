import React from 'react';

import {Link} from 'react-router-dom';

export default class AuthNav extends React.Component {
    render() {
        const {token} = this.props;
        if (token === null){
            return(
                <React.Fragment>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </React.Fragment>
        );
    }

}