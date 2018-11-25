import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Jumbotron, Nav, NavItem } from "react-bootstrap";
import {AddPitstop} from '../ServiceClient';


class CreatePitStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      photo: "",
      date: ""
    };
  }
  newPitstop = event => {
    console.log(this.state);
    //this.props.CreateNewPitStop(this.state);
    this.setState({ title: "", note: "" })
    AddPitstop(this.state, function (response) {
      console.dir(response.data);
    })
  };
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
            <NavItem href="/CreatePitstopView" active onClick={this.newPitstop}>
                Add
            </NavItem>
          </Nav>
          </form>
      </div>

    );
  }
}
export default CreatePitStop;
