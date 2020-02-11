import React from "react";
import Semantic from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Review from "./Reviews.js";

export default function Comments() {
    const dispatch = useDispatch();
    const current = useSelector(state => state.current);
    const align = { textAlign: "center" };
  return (
    <div>
        <h1>Reviews</h1>
      <div class="ui blue message">
        {current.reviews && current.reviews.length !== 0 ? (
          current.reviews.map(review => (
            <Review review={review} key={review.id} />
          ))
        ) : (
          <h3>No Reviews Yet!</h3>
        )}
      </div>
    </div>
  );
}
