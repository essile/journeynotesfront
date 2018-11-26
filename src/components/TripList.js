import React, { Component } from "react";
import { Jumbotron} from 'react-bootstrap';
import Trip from './Trip';
import {Link} from 'react-router-dom';

class TripList extends Component {
  
  // tripId = this.state.match.params.tripId;
  

  render() {
    var styles={
      dropshadow: "4px"
    }
    console.log("moikka");
    console.log(this.props.trips);
    var allTrips = this.props.trips.map(trip => (
      <Jumbotron style={styles} key={trip.tripId}>
      <Link to={"/TripView/" + trip.tripId} >  
      <img src={trip.mainPhotoSmallUrl} alt="trip main" />
      <h5>{trip.headline}</h5>
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
