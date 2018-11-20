import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Trip from "../components/Trip";
import NewTrip from "../components/NewTrip";
import PitStop from "../components/PitStop";
import TripList from "../components/TripList";
import Register from "../components/Register";


class Routing extends Component {
    render() {
        return (
            <Router>
            <div>
            <Navigation/>
            <Switch>
                <Route path="/NewTrip" component={NewTrip}/>
            </Switch>
            </div>
            </Router>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to="/NewTrip" activeClassName="active">New Trip</NavLink>
            </div>
        );
    }
}


export default Routing;