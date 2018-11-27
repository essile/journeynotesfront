import React, { Component } from "react";
import "./App.css";
import AuthService from "./AuthService";
import { Switch, Route } from "react-router-dom";
import FirstView from "./views/FirstView";
import CreateTripView from "./views/CreateTripView";
import TripView from "./views/TripView";
import { Col } from "react-bootstrap";


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
        <button onClick={() => this.authService.logout()}>Logout</button>
      );
    }
    return button;
  }

  render() {
    let logoutButton = this.createLogoutButton();
    return (
      <div className="App">
      <Col xs={12} sm={8} md={6}>     
        <h1>journey</h1> 
        <h1>notes</h1>
        <Switch>
          <Route exact path="/" render={() => this.renderFirstView()} />
          <Route path="/startSession" render={({ history }) => this.startSession(history)}/>
          <Route path="/FirstView" component={FirstView}/>
          <Route path="/CreateTripView" component={CreateTripView} />
          <Route path="/TripView/:tripId" component={TripView} />
        </Switch>      
        {logoutButton}
        </Col>
      </div>
    );
  }
}

export default App;
