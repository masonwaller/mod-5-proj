import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {changeLogged} from '../actions';
import history from '../history.js'
import {Form, Input, Button, Checkbox} from "semantic-ui-react";

export default function Signup() {
  const [username, setUser] = React.useState("");
  const [password, setPass] = React.useState("");
  const [check, setCheck] = React.useState(false)

  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    if (check) {
    let user = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    console.log(user);
    fetch(`http://localhost:3001/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => (data.error)? alert("Username taken") : dispatch(changeLogged(data)) && history.push('/'));
  } else {alert('Agree to the terms and conditions!')}
  }
 
  return (
    <div className="form">
        <h2 className="header">Sign Up</h2>
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
        <Form.Field required>
      <Checkbox onChange={() => setCheck(!check)} label='I agree to the Terms and Conditions' />
    </Form.Field>
    <br/>
        <Button size='big' type="submit" value="Submit">Submit</Button>
      </Form>
    </div>
  );
}
