import React, {useState} from 'react';
import { Router, useHistory } from 'react-router-dom';
import axios from 'axios';
import './signUp.css'; 

function SignUp() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    
    const handleChange = (event) => {
        if (event.target.id === "email"){setEmail(event.target.value)};
        if (event.target.id === "password"){setPassword(event.target.value)};
        if (event.target.id === "verifyPassword"){setVerifyPassword(event.target.value)};
    }
    const sendDataToExpress = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/signup", {
            email: email,
            password: password,
            verifyPassword: verifyPassword
        }).then((res) => {
            console.log(res.data);
            if (res.data.status === "okay") {
                console.log("Everything is fine!");
                sessionStorage.setItem("email", [email]);
                history.push('/main');
            } else {
                alert(res.data.message);
                setPassword("");
                setVerifyPassword("");
            }
        })
    }
    return(
        <div ClassName ="signup-background">
            <form onSubmit={sendDataToExpress} className="signUpForm">
                <h2>Sign up to Game Guardians!</h2>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email"  autoComplete = "off" value={email} id="email" className="signUpInput" onChange={handleChange}></input>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={password} id="password" className="signUpInput" onChange={handleChange}></input>

                <label htmlFor="verifyPassword">Verify Password: </label>
                <input type="password" name="verifyPassword" value={verifyPassword} className="signUpInput" id="verifyPassword" onChange={handleChange}></input>

                <input type="submit" name="submit" className="signUpSubmit"></input>
            </form>
        </div>
    );
};

export default SignUp;