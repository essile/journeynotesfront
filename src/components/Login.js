import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          <NavItem
            href="http://localhost:3000/FirstView" active>Login
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Login;
