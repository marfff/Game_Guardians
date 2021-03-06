import React from 'react';
import './main.css';
import Slider from './Slider/Slider';
import Games from '../game/gamesSummary';
import Reviews from '../reviews/reviewSummary';

function MainPage() {
    const email = sessionStorage.getItem("email");
    const pos = email.indexOf('@');
    const user = email.substr(0,pos);
   
    return(
        <div className="mainDiv">
            {(sessionStorage.getItem("login")) ?
                <div class="successMain">
                    <span class="welcomeLogin"><h1>Welcome back </h1><h1 id="userWelcome">{user}!</h1></span>
                    <Slider />  
                    <div className="recentGames">   
                        <Games />
                        <Reviews />
                    </div>       
                </div>
                
                
                : <h1>YOU ARE NOT LOGGED IN</h1>}
            
        </div>
    )
};

export default MainPage;