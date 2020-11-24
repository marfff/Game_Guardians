import React, { Component } from 'react';
import axios from 'axios';
import { startSession } from 'mongoose';
import './userReviews.css';

export default class Reviews extends React.Component{
    constructor(props) {
        super(props);
        this.getReviews = this.getReviews.bind(this);
        this.state = {
            reviews: [],
            isLoaded: null,
        }
    }
    getReviews() {
        axios.get(`http://localhost:5000/userReviews/${sessionStorage.getItem("email")}`,{})
        .then(res => {
            this.setState({reviews: res.data})})
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        // this.getReviews()
        if (this.state.reviews.length == 0) {this.getReviews()}
    }

    render() {
        const email = sessionStorage.getItem("email");
        return (
            <div className="reviewsList">
                <label htmlFor="email" name="email" id="email" value={email}>{email}</label>
                <h3>{this.state.reviews.map((review, index) => {
                    return <ul key={index}>
                                {/* <li className="ReviewsLogo"><Images id = {review._id}/></li> */}
                                <li className="reviewsListTitle">Game: {review.title}</li>
                                <li className="reviewsListReview">Review: {review.review}</li>
                                <li className="reviewsListStars">Stars: {review.starsgiven}</li>
                            </ul>
                    })}
                </h3>
            </div>
        )
    }
}