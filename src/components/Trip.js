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
import giffi from "../images/giffi.gif";

const photoUrl = "https://journeynotes.blob.core.windows.net/photos/";
const warningMessageTrip = i18n.t("Delete trip warning message");
const warningMessagePitstop = i18n.t("Delete pitstop warning message");
const headlinePitstops = i18n.t("Pitstops headline");

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        tripPitstops: [],
      };
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
        var start = []
          .concat(this.state.tripPitstops)
          .map(start => {
            return (
              start.startDate.substring(0, 10)
            )
          })
        this.props.startDate(start);
        var end = []
          .concat(this.state.tripPitstops)
          .map(start => {
            return (
              start.endDate.substring(0, 10)
            )
          })
        this.props.endDate(end);
      });
    }, 2000);
  };

  // startDate = () => {
  //   var startDate = this.state.startDate;
  //   this.props.startDate(startDate);
  //   console.log("jooooooo")
  // }

  endDate = () => {
    var endDate = this.state.endDate;
    this.props.endDate(endDate);
  }

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
    // console.log(this.state.tripPitstops);
    var TripWithPitstops = []
      .concat(this.state.tripPitstops)
      .map(tripPitstop => {
        return (
          <div key={tripPitstop.tripId}>
            <Jumbotron className="jumbo">
              <div>
                <h1 className="tripHeadline">{tripPitstop.headline}</h1>
                <h4>{tripPitstop.description}</h4>
                <h3>
                  {" "}
                  🛪 {tripPitstop.startDate.substring(0, 10)} /{" "}
                  {tripPitstop.endDate.substring(0, 10)}
                </h3>
                <Image
                  src={
                    tripPitstop.mainPhotoUrl === ""
                      ? giffi
                      : photoUrl + tripPitstop.mainPhotoUrl
                  }
                  alt="trip main"
                  responsive
                />
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
            <h2>{headlinePitstops}</h2>
            <Jumbotron key={tripPitstop.id} className="jumbo">
              {tripPitstop.pitstops.map(pitstop => {
                console.log(photoUrl + pitstop.photoMediumUrl);
                return (
                  <div className="pitstopsOfTrip">
                    <h3>{pitstop.title}</h3>
                    <div>
                      <Image
                        src={
                          pitstop.photoSmallUrl === ""
                            ? giffi
                            : photoUrl + pitstop.photoSmallUrl
                        }
                        alt="trip main"
                        responsive
                      />
                    </div>
                    <p>{pitstop.note}</p>
                    <h5>{pitstop.pitstopDate.substring(0, 10)}</h5>
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
                );
              })}
            </Jumbotron>
          </div>
        )
      });
    return <div>{TripWithPitstops}</div>;
  }
}

export default Trip;
