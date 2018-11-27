import React, { Component } from "react";
import { GetTripWithPitstops, DeleteTrip, DeletePitstop } from "../ServiceClient";
import { Button, Jumbotron } from "react-bootstrap";
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
          <h2>{tripPitstop.headline}</h2>
          <p>{tripPitstop.description}</p>
          <Button bsStyle="danger" onClick={this.handleTripDelete}>
          Delete trip
          </Button>

          {tripPitstop.pitstops.map(pitstop => {
            console.log(photoUrl + pitstop.photoMediumUrl);

            return (
              <Jumbotron className="jumbo">
                <h3>{pitstop.title}</h3>
                <p>{pitstop.note}</p>
                <img src={photoUrl + pitstop.photoMediumUrl} alt="pitstop" />
                <Button bsStyle="danger" onClick={() => this.handlePitstopDelete(pitstop.pitstopId)}>
                  Delete pitstop
                </Button>
              </Jumbotron>
            );
          })}
        </div>
      ));
    return <div>{TripWithPitstops}</div>;
  }
}

export default Trip;
