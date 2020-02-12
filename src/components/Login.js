import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {changeLogged} from '../actions';
import history from '../history.js'
import {Form, Input, Button} from "semantic-ui-react";

export default function Signup() {
  const [username, setUser] = React.useState("");
  const [password, setPass] = React.useState("");

  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    fetch(`http://localhost:3001/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => (!data.message) ? dispatch(changeLogged(data)) && history.push('/') : alert("Username or Password is incorrect."));
  }
//   dispatch(changeLogged(data))
  return (
    <div className="form">
        <h2 className="header">Login</h2>
        <Form onSubmit={e => handleSubmit(e)}>
        <Form.Field required>
          <Input type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={e => setUser(e.target.value)}
        ></Input>
        </Form.Field>
        <Form.Field required>
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={e => setPass(e.target.value)}
        ></Input>
        </Form.Field>
        <br/>
        <Button size='big' type="submit" value="Submit">Submit</Button>
      </Form>
    </div>
  );
}