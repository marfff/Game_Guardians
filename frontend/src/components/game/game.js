import React, { Component } from 'react';
import axios from 'axios';
import './games.css'
import { startSession } from 'mongoose';


import Angry Birds Star Wars from './images/Angry Birds Star Wars.png';
import Blair Witch from './images/Blair Witch.png';
import Bus Drive Simulator from './images/Bus Drive Simulator.jpeg';
import Castle Storm 2 from './images/Castle Storm 2.jpeg';
import Crab Cakes Rescue from './images/Crab Cakes Rescue.png';
import Crysis Remastered from './images/Crysis Remastered.png';
import Farming Simulator 19 from './images/Farming Simulator 19.jpeg';
import Fifa 21 from './images/Fifa 21.jpeg';
import Final Fantasy 7 from './images/Final Fantasy 7.png';
import Hunting Simulator from './images/Hunting Simulator.jpeg';
import John Wick Hex from './images/John Wick Hex.jpeg';
import Kart Racers from './images/Kart Racers.jpeg';
import Lets Sing Queen from "./images/Lets Sing Queen.png";
import Lets Sing 21 from './images/Lets Sing 21.jpeg';
import Lost Wing from './images/Lost Wing.png';
import Mad Tower Tycoon from './images/Mad Tower Tycoon.jpeg';
import Marvels Spider Man Miles Morales from './images/Marvels Spider Man Miles Morales.jpeg';
import Monster Truck Championship from './images/Monster Truck Championship.jpeg';
import Morbid from ./images/Morbid.png;
import My Universe School Teacher from './images/My Universe School Teacher.jpeg';
import Naught from ‘.images/Naught.png’;
import Need for Speed Hot Pursuit from './images/Need for Speed Hot Pursuit.jpeg';
import NHL 21 from './images/NHL 21.png';
import Paw Patrol Mighty Pups from './images/Paw Patrol Mighty Pups.png';
import Pistol Whip from "./images/Pistol Whip.jpg";
import Port Royale 4 from './images/Port Royale 4.jpeg';
import Separation from ‘,images/Separation.jpg’;
import Skelattack from ‘./images/Skelattack.jpg’;
import Skully from ‘./images/Skully.png’;
import Star Wars Squadrons from './images/Star Wars Squadrons.jpeg';
import Theme Park Simulator from './images/Theme Park Simulator.jpeg';
import Transformers Battlegrounds from './images/Transformers Battlegrounds.jpeg';
import Who Wants to Be a Millionaire from './images/Who Wants to Be a Millionaire.jpeg';
import WWE 2K Battlegrounds from './images/WWE 2K Battlegrounds.jpeg';


export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.getGames = this.getGames.bind(this);
        this.state = {
            games: [
                {
                title: props.title,
                short_desc: props.short_desc,
                pegi: props.pegi,
                stars: props.stars,
                synopsis: props.synopsis,
                }
            ]
        }
    }
    getGames() {
        axios.get('http://localhost:5000/games',{})
        .then(res => {
            this.setState({games: res.data})})
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.getGames()
        // if (this.state.games.length == 0) {this.getGames()}
    }

    render() {

        return (
            <div className="searchBarButton">
            <h1>{games.title}</h1>
            <h1>{games.short_desc}</h1>
            <h1>{games.props.pegi}</h1>
            </div>
        )
    }
}