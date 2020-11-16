import React from 'react';
import logo from '../images/GG_logo.png';
import './navBar.css'

function Navbar() {
    return(
    <nav>
        <img src={logo} className="logo" alt="logo" />
        <input></input>
    </nav>
    )
}

export default Navbar;