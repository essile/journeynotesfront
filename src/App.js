import React, { Component } from "react";
import "./App.css";
import Routing from "./routing/Routing";
import { Grid } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
      
      
        <Routing />
      </Grid>
      </div>
    );
  }
}

export default App;
