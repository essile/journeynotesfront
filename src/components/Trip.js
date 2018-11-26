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
    console.log(this.props.tripId);
    console.log("kävin täällä" + this.props.tripId);
    console.log("match" + this.state.match)
    let tripId;
    if(this.state.match === undefined)
    {
      tripId = this.props.tripId;
    }
    else
    {
      tripId = this.props.match.parms.redirectParam;
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

           <h3>{tripPitstop.description}</h3>

           {tripPitstop.pitstops.map(pitstop =>
            <h5>{pitstop.title}</h5>)}     
            
      </li>
    ));
    return <div>{allTripPitstops}</div>;
  }
}

export default Trip;
