import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import './navBar.css'

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titles: [],
            selectedOption: 'null'
        }
    }
    getGames() {
        axios.get('http://localhost:5000/games',{})
        .then(res => {
            const data = res.data;
            this.setState({titles: data.map(game => {
                return{id: game._id, value: game.title.toLowerCase(), label: game.title}
            })}) 
        })
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.getGames()
    }
    handleChange = async (selectedOption) => {
        this.setState({ selectedOption });
        sessionStorage.setItem("id",selectedOption.id);
    }
    // searchGame = (event) => {
    //     console.log("hello from onChange", event.target.value)
    //     this.setState
    // }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="searchBarButton">
                <Select
                    className="searchBar"
                    id="searchBar"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.titles}
                />
                <Link to='/game'>🔍</Link>
            </div>
        )
    }
}