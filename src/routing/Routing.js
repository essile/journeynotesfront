import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstView from "../views/FirstView";
import CreateTripView from "../views/CreateTripView";
import CreatePitstopView from "../views/CreatePitstopView";
import { Col } from "react-bootstrap";

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
        <Col xs={12} sm={8} md={6}>
          <Switch>
            <Route exact path="/" component={FirstView}/>
            <Route path="/CreateTripView" component={CreateTripView} />
            {/* <Route path="/FirstView" component={FirstView} /> */}
            <Route path="/CreatePitstopView" component={CreatePitstopView} />
          </Switch>
          </Col>
        </div>
      </Router>
    );
  }
}

export default Routing;
