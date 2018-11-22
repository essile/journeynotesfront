import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Jumbotron, Nav, NavItem } from "react-bootstrap";


class CreatePitStop extends Component {
  state = { location: "", description: "" };
  newPitstop = event => {
    console.log(this.state);
    //this.props.CreateNewPitStop(this.state);
    this.setState({ location: "", description: "" });
  };
  locationSet = e => {
    this.setState({ location: e.target.value });
    console.log("location changed");
  };
  descriptionSet = e => {
    this.setState({ description: e.target.value });
    console.log("dtion changed");
  };
  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
        <h2>Create a new pitstop</h2>
        </Jumbotron>
        <form>
        <FormGroup>
          <ControlLabel>Where:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.location}
            placeholder="The Big Apple"
            onChange={this.locationSet}
          />
          <ControlLabel>Give a description:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.description}
            placeholder="Went to the Empire State Building"
            onChange={this.descriptionSet}
          />
          </FormGroup>
          
          <Nav bsStyle="pills">
            <NavItem href="http://localhost:3000/CreatePitstopView" active onClick={this.newTrip}>
                Add
            </NavItem>
          </Nav>
          </form>
      </div>

    );
  }
}
export default CreatePitStop;
