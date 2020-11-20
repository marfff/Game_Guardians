import React from 'react';
import './userPage.css';


function UserPage() {

    return(
        <div>
        {(sessionStorage.getItem("login")) ? 
            <div>
            <h1>Welcome,Game Guardian!</h1>
                <p>Here you can find all you need to manage your account and reviews.
                <br/>
                My submitted reviews (find reviews with the email attached?)
                <br/>
                Delete account</p>
            </div>
            : <h1>YOU ARE NOT LOGGED IN</h1>}
        </div>
    )
};

export default UserPage;