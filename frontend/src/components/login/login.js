import React, {useState} from 'react';
import { Router, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../signup/signUp.css';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        if(event.target.id === "email"){setEmail(event.target.value)};
        if(event.target.id === "password"){setPassword(event.target.value)};
    }
    const sendDataToExpress = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/login", {
            email, password
        }).then((res) => {
            console.log(res.data);
         if (res.data.status === "login okay") {
            history.push('/main');
        } else if (res.data.status === "login not okay") {
            if (window.confirm("Login credentials not found.\n \nSignup?")) {
                history.push('/', '/login');
            }
            ;
        }})
    }
    return(
        <div>
            <form onSubmit={sendDataToExpress} className="signUpForm">
                <h2>Log In</h2>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email"  autoComplete = "off" value={email} id="email" className="signUpInput" onChange={handleChange}></input>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={password} id="password" className="signUpInput" onChange={handleChange}></input>

                <input type="submit" name="submit" className="signUpSubmit"></input>
            </form>
        </div>
    );
};

export default Login;