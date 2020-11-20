import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Router, useHistory } from 'react-router-dom';
import axios from 'axios'; 


function UserPage() {
    return(
        <div>
        {(sessionStorage.getItem("login")) ? 
            <div>
            <h1>Welcome,Game Guardian!</h1>
                <p>Here you can find all you need to manage your account and reviews.</p>
                <br/>
                <p>My submitted reviews (find reviews with the email attached?)</p>
                <br/>
                <li><Link to="/deleteUser">Delete Account</Link></li>
            </div>
            : <h1>YOU ARE NOT LOGGED IN</h1>}
        </div>
    )
};

export default UserPage;