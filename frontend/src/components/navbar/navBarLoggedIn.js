import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GG_logo.png';
import './navBar.css';

const Navbar = props => {
    return (
        <nav>
            <div className="divLogoLoggedIn">
                <img src={logo} className="logoLoggedIn" alt="logo" />
            </div>
            <div className = "divSearch">
                <input className = "searchBar" placeholder = "🔍 Search For a Game"/>
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