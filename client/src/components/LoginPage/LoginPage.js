import React from 'react';
import { Redirect } from 'react-router-dom';


import AuthService from '../../services/AuthService';

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
            error: null
        }
    };

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    };

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {username, password} = this.state;
        const user = {
            username,
            password
        }
        try{
            const response = (await AuthService.login(user)).data;
            const token = response.token;
            const username = response.user.username;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('username', username);
            this.props.saveToken(token);
            this.props.saveUser(username);
        } catch (error) {
            this.setState({
                error: error.response.data.error
            })
        }
    };

    render() {
        const {error} = this.state;

        const {token} = this.props;

        if(token){
            return <Redirect to="/profile" />;
        }


        return (
            <div className="page">
                <div>{error}</div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input name="username" type="text" onChange={this.handleChange}/>
                    <input name="password" type="password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
            </div>
        );

    }
}