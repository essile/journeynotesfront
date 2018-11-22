import React, { Component } from "react";
import TripList from "../components/TripList";
import { GetAllTrips } from "../ServiceClient";
import { Jumbotron, Nav, NavItem } from "react-bootstrap";
import "../cssstyles/View.css";

class FirstView extends Component {
  constructor(props) {
    super(props);
    this.state = { trips: [] };
  }

  componentDidMount = () => {
    GetAllTrips(response => {
      var trips = response;
      this.setState({ trips: trips });
      console.log(this.state.trips);
    });
  };

  render() {
    console.log(this.state.trips);

    return (
      <div>
<<<<<<< Updated upstream
        <TripList trips={this.state.trips} />
        <a href="http://localhost:3000/CreateTripView">Create new trip</a>
=======
        <Jumbotron className="jumbo">
          <TripList trips={this.state.trips} />
        </Jumbotron>
        <Nav bsStyle="pills" className="Nav">
          <NavItem href="http://localhost:3000/CreateTripView" active onClick={this.newTrip}>
            Create new Trip
          </NavItem>
        </Nav>
>>>>>>> Stashed changes
      </div>
    );
  }
}


export default FirstView;
