import React, { Component } from "react";
import {Nav, NavItem, Jumbotron} from 'react-bootstrap';
import Trip from './Trip';

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
      {/* <Link to={"/TripView/" + trip.tripId}>  */}
      {/* <Link to= {"/TripView"}> */}
      {/* <h5>{trip.headline}</h5>
      <p>{trip.description}</p>
      </Link> */}
      
      <Nav bsStyle="pills">
         <NavItem
           href={`/TripView/${trip.tripId}`} active>
          <Trip tripId = {this.props.trips.tripId} /> 
         </NavItem>
           <h5>{trip.headline}</h5>
           <p>{trip.tripId}</p> 
          <p>{trip.description}</p> 
       </Nav>
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
