import React, { Component } from 'react';
import axios from 'axios';
import './games.css'
import { startSession } from 'mongoose';

export default class Games extends React.Component{
    constructor(props) {
        super(props);
        this.getGames = this.getGames.bind(this);
        this.state = {
            games: [],
            isLoaded: null,
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
        // this.getGames()
        if (this.state.games.length == 0) {this.getGames()}
    }

    render() {

        return (
            <div className="searchBarButton">
            <h1>{this.state.games.map((game, index) => {
                return <ul><a href={`/game/${game._id}`} key={index}><li>{game.title}</li></a></ul>
            })}</h1>
            </div>
        )
    }
}