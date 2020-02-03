import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

export default function Navbar() {

  return (
    <Menu>
        <Container>
      <Menu.Item as="a"><NavLink to="/">Home</NavLink></Menu.Item>
      <Menu.Item as="a">
        <NavLink to="/login">Login</NavLink>
      </Menu.Item>
      <Menu.Item as="a">
        <NavLink to="/signup">Sign Up</NavLink>
      </Menu.Item>
      </Container>
    </Menu>
  );
}
