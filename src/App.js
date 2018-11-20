import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TripList from "./components/TripList";
import "./images/Vene.jpg";
import Routing from "./views/Routing";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src="Vene.jpg" alt="logo" />
          <p>
            <TripList/>
          </p> */}
          <Routing/>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
