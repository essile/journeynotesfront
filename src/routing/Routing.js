import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstView from "../views/FirstView";
import CreateTripView from "../views/CreateTripView";
import LoginView from "../views/LoginView";
import CreatePitstopView from "../views/CreatePitstopView";

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginView}/>
            <Route path="/CreateTripView" component={CreateTripView} />
            <Route path="/FirstView" component={FirstView} />
            <Route path="/CreatePitstopView" component={CreatePitstopView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;
