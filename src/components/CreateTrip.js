import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, Jumbotron, Form } from "react-bootstrap";
import { AddTrip } from "../ServiceClient";
import plusbutton from "../images/plusbutton.png";
import '../cssstyles/Form.css';
import SearchComponent from "../mapstuff/SearchComponent";
import i18n from "../i18n";

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      description: "",
      photo: "",
      startDate: "",
      endDate: "",
      position: "",
    };
  }


  newTrip = event => {
    // event.preventDefault();
    this.setState({ headline: "", description: "" });
    console.log(this.state);

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

  place = (coord) => {
    console.log("from place: " + coord);
    console.log("parsettu" + JSON.parse(coord))
    this.setState({position: JSON.parse(coord)})
    console.log(this.state)
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
            <ControlLabel className='formtext'>{i18n.t('Give a headline')}:</ControlLabel>
            <FormControl  className='formtextarea'
              type="text"
              value={this.state.headline}
              placeholder={i18n.t('Placeholdertext Trip headline')}
              onChange={this.headlineSet}
            />
            <ControlLabel className='formtext'>{i18n.t('Give a description')}:</ControlLabel>
            <FormControl className='formtextarea'
              type="text"
              value={this.state.description}
              placeholder={i18n.t('Placeholdertext Trip description')}
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
              label={i18n.t('Start date')}
              onChange={this.startDate}
            />
            <FormControl className='formtextarea'
              type="date"
              label={i18n.t('End date')}
              onChange={this.endDate}
            />
          </Form>
          </FormGroup>
          <SearchComponent onSelectPlace={this.place}/>
          <Nav>
            <NavItem href="/FirstView" active onClick={this.newTrip}>
            <div>
              <img className='plus' src={plusbutton} alt={i18n.t('Create')}/>
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
