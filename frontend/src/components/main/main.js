import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';
import Slider from './Slider/Slider';
import Games from '../game/games'

function MainPage() {
    const email = sessionStorage.getItem("email");
    const pos = email.indexOf('@');
    const user = email.substr(0,pos);
   
    return(
        <div className="mainDiv">
            {(sessionStorage.getItem("login")) ?
                <div class="successMain">
                    <span><h1>Welcome back </h1><h1 id="userWelcome">{user}!</h1></span>
                    <Slider />  
                    <div className="recentGames">
                        <h1 className="recentGamesHeader">Recent Games: </h1>   
                        <Games />

                    </div>       
                </div>
                
                
                : <h1>YOU ARE NOT LOGGED IN</h1>}
            
        </div>
    )
};

export default MainPage;