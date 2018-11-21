import React, { Component } from "react";
import TripList from "../components/TripList";
import { GetAllTrips } from "../ServiceClient";


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
        
        <TripList trips={this.state.trips} />
        <a href="http://localhost:3003/CreateTripView">Create new trip</a>
      </div>
    );
  }
}


export default FirstView;
