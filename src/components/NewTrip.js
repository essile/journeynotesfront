import React, { Component } from 'react';
import Trip from "./Trip";

class NewTrip extends Component {
    render() {
        return (
            <div>
            <form>
            <input type="text"/>
            </form>
            <Trip/>
                
            </div>
        );
    }
}

export default NewTrip;