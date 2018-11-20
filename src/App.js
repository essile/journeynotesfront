import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TripList from "./components/TripList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <TripList/>
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
