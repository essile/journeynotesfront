import React, { Component } from 'react';
import Trip from '../components/Trip';
import CreatePitStop from '../components/CreatePitStop';

class TripView extends Component {

    state = { startDate: "", endDate: "" }
    
    startDate = (date) => {
        var stringDate = date[0];
        this.setState({ startDate: stringDate })
    }

    endDate = (date) => {
        var stringDate = date[0];
        this.setState({ endDate: stringDate })
    }
    
    render() {
        console.log("logg " + this.state.startDate);
        return (
            <div>
                <Trip startDate={this.startDate} endDate={this.endDate} {...this.props} />
                <CreatePitStop {...this.props} startDate={this.state.startDate} endDate={this.state.endDate}/>
            </div>
        );
    }
}

export default TripView;