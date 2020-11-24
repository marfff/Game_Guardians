import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './deleteUser.css';

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
        axios.delete("http://localhost:5000/users", {data: {
            email: email,
            password: password,
            verifyPassword: verifyPassword
        }}).then((res) => {
            console.log(res.data);
            if (res.data.status === "Account deleted") {
                alert("Account deleted");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("login");
                history.push('/');
            } else {
                alert(res.data.message);
                setPassword("");
                setVerifyPassword("");
            }
        }).catch((err) => {
            alert(`Account not deleted.`)
        })
    }
    return(<div>
            {(sessionStorage.getItem("login")) ?
            <div ClassName ="deleteUser-background">
                <form onSubmit={sendDataToExpress} className="deleteUserForm">
                    <h2>😭😭😭😭😭😭😭😭<br/> Delete Game Guardians Account?</h2>
                    <label htmlFor="email" name="email" id="email" value={email}>{email}</label>

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} id="password" className="deleteUserInput" onChange={handleChange}></input>

                    <label htmlFor="verifyPassword">Verify Password: </label>
                    <input type="password" name="verifyPassword" value={verifyPassword} className="deleteUserInput" id="verifyPassword" onChange={handleChange}></input>

                    <input type="submit" name="submit" className="deleteUserSubmit"></input>
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