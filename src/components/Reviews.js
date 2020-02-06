import React from "react";
import Semantic from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

export default function Reviews(props) {

    
  return (
    <div class="ui blue message">
      <div class="ui green floating message">
        {
          useSelector(state => state.current.users).find(
            user => user.id === props.review.user_id
          ).username
        }
        - {props.review.text}
        <div style={{float: 'right'}}>
        <h5>{props.review.date}</h5>
        </div>
      </div>
    </div>
  );
}
