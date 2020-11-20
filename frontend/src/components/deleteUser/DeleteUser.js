import React, {useState} from 'react';
import { Router, useHistory } from 'react-router-dom';
import axios from 'axios';

function DeleteUser() {

    const email = sessionStorage.getItem("email");
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    
    const handleChange = (event) => {
        if (event.target.id === "password"){setPassword(event.target.value)};
        if (event.target.id === "verifyPassword"){setVerifyPassword(event.target.value)};
    }
    const sendDataToExpress = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/deleteUser", {
            email: email,
            password: password,
            verifyPassword: verifyPassword
        }).then((res) => {
            console.log(res.data);
            if (res.data.status === "user deleted") {
                console.log("user deleted");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("login");
                // sessionStorage.setItem("email", [email]);
                history.push('/signUp');
            } else {
                alert(res.data.message);
                setPassword("");
                setVerifyPassword("");
            }
        })
    }
    return(<div>
            {(sessionStorage.getItem("login")) ?
            <div ClassName ="signup-background">
                <form onSubmit={sendDataToExpress} className="signUpForm">
                    <h2>😭Delete Game Guardians Account?😭</h2>
                    <label htmlFor="email" name="email" value={email}>{email}</label>

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} id="password" className="signUpInput" onChange={handleChange}></input>

                    <label htmlFor="verifyPassword">Verify Password: </label>
                    <input type="password" name="verifyPassword" value={verifyPassword} className="signUpInput" id="verifyPassword" onChange={handleChange}></input>

                    <input type="submit" name="submit" className="signUpSubmit"></input>
                </form>
            </div>
            :
            <div>
                <h1>YOU ARE NOT LOGGED IN</h1>
            </div>
        }
        </div>

    );
};

export default DeleteUser;