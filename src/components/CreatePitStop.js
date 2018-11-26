import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Jumbotron, Nav, NavItem } from "react-bootstrap";
import {AddPitstop, GetTripWithPitstops} from '../ServiceClient';


class CreatePitStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      photo: "",
      date: "",
      tripId: ""
    };
  }

  componentDidMount = () => {
    let tripId;
    if (this.props.match === undefined) {
      tripId = this.props.tripId;
    } else {
      tripId = this.props.match.params.tripId;
    }
    this.setState({tripId : tripId})
  };

  newPitstop = event => {
    this.setState({ title: "", note: "" })
    AddPitstop(this.state, function (response) {
    })
    this.setState(this.state);
    this.update();
  };

  update = () => {
    let tripId = this.state.tripId;
    GetTripWithPitstops(tripId, response => {
      var tripPitstops = response;
      this.setState({ tripPitstops: tripPitstops});
    });
    this.setState(this.state);
  }

  titleSet = e => {
    this.setState({ title: e.target.value });
    console.log("title changed");
  };
  noteSet = e => {
    this.setState({ note: e.target.value });
    console.log("note changed");
  };
  dateSet = (e) => {
    console.log(e.target.value);
    this.setState({ date: e.target.value })
  }
  handleImage = (e) => {
    var image = e.target.files[0];
    console.dir(image);
    this.setState({ photo: image });
  }
  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
        <h2>Create a new pitstop</h2>
        </Jumbotron>
        <form>
        <FormGroup>
          <ControlLabel>Title:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="The Big Apple"
            onChange={this.titleSet}
          />
          <ControlLabel>Leave a note:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.note}
            placeholder="Went to the Empire State Building"
            onChange={this.noteSet}
          />
           <FormControl
              type="file"
              label="File"
              help="Example block-level help text here."
              onChange={this.handleImage}
            />
            <FormControl
              type="date"
              label="Date"
              onChange={this.dateSet}
            />
          </FormGroup>
          
          <Nav bsStyle="pills">
            <NavItem href={`/TripView/${this.state.tripId}`} active onClick={this.newPitstop}>
                Add
            </NavItem>
          </Nav>
          </form>
      </div>

    );
  }
}
export default CreatePitStop;
