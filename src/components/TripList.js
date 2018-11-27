import React, { Component } from "react";
import { Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../cssstyles/View.css";

const photoUrl = "https://journeynotes.blob.core.windows.net/photos/";

class TripList extends Component {
    

  render() {
    var allTrips = this.props.trips.map(trip => (
      <Jumbotron className="jumbo" key={trip.tripId}>
      <Link to={"/TripView/" + trip.tripId} >  
      {/* <img src={photoUrl + trip.mainPhotoSmallUrl}alt="trip main" /> */}
      <img src = {(trip.mainPhotoSmallUrl === "") ? "https://media.giphy.com/media/52F98945Myjt0bnFKY/giphy.gif" : photoUrl + trip.mainPhotoSmallUrl} alt="trip main" />
      <h2>{trip.headline}</h2>
      <p>{trip.description}</p>
      </Link>
      </Jumbotron>
      
      ));
      return ( 
        <div>      
          {allTrips}   
        </div>
        
      );
    }
  
    
  }


export default TripList;
