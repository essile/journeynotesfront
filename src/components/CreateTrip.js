import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, Jumbotron } from "react-bootstrap";


class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      description: "",
      msg: "Kävin täällä"
    };
  }

  newTrip = event => {
    this.setState({ headline: "", description: "" });
    console.log(this.state);
    // tässä vienti serviceclientin funktioon
  };

  headlineSet = e => {
    this.setState({ headline: e.target.value });
    console.log("headline changed");
  };
  descriptionSet = e => {
    this.setState({ description: e.target.value });
    console.log("description changed");
  };

  render() {
    return (
      <div>
      <Jumbotron className="jumbo">
        <h2>Create a new trip</h2>
      </Jumbotron>
        <form>
        <FormGroup>
          <ControlLabel>Give a headline:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.headline}
            placeholder="I guess we are not in Kansas anymore"
            onChange={this.headlineSet}
          />
          <ControlLabel>Give a description:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.description}
            placeholder="Went to ride a hurricane"
            onChange={this.descriptionSet}
          />
          </FormGroup>
          <FormGroup>
          <FormControl
            type="file"
            label="File"
            help="Example block-level help text here."
          />
          </FormGroup>
          
          <Nav bsStyle="pills">
            <NavItem href="/CreatePitstopView" active onClick={this.newTrip}>
                Create
            </NavItem>
          </Nav>
        </form>
      </div>
    );
  }
}

export default Trip;
