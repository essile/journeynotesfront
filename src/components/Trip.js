import React, { Component } from "react";
import {
  GetTripWithPitstops,
  DeleteTrip,
  DeletePitstop
} from "../ServiceClient";
import { Jumbotron, Nav, NavItem, Row } from "react-bootstrap";
import deletebutton from "../images/deletebutton.png";
import editbutton from "../images/editbutton.png";


const photoUrl = "https://journeynotes.blob.core.windows.net/photos/";

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
      this.setState({ tripPitstops: tripPitstops });
    });
  };

  handleTripDelete = () => {
    let tripId = this.props.match.params.tripId;
    console.log(tripId);
    DeleteTrip(tripId);
  };

  handlePitstopDelete = pitstopId => {
    let tripId = this.props.match.params.tripId;
    console.log("poistettavan pitstopin id:" + pitstopId);
    DeletePitstop(tripId, pitstopId);
  };

  render() {
    console.log(this.state.tripPitstops);
    var TripWithPitstops = []
      .concat(this.state.tripPitstops)
      .map(tripPitstop => (
        <div key={tripPitstop.tripId}>

          <Jumbotron className="jumbo">
            <h2>{tripPitstop.headline}</h2>
            <p>{tripPitstop.description}</p>
             <Row>
            <Nav>
            <NavItem href={`/EditTripView/${this.props.match.params.tripId}`} active >
                  <div>
                    <img className='plus' src={editbutton} alt='Edit'/>
                  </div>
              </NavItem>
              <NavItem href="/FirstView" active onClick={this.handleTripDelete}>
                <div>
                  <img className="plus" src={deletebutton} alt="Delete" />
                </div>
              </NavItem>
              
            </Nav>
            </Row>
          </Jumbotron>

          {tripPitstop.pitstops.map(pitstop => {
            console.log(photoUrl + pitstop.photoMediumUrl);

            return (
              <Jumbotron className="jumbo">
                <h3>{pitstop.title}</h3>
                <p>{pitstop.note}</p>
                <img src = {(pitstop.photoMediumUrl === "") ? "https://media.giphy.com/media/1Ahh3bPFpdAloVz4MV/giphy.gif" : photoUrl + pitstop.photoMediumUrl} alt="pitstop" />
                <Nav>
                  <NavItem
                    active
                    onClick={() => this.handlePitstopDelete(pitstop.pitstopId)}
                  >
                    <div>
                      <img className="plus" src={deletebutton} alt="Delete" />
                    </div>
                  </NavItem>
                </Nav>
              </Jumbotron>
            );
          })}
        </div>
      ));
    return <div>{TripWithPitstops}</div>;
  }
}

export default Trip;
