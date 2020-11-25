import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import './navBar.css'


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            reviews:[],
            selectedOption: 'null'
        }
    }
    getGames() {
        axios.get('http://localhost:5000/games', {})
            .then(res => {
                const data = res.data;
                this.setState({
                    games: data.map(game => {
                        return { id: game._id, value: game.title.toLowerCase(), label: game.title }
                    })
                })
                axios.get('http://localhost:5000/reviews', {})
                    .then(res => {
                        const data = res.data;
                        console.log(data);
                        this.setState({
                            reviews: data.map(review => {
                                return { id: review.id, value: review.title.toLowerCase(), label: `Review ${review.title}` }
                            })
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }
/*
    getReviews() {
        axios.get('http://localhost:5000/reviews', {})
        .then(res => {
            const data = res.data;
            this.setState({title: data.map(review => {
                return{id: review.id, value: review.title.toLowerCase(), label: `Review ${review.title}`}
            })})
        })
        .catch((error) => {
            console.log(error)
        })
    }
*/

    componentDidMount(){
        this.getGames()
        //this.getReviews()
    }

    handleChange = async (selectedOption) => {
        this.setState({ selectedOption });
        sessionStorage.setItem("id",selectedOption.id);
    }
    refreshPage = () => {
        window.location.reload();
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
                    options={[...this.state.games, ...this.state.reviews]}
                />
                <Link to='/game' className="searchButton" onClick={this.refreshPage}>🔍</Link>
            </div>
        )
    }
}