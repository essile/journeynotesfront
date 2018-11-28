import React, { Component } from "react";
import { GetTripWithPitstops, DeleteTrip, DeletePitstop } from "../ServiceClient";
import { Image, Jumbotron, Nav, NavItem } from "react-bootstrap";
import deletebutton from "../images/deletebutton.png";
import editbutton from "../images/editbutton.png";
import '../cssstyles/View.css';


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
    DeleteTrip(tripId)
  }

  handlePitstopDelete = (pitstopId) => {
    let tripId = this.props.match.params.tripId;
    console.log("poistettavan pitstopin id:" + pitstopId);
    DeletePitstop(tripId, pitstopId)
  }

  render() {
    console.log(this.state.tripPitstops);
    var TripWithPitstops = []
      .concat(this.state.tripPitstops)
      .map(tripPitstop => (
        <div key={tripPitstop.tripId}>
        <Jumbotron className="jumbo">
        <div>
          <h2>{tripPitstop.headline}</h2>
          <p>{tripPitstop.description}</p>
          <h3> 🛪 {tripPitstop.startDate.substring(0, 10)} / {tripPitstop.endDate.substring(0, 10)}</h3>


          <Nav>
                <NavItem  href={`/EditTripView/${this.props.match.params.tripId}`} active>
                  <div>
                    <Image className='plus' src={editbutton} alt='Edit' responsive/>
                  </div>
                </NavItem> 
              <NavItem href="/FirstView" active onClick={() => {if(window.confirm("Are you sure you want to delete this trip and all its pitstops?")) this.handleTripDelete()}}>
                  <div>
                    <Image className='plus' src={deletebutton} alt='Delete' responsive/>
                  </div>
                </NavItem> 
              </Nav>
        </div>
        </Jumbotron>
          {tripPitstop.pitstops.map(pitstop => {
            console.log(photoUrl + pitstop.photoMediumUrl);

            return (
              <Jumbotron key={tripPitstop.id} className="jumbo">
              <div>
                <h3>{pitstop.title}</h3>
                <p>{pitstop.note}</p>
                <h5>{pitstop.pitstopDate.substring(0, 10)}</h5>

              </div>
                <Image src = {(pitstop.photoMediumUrl === "") ? "https://media.giphy.com/media/52F98945Myjt0bnFKY/giphy.gif" : photoUrl + pitstop.photoMediumUrl} alt="trip main" responsive />
                <Nav>
                <NavItem active onClick={() => {if(window.confirm('Are you sure you want to delete this pitstop?')) this.handlePitstopDelete(pitstop.pitstopId)}}>
                  <div>
                    <Image className='plus' src={deletebutton} alt='Delete' responsive/>
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
