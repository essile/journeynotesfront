import React, { Component } from 'react';
import CreatePitstop from '../components/CreatePitStop';

class CreatePitstopView extends Component {
    render() {
        return (
            <div>
                You are creating a pitstop to trip x
                <CreatePitstop />
            </div>
        );
    }
}

export default CreatePitstopView;