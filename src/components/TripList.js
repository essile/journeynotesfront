import React, { Component } from "react";
import Trip from "./Trip";

class TripList extends Component {

  

  render() {
    console.log(this.props.trips);
    var allTrips = this.props.trips.map(trip => (
      <li key={trip.tripId}>
      {trip.headline}
      </li>
      
    ));

      return (
        <div>     
          {allTrips}         
        </div>
        
      );
    }

    
  }


export default TripList;
