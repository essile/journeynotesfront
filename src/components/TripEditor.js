import React, { Component } from "react";
import { EditTrip, GetTripWithPitstops } from "../ServiceClient";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Jumbotron,
  Nav,
  NavItem
} from "react-bootstrap";
import i18n from "../i18n";

class TripEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripPitstops: null,
      endDate: "",
      startDate: ""
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
    GetTripWithPitstops(tripId, response => {
      var tripPitstops = response;
      this.setState({ tripPitstops: tripPitstops });
      var end = []
        .concat(response)
        .map(trip => {
          return (
            trip.endDate.substring(0, 10)
          )
        })
      var start = []
        .concat(response)
        .map(trip => {
          return (
            trip.startDate.substring(0, 10)
          )
        })

      this.setState({ startDate: start[0], endDate: end[0] })
      console.log(this.state.endDate);
    });
  };

  headlineSet = e => {
    let hl = this.state.tripPitstops;
    hl.headline = e.target.value;
    this.setState({ tripPitstops: hl });
  };

  descriptionSet = e => {
    let des = this.state.tripPitstops;
    des.description = e.target.value;
    this.setState({ tripPitstops: des });
  };

  startDate = (e) => {
    let sd = this.state.tripPitstops;
    sd.startDate = e.target.value;
    this.setState({ tripPitstops: sd });

  }
  endDate = (e) => {
    let ed = this.state.tripPitstops;
    ed.endDate = e.target.value;
    this.setState({ tripPitstops: ed });
  }

  //   handleImage = (e) => {
  //     var pic = e.target.files[0];
  //     console.dir(pic);
  //     this.setState({ photo: pic });
  //   }

  handleTripEdit = () => {
    let tripId;
    // console.log("TripEditor.handleTripEdit, state", this.state);
    if (!this.props.match && !this.props.match.params.tripId) {
      tripId = this.props.tripId;
    } else {
      tripId = this.props.match.params.tripId;
    }
    // console.log("TripEditor.handleTripEdit, tripId", tripId);
    EditTrip(this.state.tripPitstops);
  }

  render() {
    // console.log("TripEditor.render, state.tripStops", this.state.tripPitstops);
    const tripPitstop = this.state.tripPitstops;
    const tripWithTripStops = tripPitstop ?
      <div key={tripPitstop.id}>
        <Jumbotron className="jumbo">
          <form className="form">
            <FormGroup>
              <ControlLabel className="formtext">{i18n.t('Edit headline')}:</ControlLabel>
              <FormControl
                defaultValue={tripPitstop.headline}
                className="formtextarea"
                type="text"
                value={this.state.tripPitstops.headline}
                onChange={this.headlineSet}
              />
              <ControlLabel className="formtext">
                {i18n.t('Edit description')}:
                </ControlLabel>
              <FormControl
                defaultValue={tripPitstop.description}
                className="formtextarea"
                type="text"
                value={this.state.tripPitstops.description}
                onChange={this.descriptionSet}
              />
              {/* <FormControl
                  className="formtextarea"
                  type="file"
                  label="File"
                  help="Example block-level help text here."
                  onChange={this.handleImage}
                /> */}
              <FormControl
                // defaultValue={tripPitstop.startDate}
                type="date"
                defaultValue={this.state.startDate}
                label={"Start Date"}
                onChange={this.startDate}
              />
              <FormControl
                type="date"
                defaultValue={this.state.endDate}
                label="End Date"
                onChange={this.endDate}
              />
            </FormGroup>
            <Nav>
              <NavItem href="/FirstView" active onClick={this.handleTripEdit}>
                {i18n.t('Done')}
              </NavItem>
            </Nav>
          </form>
        </Jumbotron>
      </div>
      :
      <div>Ei ole tripannut</div>;
    return <div>
      {tripWithTripStops}
    </div>;
  }
}

export default TripEditor;
