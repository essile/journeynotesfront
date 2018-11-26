import React, { Component } from 'react';
import Trip from '../components/Trip';
import CreatePitStop from '../components/CreatePitStop';

class TripView extends Component {
    render() {
        return (
            <div>
                <Trip  {...this.props}/>
                <CreatePitStop {...this.props}/>
            </div>
        );
    }
}

export default TripView;