import React from 'react';
import axios from 'axios';
import Images from '../images/gameImages/images';
import './games.css';

export default class postGames extends React.Component{
    constructor(props) {
        super(props);
        this.loadGames = this.loadGames.bind(this);
        this.state = {
            details: [],
            isLoaded: null,
        }
    }
    loadGames(){
        const id = sessionStorage.getItem("id");
        axios.post("http://localhost:5000/games/" + id, {id})
        .then((res) => {
            console.log(res.data);
            const data = res.data;
            this.setState({details: data})})
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        if (this.state.details.length == 0) {this.loadGames()}
    }
    render(){
        return(
            <h2>{this.state.details.map((detail) => {
                return <ul>
                            <li className="gamesLogo"><Images id = {detail._id}/></li>
                            <li className="gamesListTitle">{detail.title}</li>
                            <li>{detail.synopsis}</li>
                            <li>PEGI: {detail.pegi}</li>
                            <li>stars: {detail.stars}</li>
                            <li>educational: {detail.educational}</li>
                            <li>Adult Themes: {detail.adult_themes}</li>
                            <li>violence: {detail.violence}</li>
                        </ul>
            })}</h2>
        )
    }
}
// id
// title
// short_desc
// pegi
// stars
// synopsis
// educational
// adult_themes
// violence