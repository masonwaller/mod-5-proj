import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {changeLogged} from '../actions';

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
      .then(data => dispatch(changeLogged(data)));
  }
//   dispatch(changeLogged(data))
  return (
    <div>
        <h3>Login</h3>
      <form onSubmit={e => handleSubmit(e)}>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUser(e.target.value)}
        ></input>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPass(e.target.value)}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}