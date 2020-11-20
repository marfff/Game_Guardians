import React from 'react';
import { useHistory } from 'react-router-dom';
import '../signup/signUp.css';

function Logout() {

    sessionStorage.removeItem("email");
    sessionStorage.removeItem("login");


    return(
        <div>
            <h1>YOU HAVE LOGGED OUT</h1>
        </div>
    );
};

export default Logout;