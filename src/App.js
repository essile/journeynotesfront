import React, { Component } from "react";
import "./App.css";
import AuthService from "./AuthService";
import { Link, Switch, Route } from "react-router-dom";
import FirstView from "./views/FirstView";
import CreateTripView from "./views/CreateTripView";
import TripView from "./views/TripView";
import { Col, Nav, Image, Button, Collapse, Well } from "react-bootstrap";
import EditTripView from "./views/EditTripView";
import logoutbutton from "./images/logoutbutton.png";
import languagebutton from "./images/languagebutton.png";
import deleteaccount from "./images/deleteaccount.png";
import menu from "./images/menu.png";
import FinnishFlag from "./images/FinnishFlag.png";
import UKflag from "./images/UKflag.png";
import SwedishFlag from "./images/SwedishFlag.png";
import BrazilianFlag from "./images/BrazilianFlag.png";
import i18n from "./i18n";
import NotFound from "./views/NotFound";
import { DeleteAccount } from "./ServiceClient";
const warningMessageAccount = i18n.t('Delete account warning message');

class App extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
    this.state = { open: false }
  }

  AccountDelete=()=> {
    DeleteAccount();
    this.authService.logout();
  }

  renderFirstView() {
    let resultComponent = <FirstView auth={this.authService} />;

    if (!this.authService.isAuthenticated()) {
      // console.log("morjes 7");
      this.authService.login();
      resultComponent = (
        <div>
          <p>{i18n.t('Redirecting auth message')}</p>
        </div>
      );
    }
    return resultComponent;
  }

  startSession(history) {
    // console.log("morjes startSession ");
    this.authService.handleAuthentication(history);
    return (
      <div>
        <p>{i18n.t('Starting message')}</p>
      </div>
    );
  }

/*   createLogoutButton() {
    let button = null;

    if (this.authService.isAuthenticated()) {
      console.log("logout button");
      button = (
        <button className="button">
          <Image src={logoutbutton} className='plus' alt='Logout'
            onClick={() => this.authService.logout()} />
          <h3>{i18n.t('Logout')}</h3>
        </button>
      );
    }
    return button;
  }
 */
  render() {
    
    return (
      <div>

          <div className="titlestyle">
            <h1>journey</h1>
            <h1>notes</h1>
          </div>
        <Nav className="nav">
          <Link to='/FirstView'>
            <Button className="button">
              <Image src={menu} className='menuicon' alt='Menu' responsive />
              Home
         </Button>
          </Link>
          <Button className="button" onClick={() => this.authService.logout()}>
            <Image src={logoutbutton} alt='Log Out' className="menuicon" responsive />
            {/* {logoutbutton} */}
            Log Out
        </Button>
        <div>
          <Button className="button" onClick={() => this.setState({open:!this.state.open})}>
            <Image src={languagebutton} alt='Language change' className="menuicon" responsive />
            {/* {logoutbutton} */}
            Language
        </Button>
          <Collapse in={this.state.open}>
            <div>
                  <Well>
                   <ChangeLanguage />
                  </Well>
            </div>
          </Collapse>
          </div>
          <Button className="button" onClick={() => {
                        if (window.confirm(warningMessageAccount))
                          this.AccountDelete();
                      }}>
            <Image src={deleteaccount} className='menuicon' alt='Menu' responsive />
            Delete<br/> account
          </Button>
        </Nav>

        <div className="App">
          <Col xs={12} sm={10} md={8}>
            <Switch>
              <Route exact path="/" render={() => this.renderFirstView()} />
              <Route path="/startSession" render={({ history }) => this.startSession(history)} />
              <Route path="/FirstView" component={FirstView} />
              <Route path="/CreateTripView" component={CreateTripView} />
              <Route path="/TripView/:tripId" component={TripView} />
              <Route path="/EditTripView/:tripId" component={EditTripView} />
              <Route component={NotFound} />
            </Switch>
          </Col>
        </div>
      </div>
    
    );
  }
}

export default App;

function ChangeLanguage() {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }
  return (
    <div>
      <input type="image" onClick={() => changeLanguage('en')} src={UKflag} alt="en" />&nbsp;
      <input type="image" onClick={() => changeLanguage('fi')} src={FinnishFlag} alt="fi" />&nbsp;
      <input type="image" onClick={() => changeLanguage('se')} src={SwedishFlag} alt="se" />&nbsp;
      <input type="image" onClick={() => changeLanguage('pt')} src={BrazilianFlag} alt="pt" />&nbsp;
      {/* <button onClick={() => changeLanguage('en')}>English</button> */}
      {/* <button onClick={() => changeLanguage('fi')}>Suomi</button> */}
    </div>
  );
};