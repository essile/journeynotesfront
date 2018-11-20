import React, {Component} from 'react';

class PitStop extends Component{
    state={location:"", description:""}
    newPitstop=(event)=>{
        console.log(this.state);
        //this.props.CreateNewPitStop(this.state);
        this.setState({location:"", description:""});
    }
    locationSet = (e) => {
        this.setState({location:e.target.value});
        console.log('location changed');
    }
    descriptionSet = (e) => {
        this.setState({description:e.target.value});
        console.log('dtion changed');
    }
    render(){
    return (
        <div>
        <p>Create new pitstop</p>
        Location<input type="text" onChange={this.locationSet} value={this.state.location}/><br/>
        Description<input type="text"onChange={this.descriptionSet} value={this.state.description}/><br/>
        <input type="button" value= "Create" onClick={this.newPitstop}/>
        </div>
    )
};
}
export default PitStop;