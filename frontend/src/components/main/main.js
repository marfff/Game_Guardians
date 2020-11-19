import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';

function MainPage() {
    const [session, setSession] = useState({});
    useEffect(() => {
        if(session.session !== null) {
            console.log("line 8 has started")
            axios.post('http://localhost:5000/loginCheck').then((res) => {
                setSession(res.data);
            })
        }
    })
    return(
        <div>
            {(session.status === 'in') ? <h1>YOU ARE LOGGED IN</h1> : <h1>YOU ARE NOT LOGGED IN</h1>}
            <p>status: {session.status}</p>
            <p>session: {session.session}</p>
            <p>email: {session.email}</p>

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