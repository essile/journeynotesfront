import React, { Component } from "react";
import { Link } from "react-router-dom";
import TripList from "../components/TripList";
import { GetAllTrips } from "../ServiceClient";
import { Jumbotron } from "react-bootstrap";
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
    this.interval = setInterval(() => {
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
    //console.log(this.state.trips);

    return (
      <div>

        <div>
          {/* <Nav className="nav"> */}
              <Jumbotron className="jumboCreatebutton">
            <Link to="/CreateTripView" active onClick={this.newTrip}>
              <div>
              <h3>Create a new Trip</h3>
                <img className='plus' src={plusbutton} alt='Create'/>
              </div>
            </Link>
            </Jumbotron>
          {/* </Nav> */}
        </div>
 
        <div>
          <h2>{i18n.t('My past adventures')}</h2>
        </div>
        <Jumbotron className="transparentJumbo">
          <div>
            <TripList trips={this.state.trips} />
          </div>
          </Jumbotron>

           <div>      
           <GoogleApiWrapper trips={this.state.trips}/>
           </div>
      </div>
           );
  }
}


export default FirstView;
