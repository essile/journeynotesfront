import React, { Component } from 'react';



class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
          headline: "",
          description: "",
          msg:"Kävin täällä"
        };
    }
    //state = {headline: "", description: "", msg:"Kävin täällä"};

    newTrip = (event) => {
        this.setState({headline:"", description:""});
        console.log(this.state);
        // tässä vienti serviceclientin funktioon
      };
    
    headlineSet = (e) => {
        this.setState({headline:e.target.value});
        console.log('headline changed');
    }
    descriptionSet = (e) => {
        this.setState({description:e.target.value});
        console.log('description changed');
    }
    

    render() {
        return (
            <div>
                <h3>Create a new trip</h3>
                <form>
                Headline<input type="text" onChange={this.headlineSet} value={this.state.headline}/><br/>
                    
                Description<input type="text" onChange={this.descriptionSet} value={this.state.description}/><br/>

                <input type="button" value= "Create" onClick={this.newTrip}/>
                </form>
                {/* <PitStop/> */}
                {/* <TripList list= { data} /> */}
            </div>
        );
    }
}

export default Trip;


