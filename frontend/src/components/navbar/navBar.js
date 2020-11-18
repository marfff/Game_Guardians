import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GG_logo.png';
import './navBar.css';

function Navbar(props) {
    return(
    <nav>
        <div>
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className = "divSearch">
            <input className = "searchBar" placeholder = "🔍    Search"/>
        </div>
        <div className = "divLinks">
            <ul>
                <li><Link to="/main">Home Page</Link></li>
                <li><Link to="/createReview">Create Review</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/">Sign Up</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;