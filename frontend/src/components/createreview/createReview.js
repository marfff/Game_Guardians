import React, { useState } from 'react';
import './createReview.css';
import axios from 'axios';

function Review() {

    const email = sessionStorage.getItem("email");
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [starsgiven, setStarsgiven] = useState("")

    const handleChange = (event) => {
        if (event.target.id === "title"){setTitle(event.target.value)};
        if (event.target.id === "review") {setReview(event.target.value)};
        if (event.target.id === "starsgiven") {setStarsgiven(event.target.value)};
    }

    const sendDataToExpress = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/reviews", {
            email: email,
            title: title,
            review: review,
            starsgiven: starsgiven
        }).then((res) => {
            console.log(res.data);
            if (res.data.status === "review worked") {
                console.log("Everything is fine!");
                alert("Review Added! Check your account page to view.");
                setTitle("");
                setReview("");
                setStarsgiven("");
            } else {
                alert(res.data.message);
                setTitle("");
                setReview("");
                setStarsgiven("");
            }
        })
    }

    return(
        <div className="mainReviewDiv">
        {(sessionStorage.getItem("login")) ?
            <div class="successReview">
                <form onSubmit={sendDataToExpress} className="reviewForm">

                    <h2>Write Your Game Review, Guardian!</h2>
                    <label htmlFor="email" name="email" id="email" value={email}>{email}</label>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" autoComplete="off" className="reviewInput" value={title} id="title" onChange={handleChange} />
                    <label htmlFor="review">Write review here: </label>
                    <textarea  name="review" cols="40" rows="5" autoComplete="off" className="reviewInput" value={review} id="review" onChange={handleChange} />
                    <label htmlFor="starsgiven">Stars Given: </label>
                    <input type="number" name="starsgiven" autoComplete="off" value={starsgiven} id="starsgiven" onChange={handleChange} min="1" max="5" />


                    <input type="submit" name="submit" className="reviewSubmit"></input>
                </form>
            </div>
            
            



            : <h1>YOU ARE NOT LOGGED IN</h1>}
        
        </div>
    );
};

export default Review;

