import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './AuthService';
import Routing from "./routing/Routing";
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
      console.log("morjes");
      this.authService.login();
      resultComponent = <div><p>Redirecting to the authentication service...</p></div>
    }

    return resultComponent;
  }

  startSession(history) {
    this.authService.handleAuthentication(history);
    return <div><p>Starting session...</p></div>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Journey Notes</h1>
        </header>

         <Switch>
          <Route exact path="/" render={() => this.renderFirstView()}/>
          <Route path="/startSession" render={({history}) => this.startSession(history)}/>
        </Switch>
        {/* <Routing /> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
