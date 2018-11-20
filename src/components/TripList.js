import React, { Component } from 'react';
//import NewTrip from "./NewTrip";
import PitStop from "./PitStop";


class TripList extends Component {
    render() {
        return (
            <div>
                <h1>This is the list of old trips</h1>
                <h2>Add new trip</h2>
                <PitStop/>
            </div>
        );
    }
}

export default TripList;