import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Review from './Reviews.js'
import Rating from './Rating.js'

function Specific() {
    const dispatch = useDispatch();
    const current = useSelector(state => state.current)
    const align ={textAlign: 'center'}
    return (
        <div>
        <div style={align}>
            <h1>{current.name}</h1>
            <h3>Coordinates: {current.address}</h3>
            <h5>Temperature Rating: {current.temp}/5</h5>
            <h5>Weather Rating: {current.weather}/5</h5>
            <h5>Pollution Rating: {current.pollution}/5</h5>
            <h5>Surf Rating: {current.surf}/5</h5>
        </div>
            {current.reviews.map(review => <Review review={review} key={review.id}/>)}
            <Rating/>
        </div>
    )
}
export default Specific