import React, { Component } from 'react';
import axios from 'axios';
import './reviews.css'
import { startSession } from 'mongoose';

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
        axios.get('http://localhost:5000/reviews',{})
        .then(res => {
            this.setState({reviews: res.data})})
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        if (this.state.reviews.length == 0) {this.getReviews()}
    }

    render() {

        return (
            <div className="reviewsList">
            <h1 id="reviewsTitle">All Reviews</h1>
            <h2>{this.state.reviews.map((review, index) => {
                return <ul><a href={`/review/${review._id}`} key={index}>
                            <li className="reviewTitle">{review.title}</li>
                            <li className="reviewEmail">{review.email}</li>
                            <li className="reviewReview">{review.review}</li>
                            <li className="reviewStarsgiven">Star Rating: {review.starsgiven}</li>
                        </a></ul>
            })}</h2>
            </div>
        )
    }
}