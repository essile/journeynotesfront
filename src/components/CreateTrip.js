import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, Jumbotron, } from "react-bootstrap";
import { AddTrip } from "../ServiceClient";

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      description: "",
      photo: "",
      startDate: "",
      endDate: ""
    };
  }

  newTrip = event => {
    this.setState({ headline: "", description: "" });
    console.log(this.state);

    // tässä vienti serviceclientin funktioon
    AddTrip(this.state, function (response) {
      console.log("Worked, answer from backend:");
      console.dir(response.data);
    })

  };

  headlineSet = e => {
    this.setState({ headline: e.target.value });
    console.log("headline changed");
  };
  descriptionSet = e => {
    this.setState({ description: e.target.value });
    console.log("description changed");
  };
  startDate = (e) => {
    console.log(e.target.value);
    this.setState({ startDate: e.target.value })

    // var pvm = document.getElementById("ddate").value;
    // console.log("Saving the date given");
    // this.setState({ dateGiven: pvm })
  }
  endDate = (e) => {
    console.log(e.target.value);
    this.setState({ endDate: e.target.value })
  }

  handleImage = (e) => {
    var pic = e.target.files[0];
    console.dir(pic);

    this.setState({ photo: pic });
    // var reader = new FileReader();
    // reader.read(pic);
    // reader.onload = function () {
    //   // console.log(reader.result);
    //   this.setState({ photo: pic });
    // }.bind(this);

    // reader.onerror = function (error) {
    //   console.log('Error: ', error);
    // };
  }

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
            <FormControl
              type="file"
              label="File"
              help="Example block-level help text here."
              onChange={this.handleImage}
            />
            <FormControl
              type="date"
              label="Start Date"
              onChange={this.startDate}
            />
            <FormControl
              type="date"
              label="End Date"
              onChange={this.endDate}
            />
          </FormGroup>
<<<<<<< HEAD
=======
          <FormGroup>
          <FormControl
            type="file"
            label="File"
            help="Example block-level help text here."
          />
          </FormGroup>
          
>>>>>>> master
          <Nav bsStyle="pills">
            {/* <NavItem href="/CreatePitstopView" active onClick={this.newTrip}> */}
            <NavItem active onClick={this.newTrip}>
              Create
            </NavItem>
          </Nav>
        </form>
      </div>
    );
  }
}

export default Trip;
