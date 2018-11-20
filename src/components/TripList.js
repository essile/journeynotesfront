import React, { Component } from "react";
import Trip from "./Trip";

class TripList extends Component {
  render() {
    var allTrips = this.props.list.map(function(trip) {
      console.log("viesti");
      return (
        <Trip
          headline={trip.headline}
          description={trip.description}
          key={trip.id}
        />
      );
    });

    return (
      <div>
        {allTrips}
      </div>
    );
  }
}

export default TripList;
