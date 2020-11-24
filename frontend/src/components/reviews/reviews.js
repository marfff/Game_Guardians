import React, { Component } from 'react';
import axios from 'axios';
import './reviews.css'
import { startSession } from 'mongoose';

export default class Review extends React.Component{
    constructor(props) {
        super(props);
        this.getReviews = this.getReviews.bind(this);
        this.state = {
            reviews: [
                {
                email: props.email,
                title: props.title,
                review: props.review,
                starsgiven: props.starsgiven,
                }
            ]
        }
    }
    getReview() {
        axios.get('http://localhost:5000/review',{})
        .then(res => {
            this.setState({reviews: res.data})})
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.getReviews()
    }

    render() {

        return (
            <div className="individualGame">
                <h1>{this.state.reviews.email}</h1>
                <h1>{this.state.reviews.title}</h1>
                <h1>{this.state.reviews.review}</h1>
                <h1>{this.state.reviews.starsgiven}</h1>
            </div>
        )
    }
}