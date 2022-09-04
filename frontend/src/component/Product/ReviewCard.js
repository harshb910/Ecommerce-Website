import React from 'react';
// import ReactStars from 'react-rating-stars-component';
import profilePng from "../../images/Profile.png";
import { Rating } from "@material-ui/lab";

const ReviewCard = ({review}) => {
    // const options = {
    //     edit: false,
    //     color: "rgba(20,20,20,0.1)",
    //     activeColor: "tomato",
    //     value : review.rating,
    //     isHalf : true,
    //     size : window.innerWidth < 600 ? 20 : 25,
    // }
    const options2 = {
        size: "small",
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    }
    return (
        <div className="reviewCard">
            <img src={profilePng} alt="User"/>
            <p>{review.name}</p>
            <Rating key={`stars_${review.rating}`} {...options2}/>
            <span className="reviewCardComment">{review.comment}</span>
        </div>
    )
}

export default ReviewCard;