import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GG_logo.png';
import './navBar.css';

const Navbar = props => {
    return (
        <nav>
            <div className="divLogo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className = "divLinks">
                <ul className = "navBarLinks">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;