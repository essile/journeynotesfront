import React, { Component } from "react";
import TripList from "../components/TripList";

class FirstView extends Component {
  render() {
    return (
      <div>
        <TripList list={data} />
        <a href="http://localhost:3001/CreateTripView">Create new trip</a>
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
