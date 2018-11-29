import React, { Component } from "react";
import TripList from "../components/TripList";
import { GetAllTrips } from "../ServiceClient";
import { Jumbotron, Nav, NavItem } from "react-bootstrap";
import "../cssstyles/View.css";
import plusbutton from "../images/plusbutton.png";
import i18n from "../i18n";
import GoogleApiWrapper from "../mapstuff/MapContainer"

class FirstView extends Component {
  constructor(props) {
    super(props);
    this.state = { trips: [] };
  }

  componentDidMount = () => {
   this.interval=setInterval(( )=> {
      GetAllTrips(response => {
      var trips = response;

      this.setState({ trips: trips });
      console.log(this.state.trips);
    });
  }, 2000)
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.trips);

    return (
      <div>
          <Jumbotron className="jumbo">
       
          <Nav className="nav">
            <NavItem href="/CreateTripView" active onClick={this.newTrip}>
              Create new Trip
              <div>
                <img className='plus' src={plusbutton} alt='Create'/>
              </div>
            </NavItem>
          </Nav>
        </Jumbotron>
        <div>
        <h2>{i18n.t('My past adventures')}</h2>
        </div>
        <Jumbotron className="transparentJumbo">
        <div>
          <TripList trips={this.state.trips} />
          </div>
          </Jumbotron>
        <Jumbotron className="map">     
           <GoogleApiWrapper trips={this.state.trips}/>
        </Jumbotron>

      </div>
    );
  }
}


export default FirstView;
