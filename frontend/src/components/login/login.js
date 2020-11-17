import React from 'react';
import './login.css';

function login() {
    return(
        <div>
            <h1>Login Page</h1>
            <form action="/signUp" method="POST">
                <label for="email">Email: </label>
                <input type="text" name="email"></input>
                <label for="password">Password: </label>
                <input type="password" name="password"></input>
                <input type="submit" name="submit"></input>
            </form>
        </div>
    );
};

export default login;