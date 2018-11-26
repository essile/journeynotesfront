import React, { Component } from "react";
import {GetTripPitstops} from '../ServiceClient';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = { tripPitstops: [] };
  }
  componentDidMount = () => {
    // const accessToken = sessionStorage.getItem('access_token');
    // console.log(accessToken);
    console.log("tripin propsit", this.props);
    console.log("kävin täällä ");
    let tripId;
    console.log(tripId);
      if (this.props.match === undefined) {
        tripId = this.props.tripId;
      } else {
        tripId = this.props.match.params.tripId;
      }
    GetTripPitstops(tripId, response => {
      var tripPitstops = response;
      this.setState({ tripPitstops: tripPitstops});
    });
  };

  render() {
    console.log(this.state.tripPitstops)
    var allTripPitstops = [].concat(this.state.tripPitstops).map(tripPitstop => (
      <li key={tripPitstop.tripId}>

           <h2>{tripPitstop.description}</h2>

           {tripPitstop.pitstops.map(pitstop =>
            <h3>{pitstop.title}</h3>)}     
            
      </li>
    ));
    return <div>{allTripPitstops}</div>;
  }
}

export default Trip;
