import React from 'react';

import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default class AuthNav extends React.Component {
    render() {
        const { token } = this.props;
        if (token === null) {
            return (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </>
            );
        }
        return (
            <>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </>
        );
    }
}
