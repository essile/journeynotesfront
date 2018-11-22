import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";

class Login extends Component {
 
  render() {
    return (
      <div>
        <Nav bsStyle="pills">
          <NavItem
            href="/FirstView" active>Login
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Login;
