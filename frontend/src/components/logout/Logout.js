import React from 'react';
import { Link } from 'react-router-dom';
import './logout.css';

function Logout() {

    sessionStorage.removeItem("email");
    sessionStorage.removeItem("login");

    return(
        <div class="logoutWrapper">
            <h1>Successfully Logged Out</h1>
            <h3>Goodbye for now!
                <br/>
                <br/>
            Click below to navigate back to the login page.
            </h3>
            <a id="logoutLink"><Link to="/login">Log me back in!</Link></a>
        </div>
    );
};

export default Logout;