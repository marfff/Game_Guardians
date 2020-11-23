import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GG_logo.png';
import SearchBar from './searchBar';
import './navBar.css';

function Navbar(props){
    return (
        <nav>
            <div className="divLogoLoggedIn">
                <img src={logo} className="logoLoggedIn" alt="logo" />
            </div>
            <div className = "divSearch">
                <SearchBar />
            </div>
            <div className="divLinksLoggedIn">
                <ul>
                    <li><Link to="/main">Home Page</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/createReview">Create Review</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;