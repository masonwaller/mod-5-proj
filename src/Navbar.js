import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import {useSelector, useDispatch} from 'react-redux'
import { changeLogged, changeBeach} from './actions'

export default function Navbar() {
  let logged = useSelector(state => state.logged)
  let dispatch = useDispatch()

  function logOut() {
    dispatch(changeLogged(false))
  }

  function setCurrent() {
    dispatch(changeBeach(''))
  }

  return (
    <Menu>
        <Container>
        <Menu.Item >BEACH LYFE</Menu.Item>
      <Menu.Item as="a"><NavLink to="/">Home</NavLink></Menu.Item>
      <Menu.Item as="a" onClick={() => logOut()}>
        {(logged) ? <NavLink to="/">Logout</NavLink> :
        <NavLink to="/login">Login</NavLink>}
      </Menu.Item>
      <Menu.Item as="a">
        <NavLink to="/signup">Sign Up</NavLink>
      </Menu.Item>
      <Menu.Item as="a">
        <NavLink to="/toprated" onClick={() => setCurrent()}>Top Rated</NavLink>
      </Menu.Item>
      </Container>
    </Menu>
  );
}
