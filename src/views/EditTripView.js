import React, { Component } from 'react';
import TripEditor from '../components/TripEditor';

class EditTripView extends Component {
    render() {
        return (
            <div>
                <TripEditor {...this.props}/>
            </div>
        );
    }
}

export default EditTripView;