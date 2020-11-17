import React from 'react';
import './signUp.css';

function signUp() {
    return(
        <div>
            <h1>Sign in Page</h1>
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

export default signUp;