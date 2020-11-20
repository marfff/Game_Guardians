import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './navBar.css'

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titles: [],
            selectedOption: null
        }
    }
    getGames() {
        axios.get('http://localhost:5000/games',{})
        .then(res => {
            const data = res.data;
            console.log(data);
            this.setState({titles: data.map(game => {
                return{value: game.title.toLowerCase(), label: game.title}
            })})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.getGames()
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption })
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="searchBarButton">
            <Select
                className="searchBar"
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.titles}
            />
            <button type="submit" className="searchButton">🔍</button>
            </div>
        )
    }
}