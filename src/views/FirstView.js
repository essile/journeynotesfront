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

var data = [
  { id: 1, headline: "New york", description: "Tää on ihan triviaali homma" },
  {
    id: 2,
    headline: "Los Angeles",
    description: "Tuu, Samu, kirjoittaa ja minä sanelen"
  },
  {
    id: 3,
    headline: "San Francisco",
    description: "Nyt se Visual Studio vähän aikaa rouskuttaa"
  }
];

export default FirstView;
