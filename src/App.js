import React, { Component } from "react";
import "./App.css";
import AuthService from "./AuthService";
import { Switch, Route } from "react-router-dom";
import FirstView from "./views/FirstView";
import CreateTripView from "./views/CreateTripView";
import TripView from "./views/TripView";
import { Col, Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import EditTripView from "./views/EditTripView";
import logoutbutton from "./images/logoutbutton.png";
import menu from "./images/menu.png";
import i18n from "./i18n";


class App extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
  }

  renderFirstView() {
    let resultComponent = <FirstView auth={this.authService} />;

    if (!this.authService.isAuthenticated()) {
      console.log("morjes 7");
      this.authService.login();
      resultComponent = (
        <div>
          <p>Redirecting to the authentication service...</p>
        </div>
      );
    }
    return resultComponent;
  }

  startSession(history) {
    console.log("morjes startSession ");
    console.log("morjes 7");
    this.authService.handleAuthentication(history);
    return (
      <div>
        <p>Starting session...</p>
      </div>
    );
  }

  createLogoutButton() {
    let button = null;

    if (this.authService.isAuthenticated()) {
      console.log("logout button");
      button = (
        <div>
          <img className='plus' src={logoutbutton} alt='Logout'
            onClick={() => this.authService.logout()} />
          <h3>Logout</h3>
        </div>
      );
    }
    return button;
  }

  render() {
    let logoutButton = this.createLogoutButton();
    return (
      <div>
        <Navbar className="menu">
        <div><ChangeLanguage/></div>
          <Navbar.Brand>
            <img src={menu} alt='Menu' className="menuicon" />
          </Navbar.Brand>
          <NavDropdown >
            <MenuItem>Action</MenuItem>
          </NavDropdown>
        </Navbar>

        <div className="App">
          <Col xs={12} sm={8} md={6}>
            <h1>journey</h1>
            <h1>notes</h1>
            <Switch>
              <Route exact path="/" render={() => this.renderFirstView()} />
              <Route path="/startSession" render={({ history }) => this.startSession(history)} />
              <Route path="/FirstView" component={FirstView} />
              <Route path="/CreateTripView" component={CreateTripView} />
              <Route path="/TripView/:tripId" component={TripView} />
              <Route path="/EditTripView/:tripId" component={EditTripView} />
            </Switch>
            {logoutButton}
          </Col>
        </div>
      </div>
    );
  }
}

export default App;

function ChangeLanguage() {

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('language', lng);
  }
  return (
          <div>
              <button onClick={() => changeLanguage('en')}>TESTI</button>
          </div>
  );
};