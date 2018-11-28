import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import i18n from "../i18n";

class Login extends Component {
 
  render() {
    return (
      <div>
        <Nav bsStyle="pills">
          <NavItem
            href="/FirstView" active>{i18n.t('Login')}
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Login;
