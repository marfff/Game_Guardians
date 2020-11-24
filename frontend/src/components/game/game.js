import React from 'react';
import axios from 'axios';
import './games.css';

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
            <div className="individualGame">
                <h1>{this.state.games.title}</h1>
                <h1>{this.state.games.short_desc}</h1>
                <h1>{this.state.games.props.pegi}</h1>
            </div>
        )
    }
}