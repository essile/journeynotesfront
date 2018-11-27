import React, { Component } from "react";
import CreateTrip from "../components/CreateTrip";
import { Jumbotron } from "react-bootstrap";

class CreateTripView extends Component {
  render() {
    return (
      <div>
      {/* <Jumbotron> */}
        <CreateTrip />
      {/* </Jumbotron> */}
      </div>
    );
  }
}

export default CreateTripView;
