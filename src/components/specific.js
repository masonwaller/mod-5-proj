import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Review from "./Reviews.js";
import Rating from "./Rating.js";
import { changeBeach } from "../actions";
import Writereview from "./Writereview.js";
import Semantic from "semantic-ui-react";

function Specific() {
  const dispatch = useDispatch();
  const current = useSelector(state => state.current);
  const align = { textAlign: "center" };

  function back() {
    dispatch(changeBeach(""));
  }

  function sendText() {
    let sms = { to: "18058891264", from: "19162600332", text: current.address}
    fetch(`http://localhost:3001/api/v1/sms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ sms })
    })
      .then(res => res.json()).then(res => console.log(res)).catch(error => console.log(error))
  }

  return (
    <div>
      <button onClick={() => back()}>Back to Search</button>
      <div style={align}>
        <h1>{current.name}</h1>
        <h3>Coordinates: {current.address}</h3><button onClick={() => sendText()}>Send Location to phone</button>
        <h5>Temperature Rating: {current.temp}/5</h5>
        <h5>Weather Rating: {current.weather}/5</h5>
        <h5>Pollution Rating: {current.pollution}/5</h5>
        <h5>Surf Rating: {current.surf}/5</h5>
      </div>
      <div class="ui blue message">
        {(current.reviews && current.reviews.length !== 0) ? (
          current.reviews.map(review => (
            <Review review={review} key={review.id} />
          ))
        ) : (
          <h3>No Reviews Yet!</h3>
        )}
      </div>
      <Writereview />
      <Rating />
    </div>
  );
}
export default Specific;
