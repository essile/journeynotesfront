import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Login extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="http://localhost:3000/FirstView" active>Login</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Login;
