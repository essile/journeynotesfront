import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import {Nav, NavItem, Jumbotron} from 'react-bootstrap';

class TripList extends Component {

  

  render() {
    var styles={
      dropshadow: "4px"
    }
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
           href="/TripView" active>
         </NavItem>
           <h5>{trip.headline}</h5>
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
