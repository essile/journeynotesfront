import React, { Component } from "react";
import {
  GetTripWithPitstops,
  DeleteTrip,
  DeletePitstop
} from "../ServiceClient";
import { Image, Jumbotron, Nav, NavItem } from "react-bootstrap";
import deletebutton from "../images/deletebutton.png";
import editbutton from "../images/editbutton.png";
import "../cssstyles/View.css";
import i18n from "../i18n";

const photoUrl = "https://journeynotes.blob.core.windows.net/photos/";
const warningMessageTrip = i18n.t("Delete trip warning message");
const warningMessagePitstop = i18n.t("Delete pitstop warning message");

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
    this.interval = setInterval(() => {
      GetTripWithPitstops(tripId, response => {
        var tripPitstops = response;
        this.setState({ tripPitstops: tripPitstops });
      });
    }, 2000);
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
            <div>
            <Image
            src={
              tripPitstop.mainPhotoSmallUrl === ""
                ? "https://media.giphy.com/media/yv10uxsLG8BLcB7Gac/giphy.gif"
                : photoUrl + tripPitstop.mainPhotoSmallUrl
            }
            alt="trip main"
            responsive
          />
              <h2>{tripPitstop.headline}</h2>
              <p>{tripPitstop.description}</p>
              <h3>
                {" "}
                🛪 {tripPitstop.startDate.substring(0, 10)} /{" "}
                {tripPitstop.endDate.substring(0, 10)}
              </h3>

              <Nav>
                <NavItem
                  href={`/EditTripView/${this.props.match.params.tripId}`}
                  active
                >
                  <div>
                    <Image
                      className="plus"
                      src={editbutton}
                      alt={i18n.t("Edit")}
                      responsive
                    />
                  </div>
                </NavItem>
                <NavItem
                  href="/FirstView"
                  active
                  onClick={() => {
                    if (window.confirm(warningMessageTrip))
                      this.handleTripDelete();
                  }}
                >
                  <div>
                    <Image
                      className="plus"
                      src={deletebutton}
                      alt={i18n.t("Delete")}
                      responsive
                    />
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

                  <div>
                    <Image
                      src={
                        pitstop.photoMediumUrl === ""
                          ? "https://media.giphy.com/media/yv10uxsLG8BLcB7Gac/giphy.gif"
                          : photoUrl + pitstop.photoMediumUrl
                      }
                      alt="trip main"
                      responsive
                    />
                  </div>
                  <Nav>
                    <NavItem
                      active
                      onClick={() => {
                        if (window.confirm(warningMessagePitstop))
                          this.handlePitstopDelete(pitstop.pitstopId);
                      }}
                    >
                      <Image
                        className="plus"
                        src={deletebutton}
                        alt={i18n.t("Delete")}
                        responsive
                      />
                    </NavItem>
                  </Nav>
                </div>
              </Jumbotron>
            );
          })}
        </div>
      ));
    return <div>{TripWithPitstops}</div>;
  }
}

export default Trip;
