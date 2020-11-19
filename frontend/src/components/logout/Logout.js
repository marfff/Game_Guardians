import React, {useState, useEffect} from 'react';
import { Router, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../signup/signUp.css';

function Logout() {

    const user_id = sessionStorage.getItem("userID");
    const [session, setSession] = useState(user_id);



    useEffect(() => {
        console.log("effecting");
        axios.post('http://localhost:5000/logout').then((res) => {
            setSession(null)
            console.log(res.data)
        })
    })

    return(
        <div>
            <h1>YOU HAVE LOGGED OUT</h1>
        </div>
    );
};

export default Logout;