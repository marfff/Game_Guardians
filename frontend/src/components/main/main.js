import React from 'react';
import './main.css';

function mainPage() {
    let email = sessionStorage.getItem("email");
    let pos = email.indexOf('@');
    let user = email.substr(0,pos);
    return(
        <div className = "mainDiv">
            <h1>Welcome {user}!</h1>
            <h1>Main Review Page</h1>
        </div>
    );
};

export default mainPage;