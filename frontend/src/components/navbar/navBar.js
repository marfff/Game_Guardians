import React from 'react';
import logo from '../images/GG_logo.png';
import './navBar.css';

function Navbar() {
    return(
    <nav>
        <div>
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className = "divSearch">
            <input className = "searchBar" placeholder = "🔍   Search"/>
        </div>
        <div className = "divLinks">
            <ul>
                <li><a href ="/main">Home Page</a></li>
                <li><a href ="/signUp">Sign Up</a></li>
                <li><a href ="/login">Login</a></li>
                <li><a href ="/review">Create Review</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;