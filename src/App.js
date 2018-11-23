import React, { Component } from 'react';
import './App.css';
import AuthService from './AuthService';
import Routing from "./routing/Routing";
import { Grid } from "react-bootstrap";
import FirstView from './views/FirstView';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.authService = new AuthService();
  }

  renderFirstView() {
    let resultComponent = <FirstView auth={this.authService}/>;

    if (!this.authService.isAuthenticated()) {
       console.log("morjes 7");
      this.authService.login();
      resultComponent = <div><p>Redirecting to the authentication service...</p></div>
    }
    return resultComponent;
  }

  startSession(history) {
    console.log("morjes startSession ");
    console.log("morjes 7");
    this.authService.handleAuthentication(history);
    return <div><p>Starting session...</p></div>;
  }

  createLogoutButton() {
    let button = null;
    
    if (this.authService.isAuthenticated()) {
      console.log("logout button")
      button = <button onClick={()=>this.authService.logout()}>Logout</button>;
    }  
    return button;
    }


  render() {
    let logoutButton =  this.createLogoutButton();
    return (
      <div className="App">
      <Grid>      
        <Routing />
      </Grid>
        <header className="App-header">
       
          <h1 className="App-title">Welcome to Journey Notes</h1>
        </header>

         <Switch>
          <Route exact path="/" render={() => this.renderFirstView()}/>
          <Route path="/startSession" render={({history}) => this.startSession(history)}/>
        </Switch>
        {/* <Routing /> */}
        {logoutButton}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
