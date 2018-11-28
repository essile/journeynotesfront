import React, { Component } from "react";
import "./App.css";
import AuthService from "./AuthService";
import { Switch, Route } from "react-router-dom";
import FirstView from "./views/FirstView";
import CreateTripView from "./views/CreateTripView";
import TripView from "./views/TripView";
import { Col, Navbar, NavItem, Nav, MenuItem, Image, Button, Collapse, Well } from "react-bootstrap";
import EditTripView from "./views/EditTripView";
import logoutbutton from "./images/logoutbutton.png";
import menu from "./images/menu.png";
import viewmapbutton from "./images/viewmapbutton.png";



class App extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
    this.state = {open:false}
  }

  renderFirstView() {
    let resultComponent = <FirstView auth={this.authService} />;

    if (!this.authService.isAuthenticated()) {
      console.log("morjes 7");
      this.authService.login();
      resultComponent = (
        <div>
          <p>Redirecting to the authentication service...</p>
        </div>
      );
    }
    return resultComponent;
  }

  startSession(history) {
    console.log("morjes startSession ");
    console.log("morjes 7");
    this.authService.handleAuthentication(history);
    return (
      <div>
        <p>Starting session...</p>
      </div>
    );
  }

  createLogoutButton() {
    let button = null;

    if (this.authService.isAuthenticated()) {
      console.log("logout button");
      button = (                  
      <div>
      <button className="button">
        <Image  src={logoutbutton} className='plus' alt='Logout'
         onClick={() => this.authService.logout()}/>
         <h3>Logout</h3>
         </button>
      </div>
      );
    }
    return button;
  }

  render() {
    let logoutButton = this.createLogoutButton();
    return (
      <div>
      <Nav>
        <NavItem>
        <Button className="button">
        <Image  src={menu} className='menuicon' alt='Menu' responsive/>
         Menu
         </Button>

        </NavItem>
         <Navbar.Header>
        <h1>journey</h1> 
        <h1>notes</h1>
        </Navbar.Header>

        <Button className="button" onClick={() => this.setState({ open: !this.state.open })}>
        <Image src={viewmapbutton} alt='View Map' className="menuicon" responsive/>
          Open Map
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Collapse tässä terve
            </Well>
          </div>
        </Collapse>
        </Nav>
        

      <div className="App">
      <Col xs={12} sm={8} md={6}>     
        <h1>journey</h1> 
        <h1>notes</h1>
        <Switch>
          <Route exact path="/" render={() => this.renderFirstView()} />
          <Route path="/startSession" render={({ history }) => this.startSession(history)}/>
          <Route path="/FirstView" component={FirstView}/>
          <Route path="/CreateTripView" component={CreateTripView} />
          <Route path="/TripView/:tripId" component={TripView} />
          <Route path="/EditTripView/:tripId" component={EditTripView} />
        </Switch>  
        {logoutButton}
        </Col>
        </div>
      </div>
    );
  }
}

export default App;
