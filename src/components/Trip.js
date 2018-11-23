import React, { Component } from "react";
import {GetTripPitstops} from '../ServiceClient';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = { tripPitstops: [] };
  }

  componentDidMount = () => {
    const accessToken = sessionStorage.getItem('access_token');
    console.log(accessToken);
    GetTripPitstops(accessToken, response => {
      var tripPitstops = response;
      this.setState({ tripPitstops: tripPitstops });
    });
  };

  render() {
    console.log(this.state.tripPitstops)
    console.log("noni");
    var allTripPitstops = [].concat(this.state.tripPitstops).map(tripPitstop => (
      <li key={tripPitstop.tripId}>

           <h3>{tripPitstop.description}</h3>

           {tripPitstop.pitstops.map(title =>
            <h5>{title.title}</h5>)}     
            
      </li>
    ));
    return <div>{allTripPitstops}</div>;
  }
}

export default Trip;
