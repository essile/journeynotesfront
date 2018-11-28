import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, Jumbotron, Form } from "react-bootstrap";
import { AddTrip } from "../ServiceClient";
import plusbutton from "../images/plusbutton.png";
import '../cssstyles/Form.css';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      description: "",
      photo: "",
      startDate: "",
      endDate: "",
    };
  }


  newTrip = event => {
    event.preventDefault();
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
          <h2>Create a new trip</h2>
          <Jumbotron className='jumbo'>
        <form className="form">
          <FormGroup>
            <ControlLabel className='formtext'>Give a headline:</ControlLabel>
            <FormControl  className='formtextarea'
              type="text"
              value={this.state.headline}
              placeholder="I guess we are not in Kansas anymore"
              onChange={this.headlineSet}
            />
            <ControlLabel className='formtext'>Give a description:</ControlLabel>
            <FormControl className='formtextarea'
              type="text"
              value={this.state.description}
              placeholder="Went to ride a hurricane"
              onChange={this.descriptionSet}
            />
            <FormControl className='formtextarea'
              type="file"
              label="File"
              help="Example block-level help text here."
              onChange={this.handleImage}
            />
            <Form inline>
            <FormControl
              type="date"
              label="Start Date"
              onChange={this.startDate}
            />
            <FormControl className='formtextarea'
              type="date"
              label="End Date"
              onChange={this.endDate}
            />
          </Form>
          </FormGroup>
          <Nav>
            <NavItem href="/FirstView" active onClick={this.newTrip}>
            <div>
              <img className='plus' src={plusbutton} alt='Create'/>
            </div>
            </NavItem> 
          </Nav>
        </form>
        </Jumbotron>
      </div>
    );
  }
}

export default Trip;
