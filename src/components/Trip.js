import React, { Component } from "react";
import {GetTripWithPitstops} from '../ServiceClient';


class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = { tripPitstops: [] };
  }
  componentDidMount = () => {
    console.log("tripin propsit", this.props);
    let tripId;
    console.log(tripId);
      if (this.props.match === undefined) {
        tripId = this.props.tripId;
      } else {
        tripId = this.props.match.params.tripId;
      }
    GetTripWithPitstops(tripId, response => {
      var tripPitstops = response;
      this.setState({ tripPitstops: tripPitstops});
    });
  };

  render() {
    console.log(this.state.tripPitstops)
    var TripWithPitstops = [].concat(this.state.tripPitstops).map(tripPitstop => (
      <div key={tripPitstop.tripId}>

           <h2>{tripPitstop.headline}</h2>
           <p>{tripPitstop.description}</p>
            
           {tripPitstop.pitstops.map((pitstop) => {
           return(
             <div>
             <h3>{pitstop.title}</h3>
             <p>{pitstop.note}</p>
             <img src={`{https://journeynotes.blob.core.windows.net/photos/${pitstop.photoMediumUrl}`} alt="pitstop" />
             </div>
           )}       
          )}                 
      </div>
    ));
    return <div>
    {TripWithPitstops} 
    </div>;
  }
}

export default Trip;
