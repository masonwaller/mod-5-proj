import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Review from "./Reviews.js";
import Rating from "./Rating.js";
import { changeBeach } from "../actions";
import Writereview from "./Writereview.js";
import { Card, Grid } from "semantic-ui-react";

function Specific() {
  const dispatch = useDispatch();
  const current = useSelector(state => state.current);
  const align = { textAlign: "center" };

  function back() {
    dispatch(changeBeach(""));
  }

  function sendText() {
    let sms = { to: "18058891264", from: "19162600332", text: current.address };
    fetch(`http://localhost:3001/api/v1/sms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ sms })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  return (
    <div className="specific">
      <div className="car">
      <button className="car" onClick={() => back()}>Back to Search</button></div><br/>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
      <Card className="card">
        <Card.Content>
          <div id="header">{current.name}</div>
          <Card.Meta>
            <div className="date">Coordinates: {current.address}</div>
          </Card.Meta>
          <Card.Description>
            <li>Temperature Rating: {current.temp}/5</li> <li>Weather Rating:{" "}
            {current.weather}</li> <li>Pollution Rating: {current.pollution}/5</li> <li>Surf
            Rating: {current.surf}/5</li>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <button onClick={() => sendText()}>Send Location to Phone</button>
        </Card.Content>
      </Card>
      </Grid.Column>
      <Grid.Column>
      <Writereview />
      </Grid.Column>
      <Grid.Column>
      <Rating />
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}
export default Specific;
