import React, {useState} from 'react';
import axios from 'axios';
import './signUp.css';

function SignUp() {
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
        })
    }
    return(
        <div>
            <h1>Sign in Page</h1>
            <form onSubmit={sendDataToExpress}>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" onChange={handleChange}></input>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={handleChange}></input>

                <label htmlFor="verifyPassword">Verify Password: </label>
                <input type="password" name="verifyPassword" id="verifyPassword" onChange={handleChange}></input>

                <input type="submit" name="submit"></input>
            </form>
        </div>
    );
};

export default SignUp;