import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';

function MainPage() {
   
    return(
        <div>
            {(sessionStorage.getItem("login")) ? <h1>YOU ARE LOGGED IN</h1> : <h1>YOU ARE NOT LOGGED IN</h1>}
        </div>
    )
    // if (email !== null) {
    //     let pos = email.indexOf('@');
    //     let user = email.substr(0,pos);


    //     return(

    //         <div className = "mainDiv">
    //             <h1>Welcome {user}!</h1>
    //             <h1>Main Review Page</h1>
    //         </div>
    //     )
    // } else {
    //     return(
    //     <div>
    //         <h1>Unauthorised</h1>
    //     </div>
    // )}
};

export default MainPage;