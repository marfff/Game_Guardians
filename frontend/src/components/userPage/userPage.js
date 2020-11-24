import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Router, useHistory } from 'react-router-dom';
import axios from 'axios'; 
import './userPage.css'; 
import UserReview from '../userReviews/userReviews';

function UserPage() {
    return(
        <div >
        {(sessionStorage.getItem("login")) ? 
            <div>
                <div class="userBackground">
                    <h1>Welcome, Game Guardian!</h1>
                    <br/>
                    <br/>
                    <p>Here you can see all your reviews!</p>
                    <br/>
                    <li><Link to="/createReview">Write A Review</Link></li>
                    <li><Link to="/deleteUser">Delete Account</Link></li>
                </div>
                <div className="userReview">
                    <UserReview />
                </div>
            </div>
            
            : <h1>YOU ARE NOT LOGGED IN</h1>}
        </div>
    )
};

export default UserPage;