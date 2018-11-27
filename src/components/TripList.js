import React, { Component } from "react";
import { Jumbotron} from 'react-bootstrap';
import Trip from './Trip';
import {Link} from 'react-router-dom';
import "../cssstyles/View.css";

const photoUrl = "https://journeynotes.blob.core.windows.net/photos/";

class TripList extends Component {
  
  // tripId = this.state.match.params.tripId;
  

  render() {

    console.log("moikka");
    console.log(this.props.trips);
    
    
    var allTrips = this.props.trips.map(trip => (
      <Jumbotron className="jumbo" key={trip.tripId}>
      <Link to={"/TripView/" + trip.tripId} >  
      <img src={photoUrl + trip.mainPhotoSmallUrl}alt="trip main" />
      <h2>{trip.headline}</h2>
      <p>{trip.description}</p>
      </Link>
      
      {/* <Nav bsStyle="pills" activeKey={trip.tripId} onSelect={this.handleSelect}>
         <NavItem
           href={`/TripView/${trip.tripId}`} active>          
         </NavItem>
       
           <h5>{trip.headline}</h5>
           <p>{trip.tripId}</p> 
          <p>{trip.description}</p> 
       </Nav> */}
      </Jumbotron>
      
      ));
      return ( 
        <div>      
          {allTrips}   
          <Trip tripId = {this.props.trips.tripId} />     
        </div>
        
      );
    }
  
    
  }


export default TripList;
