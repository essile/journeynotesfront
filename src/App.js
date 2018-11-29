import React, { Component } from "react";
import "./App.css";
import AuthService from "./AuthService";
import { Switch, Route } from "react-router-dom";
import FirstView from "./views/FirstView";
import CreateTripView from "./views/CreateTripView";
import TripView from "./views/TripView";
import { Col, NavItem, Nav, Image, Button, Collapse, Well } from "react-bootstrap";
import EditTripView from "./views/EditTripView";
import logoutbutton from "./images/logoutbutton.png";
import menu from "./images/menu.png";
import FinnishFlag from "./images/FinnishFlag.png";
import UKflag from "./images/UKflag.png";
import SwedishFlag from "./images/SwedishFlag.png";
import viewmapbutton from "./images/viewmapbutton.png";
import i18n from "./i18n";
import GoogleApiWrapper from "./mapstuff/MapContainer";
import NotFound from "./views/NotFound";


class App extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
    this.state = { open: false }
  }

  renderFirstView() {
    let resultComponent = <FirstView auth={this.authService} />;

    if (!this.authService.isAuthenticated()) {
      console.log("morjes 7");
      this.authService.login();
      resultComponent = (
        <div>
          <p>{i18n.t('Redirecting auth message')}</p>
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
        <p>{i18n.t('Starting message')}</p>
      </div>
    );
  }

  createLogoutButton() {
    let button = null;

    if (this.authService.isAuthenticated()) {
      console.log("logout button");
      button = (
        <button className="button">
          <Image src={logoutbutton} className='plus' alt='Logout'
            onClick={() => this.authService.logout()} />
          <h3>{i18n.t('Logout')}</h3>
        </button>
      );
    }
    return button;
  }

  render() {
    let logoutButton = this.createLogoutButton();
    return (
      <div>
        <Nav>
          <NavItem href='/FirstView'>
            <Button className="button">
              <Image src={menu} className='menuicon' alt='Menu' responsive />
              Home
         </Button>

          </NavItem>
          <ChangeLanguage />

          <Button className="button" onClick={() => this.setState({ open: !this.state.open })}>
            <Image src={viewmapbutton} alt='View Map' className="menuicon" responsive />
            Open Map
        </Button>
          <Collapse in={this.state.open}>
            <div>
              <Collapse in={this.state.open}>
                <div>
                  <Well>
                    {/* <GoogleApiWrapper /> */}
                  </Well>
                </div>
              </Collapse>
            </div>
          </Collapse>
        </Nav>


        <div className="App">
          <Col xs={12} sm={10} md={8}>
            <h1>journey</h1>
            <h1>notes</h1>
            <Switch>
              <Route exact path="/" render={() => this.renderFirstView()} />
              <Route path="/startSession" render={({ history }) => this.startSession(history)} />
              <Route path="/FirstView" component={FirstView} />
              <Route path="/CreateTripView" component={CreateTripView} />
              <Route path="/TripView/:tripId" component={TripView} />
              <Route path="/EditTripView/:tripId" component={EditTripView} />
              <Route component={NotFound}/>
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
      <input type="image" onClick={() => changeLanguage('en')} src={UKflag} alt="en" />&nbsp;
      <input type="image" onClick={() => changeLanguage('fi')} src={FinnishFlag} alt="fi" />&nbsp;
      <input type="image" onClick={() => changeLanguage('se')} src={SwedishFlag} alt="se" />&nbsp;
      {/* <button onClick={() => changeLanguage('en')}>English</button> */}
      {/* <button onClick={() => changeLanguage('fi')}>Suomi</button> */}
    </div>
  );
};