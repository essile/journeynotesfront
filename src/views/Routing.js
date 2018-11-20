import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstView from "../views/FirstView";
import CreateTripView from "../views/CreateTripView";

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/CreateTripView" component={CreateTripView} />
            <Route path="/FirstView" component={FirstView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;
